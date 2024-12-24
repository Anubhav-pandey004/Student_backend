const Post = require('../model/post');
const Comment = require('../model/comment')
const Answer = require('../model/answer')

module.exports =deletePost=async(req,res)=> {
    // try {
        const question = req.body.question;
    
        // Delete all comments associated with this post
        if((question.Comments).length > 0){
            await Promise.all(question.Comments?.map(async (comment) => {
            await Comment.findByIdAndDelete(comment._id);
          }
        ))}
    
        // // Delete all answers associated with this post
        if((question.answers).length > 0){
            await Promise.all(question.Answers?.map(async (answer) => {
                await Answer.findByIdAndDelete(answer._id);
              }));
        }
    
        // Delete the post itself
        await Post.findByIdAndDelete(question._id);
        console.log(question," ",(question.Comments).length);
        
    
        res.json({
          success: true,
          message: "Post deleted successfully"
        });
    //   } catch (error) {
    //     res.status(500).json({
    //       success: false,
    //       message: "Error deleting post and associated data",
    //       error: error.message
    //     });
    //   }
    };
