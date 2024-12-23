const userModel=require('../model/user')
module.exports= AllUsers =async(req,res)=>{
    try {
        const users=await userModel.find()
        res.json({
            message : "All users fetched successfully",
            error : false,
            success : true,
            data : users,
        })
    } catch (err) {
        res.json({
            message : err,
            error : true,
            success : false,
        })
    }
}