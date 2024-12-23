const post =require('../model/post')
const Comment =require('../model/comment')
const Answer = require('../model/answer')
module.exports=addcomment=async(req,res)=>{
    try {
        const cmt = await new Comment(req.body)
        console.log("Got some req",req.body);
        if(req.body.type=="answer"){
            const result = await cmt.save();
            await Answer.findByIdAndUpdate(
            req.body.answerId,
            { $push: { Comments:result._id  } },
            { new: true, useFindAndModify: false }
        );
        }
        
        const result = await cmt.save();
        // console.log(result);

        await post.findByIdAndUpdate(
            req.body.questionId,
            { $push: { Comments:result._id  } },
            { new: true, useFindAndModify: false }
        );
        res.json({
            message : "Comment added successfully",
            error : false,
            success : true,
            data : result,
        })
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}