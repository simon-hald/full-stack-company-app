import { CompanyModel } from '../models/company-model';
import { getRandomInt } from '../shared/functions';
import orm from './mock-orm';


/**
 * See if a company with the given id exists.
 * 
 * @param id 
 */
async function persists(id: number): Promise<boolean> {
    const db = await orm.openDb();
    for (const company of db.companies) {
        if (company.id === id) {
            return true;
        }
    }
    return false;
}


/**
 * Get all companies.
 * 
 * @returns 
 */
async function getAll(): Promise<CompanyModel[]> {
    const db = await orm.openDb();
    return db.companies;
}


/**
 * Add one company.
 * 
 * @param company
 * @returns 
 */
async function add(company: CompanyModel): Promise<void> {
    const db = await orm.openDb();
    company.id = getRandomInt();
    db.companies.push(company);
    return orm.saveDb(db);
}


/**
 * Update a company.
 * 
 * @param company
 * @returns 
 */
async function update(company: CompanyModel): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.companies.length; i++) {
        if (db.companies[i].id === company.id) {
            db.companies[i] = company;
            return orm.saveDb(db);
        }
    }
}


/**
 * Delete one company.
 * 
 * @param id 
 * @returns 
 */
async function deleteOne(id: number): Promise<void> {
    const db = await orm.openDb();
    for (let i = 0; i < db.companies.length; i++) {
        if (db.companies[i].id === id) {
            db.companies.splice(i, 1);
            return orm.saveDb(db);
        }
    }
}


// Export default
export default {
    persists,
    getAll,
    add,
    update,
    delete: deleteOne,
} as const;
