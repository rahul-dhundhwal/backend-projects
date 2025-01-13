import {BlogPost} from '../models/BlogPostModel.js';

const createPost =async(req,res)=>{
    try{
        const {title,content}=req.body;
        const post = new BlogPost({
            title,
            content,
            author:req.user._id
        });
        await post.save();
        res.status(201).json({message:"Post created successfully"});
    }catch(error){
        res.status(500).json({message:"Internal server error"});
    }
}

const getPosts = async(req,res)=>{
    try {
        const posts = await BlogPost.find().populate('author','username email');
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

const updatePost = async(req,res)=>{
    try {
        const {title,content}=req.body;
        const {id}=req.params;
        const post = await BlogPost.findByIdAndUpdate(
          id,
          { title, content },
          { new: true }
        );
        res.status(200).json({message:"Post updated successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}

const deletePost = async(req,res)=>{
    try {
        const {id}=req.params;
        await BlogPost.findByIdAndDelete(id);
        res.status(200).json({message:"Post deleted successfully"});
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}



export {createPost,getPosts,updatePost,deletePost}; 