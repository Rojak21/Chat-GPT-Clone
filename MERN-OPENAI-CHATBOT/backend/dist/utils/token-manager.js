import jwt from "jsonwebtoken";
export const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn, //after 7 days token will be expired
    });
    return token;
};
export const verifyToken = async (req, res, next) => { };
//# sourceMappingURL=token-manager.js.map