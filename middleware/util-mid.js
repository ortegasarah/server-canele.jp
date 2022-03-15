exports.verifyToken = (req, res, next) => {

    console.log("req", req)
    const { headload, signature} = req.cookies

    if(!headload || !signature) return res.status(401).json({erroMessage:"Unauthorized"})

    jwt.verify(`${headload}.${signature}`, process.env.SECRET, (err, decoded) =>{
        if(err){
            return res.status(401).json({erroMessage:"Unauthorized"})
        }
        User.findById(decoded.userId)
        .then( user => {
            req.user = user
            next()
        })
        .catch(error => {
            res.status(401).json({ erroMessage: "err", error})
        })
    })
    
};