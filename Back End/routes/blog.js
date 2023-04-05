const express = require("express");
const { addBlog, viewAllBlog, viewOneBlog,deleteBlog, editBlog } = require("../controllers/blogccontroller");
const router = express.Router();



router.post("/addblog", addBlog);
router.get("/allblog", viewAllBlog)
router.get("/singleblog/:id",viewOneBlog)
router.delete("/deleteblog/:id",deleteBlog)
router.patch("/editblog/:id",editBlog)


module.exports = router;
