import express from 'express';
import {createComment, getComments, updateComment, deleteComment} from '../controllers/commentController.js';

const router = express.Router();

//route for creating a comment
router.post('/create',createComment);

//route for getting all comments
router.get('/',getComments);

//route for updating a comment
router.put('/:id',updateComment);

//route for deleting a comment
router.delete('/:id',deleteComment);

export default router;