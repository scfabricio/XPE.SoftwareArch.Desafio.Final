import express from 'express';
import * as UserController from '../app/controllers/UserController.js';

const router = express.Router();

router.get('/', UserController.list);
router.get('/:id', UserController.get);
router.post('/', UserController.create);

export default router;

