const Answer = require('../model/answer')
module.exports=markVerify=async(req,res)=>{
    try {
        await Answer.updateOne({_id:req.body._id},{verified:true})
        res.json({
            message : "Answer Verified",
            error : false,
            success : true,
        })
        
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}