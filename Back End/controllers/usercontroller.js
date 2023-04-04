const UserModel = require("../models/usermodel");
const bcrypt = require("bcrypt")

const addUser = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        await UserModel.create(req.body);
        res.json({ sucess: true, message: "Signup Sucessfully" })
    } catch (error) {
        res.json({ sucess: false, message: "Cannot Signup" });
        console.log(error);
    }
}


const doLogin = async (req, res) => {
    try {
        let user = await UserModel.findOne({ email: req.body.useremail });
        console.log("user", user);
        if (user) {
            const userExist = await bcrypt.compare(req.body.userpassword, user.password)
            if (userExist) {
                res.json({
                    success: true,
                    message: "logined"
                })
            }
        } else {
            res.json({ message: "login failed" })
        }
    } catch (error) {
        res.json({
            success: false, message: "Login Failed Server Error"
        })
    }
}










module.exports = {
    addUser,
    doLogin,
}