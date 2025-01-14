import express from 'express';
import {createComment, getComments, updateComment, deleteComment} from '../controllers/commentController.js';
import validate from '../middlewares/validateMiddleware.js';
import { commentSchema } from '../utils/validationSchemaUtil.js';

const router = express.Router();

//route for creating a comment
router.post('/create',validate(commentSchema),createComment);

//route for getting all comments
router.get('/',getComments);

//route for updating a comment
router.put("/:id", validate(commentSchema), updateComment);

//route for deleting a comment
router.delete('/:id',deleteComment);

export default router;