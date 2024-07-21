const jwt = require('jsonwebtoken');
const User = require('../models/models');

const verifytoken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ msg: "Token missing" });
    }

    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const user = await User.findOne({ _id: decoded.id });

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        req.user = user;
        next(); // Call next middleware or route handler
    } catch (err) {
        console.error("Error verifying token:", err);
        return res.status(500).json({ msg: "Token verification failed" });
    }
};

module.exports = verifytoken;
