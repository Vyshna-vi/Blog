const CommentModel = require('../models/commentmodel')


const addComment = async (req, res) => {
    try {
        req.body.date_posted = new Date().toDateString()
        let comment = await CommentModel.create(req.body)
        res.json({ sucess: true, message: "Comment Added Successfully", comment })
    } catch (error) {
        res.json({ sucess: false, message: "Cannot Add Comment" });
        console.log(error);
    }
}

const viewCommant = async (req, res) => {
    try {
        console.log(req.params.id);
        let singleComment = await CommentModel.find({ blog_id: req.params.id }).sort({ $natural: -1 })
        console.log("singlecomment", singleComment);
        res.json({ singleComment })
    } catch (error) {
        res.json({ sucess: false, message: "failed to view comment" });
        console.log("singlecommenterror", error);
    }
}













module.exports = {
    addComment,
    viewCommant,
}