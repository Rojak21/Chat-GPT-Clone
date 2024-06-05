import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//conncetions and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log("Server Open & connect to database✨"));
  })
  .catch((err) => console.log(err));
