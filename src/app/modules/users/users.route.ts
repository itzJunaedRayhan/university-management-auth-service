import express from 'express';
import { UserController } from './users.controller';
import { UserValidation } from './users.validate';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();
router.post(
  '/create-student',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyZodSchema),
  UserController.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminZodSchema),
  UserController.createAdmin,
);

export const UserRoutes = router;
