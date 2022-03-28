import { Router } from 'express';
import userRouter from './user-router';
import companyRouter from '../routes/company-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/companies', companyRouter);


// Export default.
export default baseRouter;
