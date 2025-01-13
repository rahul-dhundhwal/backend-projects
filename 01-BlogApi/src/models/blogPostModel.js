import mongoose, { Schema } from "mongoose";

const blogPostModel = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref:"user"
    }
  },
  {
    timestamps: true,
  }
);

export const blogPost=mongoose.model("blogPost",blogPostModel);