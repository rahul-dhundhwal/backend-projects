import express from 'express';
import {createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost} from '../controllers/blogPostController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

//route for creating a blog post    
router.post('/create',authMiddleware,createBlogPost);

//route for getting all blog posts
router.get('/',getBlogPosts);

//route for updating a blog post
router.put("/:id", authMiddleware,updateBlogPost);

//route for deleting a blog post
router.delete("/:id", authMiddleware,deleteBlogPost);

export default router;