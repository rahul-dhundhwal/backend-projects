import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const blogPostSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(10).required(),
});

const commentSchema = Joi.object({
  content: Joi.string().min(1).required(),
  postId: Joi.string().required(),
});

export { registerSchema, loginSchema, blogPostSchema, commentSchema };