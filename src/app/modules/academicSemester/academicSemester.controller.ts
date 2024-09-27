import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterServices } from './academicSemester.services';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import catchAsync from '../../../shared/catchAsync';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result =
      await AcademicSemesterServices.createSemester(academicSemesterData);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester created successfully!',
      data: result,
    });
    next();
  },
);

export const AcademicSemesterController = {
  createSemester,
};
