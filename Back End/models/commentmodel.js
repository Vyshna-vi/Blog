const mongoose = require("mongoose")


const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    blog_id: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    date_posted: {
        type: String,
    }

})


const CommentModel = mongoose.model("Comment", commentSchema);


module.exports = CommentModel