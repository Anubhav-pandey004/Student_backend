const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    answerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Answer",
    }
})
module.exports = mongoose.model("Comment",commentSchema)