import jwt from "jsonwebtoken";

const isAuhenticated = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not aunthenticated",
                success: true
            })
        }

        const decode = await jwt.verify(token. process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            })
        }

        req.id = decode.userId;
        return next();


    } catch (error) {
        console.log(error)
        res.send({
            "message" : "bhai token nhi hai"
        })
    }
}

export default isAuhenticated