const express = require("express");
const { addBlog, viewAllBlog, viewOneBlog } = require("../controllers/blogccontroller");
const router = express.Router();



router.post("/addblog", addBlog);
router.get("/allblog", viewAllBlog)
router.get("/singleblog/:id",viewOneBlog)


module.exports = router;
