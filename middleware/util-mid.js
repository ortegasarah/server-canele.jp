const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

exports.createJWT = (user) => {
    return jwt.sign({
        userId: user._id,
        email: user.email,
    }, process.env.SECRET, {
        expiresIn: '24h'
    }).split('.')
}

exports.clearRes = (data) => {
    const {
        password,
        updatedAt,
        __v,...clearData
    } = data;
    return clearData
}

exports.verifyToken = (req, res, next) => {

    console.log("req", req)
    const {
        headload,
        signature
    } = req.cookies

    if (!headload || !signature) return res.status(401).json({
        erroMessage: "Unauthorized"
    })

    jwt.verify(`${headload}.${signature}`, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                erroMessage: "Unauthorized"
            })
        }
        User.findById(decoded.userId)
            .then(user => {
                req.user = user
                next()
            })
            .catch(error => {
                res.status(401).json({
                    erroMessage: "err",
                    error
                })
            })
    })

};