const answer=require("../model/answer")

module.exports=verifyanswer=async(req,res)=>{
    try {
        const Answers = await answer.find({ verified: false })
      .populate('questionId')
      .populate('answeredByUserId')
    console.log("Answer is", Answers);
    res.json({
        message: "All unverified answers",
        data: Answers,
        error: false,
        success: true,
    })
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}