import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validate';
import { AcademicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty,
);

router.get('/:id', AcademicFacultyController.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.updateFaculty,
);

router.delete('/:id', AcademicFacultyController.deleteFaculty);

router.get('/', AcademicFacultyController.getAllFaculties);

export const AcademicFacultyRoutes = router;
