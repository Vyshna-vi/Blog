const LikeModel = require("../models/likemodel")


const Likes = async (req, res) => {
    try {
        let likes = await LikeModel.findOne({ blog_id: req.body.blog_id })
        console.log(likes);
        if (likes) {

            if (likes.like_userid.includes(req.body.user_id)) {
                res.json({
                    success: true,
                    msg: "you are already liked"
                })

            } else {
                let dolike = await LikeModel.findOneAndUpdate({ blog_id: req.body.blog_id }, { $push: { like_userid: req.body.user_id } })
                res.json({
                    success: true,
                    msg: "liked",
                    dolike
                })
            }

        } else {
            let createlike = await LikeModel.create({ blog_id: req.body.blog_id, like_userid: [req.body.user_id] })
            res.json({
                success: true,
                msg: "created like",
                createlike
            })

        }

    } catch (error) {
        res.json({
            success: false,
            msg: 'couldnt get likes count'
        })
        // console.log(error);
    }

}


const getlike = async (req, res) => {
    try {
        let likecount = await LikeModel.findOne({ blog_id: req.params.id })
        console.log("likecount", likecount);
        let count = likecount.like_userid.length
        res.json({
            success: true,
            msg: "likes count",
            count
        })
    } catch (error) {
        res.json({
            success: false,
            msg: 'couldnt get likes count'
        })
        console.log("error", error);
    }

}




module.exports = { Likes, getlike }
