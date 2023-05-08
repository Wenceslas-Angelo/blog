import Express from 'express';
import postCtrl from '../controllers/Post.js';

const router = Express.Router();

router.post('/', postCtrl.createPost);
router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getOnePost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

export default router;
