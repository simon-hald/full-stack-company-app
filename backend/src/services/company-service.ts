import companyRepo from '../repos/company-repo';
import { CompanyModel } from '../models/company-model';
import { CompanyNotFoundError } from '../shared/errors';



/**
 * Get all companies.
 * 
 * @returns 
 */
function getAll(): Promise<CompanyModel[]> {
    return companyRepo.getAll();
}


/**
 * Add one company.
 * 
 * @param company
 * @returns 
 */
function addOne(company: CompanyModel): Promise<void> {
    return companyRepo.add(company);
}


/**
 * Update one company.
 * 
 * @param company
 * @returns 
 */
async function updateOne(company: CompanyModel): Promise<void> {
    const persists = await companyRepo.persists(company.id);
    if (!persists) {
        throw new CompanyNotFoundError();
    }
    return companyRepo.update(company);
}


/**
 * Delete a company by their id.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<void> {
    const persists = await companyRepo.persists(id);
    if (!persists) {
        throw new CompanyNotFoundError();
    }
    return companyRepo.delete(id);
}


// Export default
export default {
    getAll,
    addOne,
    updateOne,
    delete: deleteOne,
} as const;
