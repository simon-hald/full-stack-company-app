import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CompanyModel} from "../models/company.model";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = 'http://localhost:8081/api/companies' // TODO: Move to env
  constructor(private http: HttpClient) { }

  getAll(){
      return this.http.get<CompanyModel[]>(`${this.url}/all`);
  }

  addCompany(newCompany: CompanyModel){
    return this.http.post<CompanyModel>(`${this.url}/add`, {company: newCompany});
  }

  updateCompany(updatedCompany: CompanyModel){
    return this.http.put<CompanyModel>(`${this.url}/update`, {company: updatedCompany});
  }

  deleteOneCompany( id: number) {
    return this.http.delete(`${this.url}/delete/${id}`)
  }
}
