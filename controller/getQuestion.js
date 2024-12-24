const PostSchema = require('../model/post');

module.exports = getQuestions = async (req, res) => {
    try {
        const { page = 1 } = req.query; // Get the page number from query params, default to 1
        console.log(page);
        
        
        // Calculate the limit based on the page number (10 posts on the first page, 20 on the second, etc.)
        const limit = page * 10; // For page 1: 10 posts, page 2: 20 posts, and so on
        const skip = (page - 1) * 10; // Skip the posts already retrieved in previous pages
        
        // Retrieve posts using skip and limit
        const posts = await PostSchema.find().skip(skip).limit(limit);
        
        
        res.json({
            data: posts,
            error: false,
            success: true,
        });
    } catch (err) {
        res.json({
            message: err.message,
            error: true,
            success: false,
        });
    }
};
