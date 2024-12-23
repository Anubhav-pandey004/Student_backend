const Answer = require('../model/answer')
module.exports=getAnswer=async(req,res)=>{
    try {
        const ans = await Answer.find({
            questionId: req.body.questionId,
            verified: true
        }).populate('answeredByUserId')
        res.json({
            data: ans,
            error: false,
            success: true,
        });
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}