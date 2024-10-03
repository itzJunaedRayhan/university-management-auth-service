import express from 'express';
import { FacultyController } from './faculty.controller';
import { FacultyValidation } from './faculty.validate';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.get('/:id', FacultyController.getSingleFaculty);

router.get('/', FacultyController.getAllFaculties);

router.patch(
  '/:id',
  validateRequest(FacultyValidation.updateFacultyZodSchema),
  FacultyController.updateFaculty,
);

router.delete('/:id', FacultyController.deleteFaculty);

export const FacultyRoutes = router;
