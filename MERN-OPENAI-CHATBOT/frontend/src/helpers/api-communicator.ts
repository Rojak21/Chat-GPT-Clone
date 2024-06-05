import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

// export const loginUser = async (email: string, password: string) => {
//     try {
//       const res = await axios.post("/user/login", { email, password });
//       return res.data;
//     } catch (error: any) {
//       if (error.response && error.response.status === 422) {
//         throw new Error("Validation error");
//       } else {
//         throw new Error("Unable to login");
//       }
//     }
//   };
