const userModel = require('../model/user')

module.exports.userDetails=async(req,res)=>{
    try {
        console.log("checkpoint2 .............",req.user.id);
        
        const user = await userModel.findById(req.user.id)

        console.log("checkpoint3 .............",user);
        res.status(200).json({
            message : "User Details fetched successfully",
            error : false,
            success : true,
            data : user
        })
    } catch (error) {
        message=error.message
        res.status(400).json({
            message : message || error,
            error : true,
            success : false,
        })
    }
}