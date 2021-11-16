const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const validateJWT = (req, res, next) => {
    const token = req.header("x-token");

    if (!token) {
        res.status(401).json({
            ok: false,
            msg: "Token not found",
        });
    } else {
        try {
            const { uid, name } = jwt.verify(token, secretKey);
            req.uid = uid;
            req.name = name;
            next();
        } catch (err) {
            res.status(401).json({
                ok: false,
                msg: "Token is not valid",
            });
        }
    }
};

module.exports = validateJWT;
