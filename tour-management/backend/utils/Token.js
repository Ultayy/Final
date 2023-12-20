import jwt from "jsonwebtoken";

export const Token = (req, res, next) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).json({ success: false, message: "You are not authorized" });
    }

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Token invalid" });
        }
        console.log("Decoded user:", user);

        req.user = user;
        next();
    });
};

export const verifyUser = (req, res, next) => {
    Token(req, res, () => {
        if (req.user.id === req.params.id || req.user.role === 'user') {
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not authenticated" });
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    Token(req, res, () => {
        if (req.user.role === 'admin') {
            next();
        } else {
            return res.status(401).json({ success: false, message: "Not authorized" });
        }
    });
};
