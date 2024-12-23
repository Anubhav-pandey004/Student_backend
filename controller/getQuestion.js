const PostSchema = require('../model/post');

module.exports = getQuestion = async (req, res) => {
    try {
        const posts = await PostSchema.find().limit(10); // Retrieve 10 posts
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
