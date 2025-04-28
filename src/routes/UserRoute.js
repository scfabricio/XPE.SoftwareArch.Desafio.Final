import express from 'express';
import * as UserController from '../app/controllers/UserController.js';

const router = express.Router();

router.get('/', UserController.list);
router.post('/', UserController.create);
router.get('/:id', UserController.get);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.remove);

export default router;

