import { Comment } from "../models/commentModel";

const createComment = async (req, res) => { 
    try {
        const { content, author } = req.body;
        const comment = new Comment({ 
            content, 
            author 
        });
        await comment.save();
        res
          .status(201)
          .json({ message: "Comment created successfully", comment });

    } catch (error) {
        res.status(500).json( "Error while generating comment!!" );

    }
}

const getComments = async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ post: postId }).populate('author', 'username');
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching comments', error: err.message });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const comment = await Comment.findByIdAndUpdate(id, { content }, { new: true });
    res.status(200).json({ message: 'Comment updated successfully', comment });
  } catch (err) {
    res.status(400).json({ message: 'Error updating comment', error: err.message });
  }
};
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    await Comment.findByIdAndDelete(id);
    res.status(200).json({ message: 'Comment deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting comment', error: err.message });
  }
};


export { createComment, getComments, updateComment, deleteComment };