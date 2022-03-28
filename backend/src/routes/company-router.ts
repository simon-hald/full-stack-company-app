import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import companyService from "../services/company-service";
import { ParamMissingError } from '../shared/errors';



// Constants
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
    get: '/all',
    add: '/add',
    update: '/update',
    delete: '/delete/:id',
} as const;



/**
 * Get all companies.
 */
router.get(p.get, async (_: Request, res: Response) => {
    const companies = await companyService.getAll();
    return res.status(OK).json(companies);
});


/**
 * Add one company.
 */
router.post(p.add, async (req: Request, res: Response) => {
    const { company } = req.body;
    // Check param
    if (!company) {
        throw new ParamMissingError();
    }
    // Fetch data
    await companyService.addOne(company);
    return res.status(CREATED).end();
});


/**
 * Update one company.
 */
router.put(p.update, async (req: Request, res: Response) => {
    const { company } = req.body;
    // Check param
    if (!company) {
        throw new ParamMissingError();
    }
    // Fetch data
    await companyService.updateOne(company);
    return res.status(OK).end();
});


/**
 * Delete one company.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
    const { id } = req.params;
    // Check param
    if (!id) {
        throw new ParamMissingError();
    }
    // Fetch data
    await companyService.delete(Number(id));
    return res.status(OK).end();
});


// Export default
export default router;
