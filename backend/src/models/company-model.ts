
// Company schema
export interface CompanyModel {
    id: number;
    name: string;
    email?: string;
    country: string;
    owners: number[]
}


/**
 * Get a new User object.
 * 
 * @returns 
 */
function getNew(name: string, email: string, country: string, owners: number[]): CompanyModel {
    return {
        id: -1,
        email,
        name,
        country,
        owners
    };
}


/**
 * Copy a company object.
 * 
 * @param company
 * @returns 
 */
function copy(company: CompanyModel): CompanyModel {
    return {
        id: company.id,
        email: company.email,
        name: company.name,
        country: company.country,
        owners: company.owners
    }
}


// Export default
export default {
    new: getNew,
    copy,
}
