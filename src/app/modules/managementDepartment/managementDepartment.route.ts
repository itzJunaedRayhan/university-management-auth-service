import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validate';
import { ManagementDepartmentController } from './managementDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    ManagementDepartmentValidation.createManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.createDepartment,
);

router.get('/:id', ManagementDepartmentController.getSingleDepartment);

router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmentValidation.updateManagementDepartmentZodSchema,
  ),
  ManagementDepartmentController.updateDepartment,
);

router.delete('/:id', ManagementDepartmentController.deleteDepartment);

router.get('/', ManagementDepartmentController.getAllDepartments);

export const ManagementDepartmentRoutes = router;
