import express from "express";
import {
  createBlogPost,
  getBlogPosts,
  updateBlogPost,
  deleteBlogPost,
} from "../controllers/blogPostController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import validate from "../middlewares/validateMiddleware.js";
import { BlogPost } from "../models/BlogPostModel.js";
import { blogPostSchema } from "../utils/validationSchemaUtil.js";

const router = express.Router();

//route for creating a blog post
router.post(
  "/create",
  authMiddleware,
  validate(blogPostSchema),
  createBlogPost
);

//route for getting all blog posts
router.get("/", getBlogPosts);

//route for updating a blog post
router.put("/:id", authMiddleware, validate(blogPostSchema), updateBlogPost);

//route for deleting a blog post
router.delete("/:id", authMiddleware, deleteBlogPost);

export default router;
