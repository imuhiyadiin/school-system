import jwt from "jsonwebtoken";
const secret = process.env.SECRET_KEY;
export const verifyToken = async (req, res, next) => {
    try {
        // Bearer data
        const token = req.headers.authorization?.startsWith("Bearer") && req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: "unAuthorized!."
            });
        }
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            message: "invalid token"
        });
    }
};
//# sourceMappingURL=Auth.js.map