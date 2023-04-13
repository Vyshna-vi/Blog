const express = require("express");
const { addBlog, viewAllBlog, viewOneBlog, deleteBlog, editBlog, viewBlogCategory, viewSingleUserBlogs } = require("../controllers/blogccontroller");
const { addComment, viewCommant } = require("../controllers/commentcontroller");
const { Likes, getlike } = require("../controllers/likecontroller");
const router = express.Router();



router.post("/addblog", addBlog);
router.get("/allblog", viewAllBlog)
router.get("/singleblog/:id", viewOneBlog)
router.delete("/deleteblog/:id", deleteBlog)
router.patch("/editblog/:id", editBlog)
router.get("/viewcategory/:category", viewBlogCategory)
router.post("/addcomment", addComment)
router.get("/viewcomment/:id", viewCommant)
router.get("/viewsingleuserblog/:id",viewSingleUserBlogs)
router.post("/likeblog",Likes)
router.get("/getlikecount/:id",getlike)





module.exports = router;