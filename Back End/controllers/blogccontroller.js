const BlogModel = require("../models/blogmodel")


const addBlog = async (req, res) => {
    try {
        // req.body.date_posted=new Date()
        let blog = await BlogModel.create(req.body)
        // console.log("Blog", blog);
        res.json({ sucess: true, message: "Blog Added Successfully" })
    } catch (error) {
        res.json({ sucess: false, message: "Cannot Add Blog" });
        // console.log(error);
    }
}

const viewAllBlog = async (req, res) => {
    try {
        let allBlog = await BlogModel.find()
        // console.log("allblog", allBlog);
        res.json({ sucess: true, message: "Get All Task", allBlog })
    } catch (error) {
        res.json({ sucess: false, message: "failed to view all task" });
        // console.log("allblogerror", error);
    }
}

const viewOneBlog = async (req, res) => {
    try {
        let singleBlog = await BlogModel.find({ author_id: req.params.id })
        // console.log("singleblog", singleBlog);
        res.json({ singleBlog })
    } catch (error) {
        res.json({ sucess: false, message: "failed to load single blog" });
        // console.log("oneblogerror", error);
    }
}

const deleteBlog = async (req, res) => {
    try {
        let deleteBlog = await BlogModel.deleteOne({ _id: req.params.id })
        // console.log(deleteBlog);
        res.json({ sucess: true, message: "deleted successfully" })
    } catch (error) {
        res.json({ sucess: false, message: "failed to delete single blog" });
        // console.log("deleteblogerror", error);
    }
}

const editBlog = async (req, res) => {
    try {
        let editOneBlog = await BlogModel.findOneAndUpdate({ _id: req.params.id }, req.body)
        // console.log("editedblog", editOneBlog);
        res.json({ sucess: true, message: "Updated Successfully" })
    } catch (error) {
        res.json({ sucess: false, message: "failed to edit blog" });
        // console.log("editblogerror", error);
    }
}

const viewBlogCategory = async (req, res) => {
    try {
        let selectOneCategory = await BlogModel.find({ category: req.params.category })
        res.json({ sucess: true, message: "Selected Successfully" ,selectOneCategory})

    } catch (error) {
        res.json({ sucess: false, message: "failed to find category" });
        console.log("findcategoryerror", error);
    }
}









module.exports = {
    addBlog,
    viewAllBlog,
    viewOneBlog,
    deleteBlog,
    editBlog,
    viewBlogCategory
}