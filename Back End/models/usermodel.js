const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        maxLength: 200,
        // required: true,
        // unique: true
    },
    email: {
        type: String,
        maxLength: 200,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        maxLength: 200,
        required: true
    },
    phonenumber:{
        type:Number,
        required:true
    }

})


const UserModel = mongoose.model("User", userSchema);


module.exports = UserModel