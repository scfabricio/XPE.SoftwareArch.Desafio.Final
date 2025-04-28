import { randomBytes, scryptSync } from 'node:crypto';
import * as UserModel from '../models/UserModel.js';

export function create(req, res) {
  const { name, email, password } = req.body;
  const salt = randomBytes(16).toString('hex');
  const hashed = scryptSync(password, salt, 64).toString('hex');
  const newUser = UserModel.createUser({ name, email, password: `${salt}:${hashed}` });
  res.status(201).json(newUser);
}

export function list(req, res) {
  const users = UserModel.getAllUsers();
  res.json(users);
}

export function get(req, res) {
  const user = UserModel.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.json(user);
}

