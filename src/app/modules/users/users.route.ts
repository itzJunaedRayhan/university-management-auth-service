import express from 'express';
import { UserController } from './users.controller';
import { UserValidation } from './users.validate';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();
router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
);

export const UserRoutes = router;
