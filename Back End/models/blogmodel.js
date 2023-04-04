const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    blog_title: {
        type: String,
        required: true,
    },
    blog_descrip: {
        type: String,
        required: true,
    },
    date_posted: {
        type: String,
        required: true,
    },
    author_id: {
        type: String,
        required: true,
    },
    author_name: {
        type: String,
        maxLength: 200,
        required: true,
    },
})







const BlogModel = mongoose.model("Blog", blogSchema);


module.exports = BlogModel