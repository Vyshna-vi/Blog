const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema({ 
    blog_id: {
        type: String
    },
    like_userid: {
        type: Array,
        default: []
    }


})

const Likemodel = mongoose.model("Likes", likeSchema);
module.exports = Likemodel