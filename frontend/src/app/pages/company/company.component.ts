import {Component, OnInit, TemplateRef} from '@angular/core';
import {CompanyService} from "../../services/company.service";
import {CompanyModel} from "../../models/company.model";
import {NzModalService} from "ng-zorro-antd/modal";
import {UserModelFull} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {
  companies: CompanyModel[] = [];
  users: UserModelFull[] = [];
  tmpCompany: CompanyModel = {
    country: "",
    name: "",
    email: "",
    owners: [],
  }
  isUpdatingTable = false

  constructor(private companyService: CompanyService, private userService: UserService, private modal: NzModalService) { }

  ngOnInit(): void {
    this.getAllCompanies();
    this.getAllUsers();
  }

  getAllCompanies(){
    this.isUpdatingTable = true
    this.companyService.getAll().subscribe( {
      next: companies => {
        this.companies = companies
      },
      error: error => console.warn('Error getting all companies:', error),
      complete: () => {
        this.isUpdatingTable = false
      }
    })
  }

  getAllUsers(){
    this.userService.getAll().subscribe( {
      next: users => {
        this.users = users
      },
      error: error => console.warn('Error getting all users:', error),
      complete: () => {
      }
    })
  }

  createAddOneModal(dialogContent: TemplateRef<{}>): void {
    this.tmpCompany = {
      country: "",
      name: "",
      email: "",
      owners: [],
    }
    this.modal.create({
      nzTitle: 'Create a new company',
      nzContent: dialogContent,
      nzClosable: true,
      nzOnOk: () => this.addOne(),
    })
  }

  updateCompanyDialog(dialogContent: TemplateRef<{}>, company: CompanyModel ) {
    this.tmpCompany = company
    this.modal.create({
      nzTitle: 'Create a new company',
      nzContent: dialogContent,
      nzClosable: true,
      nzOnOk: () => this.updateCompany(this.tmpCompany),
    })
  }

  addOwnerToCompany(owner: UserModelFull) {
    if (!this.tmpCompany.owners.some(ownerId => ownerId === owner.id)) {
      this.tmpCompany.owners.push(owner.id)
    }
  }

  removeOwnerFromCompany(owner: number) {
    const index = this.tmpCompany.owners.indexOf(owner)
    this.tmpCompany.owners.splice(index, 1)
  }

  prettyOwnerName(id: number): string {
    return this.users.find( user => user.id === id)?.name || 'Does not exist'
  }

  addOne() {
    let newCmp = this.tmpCompany
    delete newCmp.id
    this.companyService.addCompany(this.tmpCompany).subscribe( {
      next: () => {
        this.getAllCompanies()
      },
      error: error => {
        console.warn('companyService.addOne() -> error', error)
      }
    })
  }

  updateCompany(updatedCompany: CompanyModel) {
    this.companyService.updateCompany(updatedCompany).subscribe({
      next: () => this.getAllCompanies()
    })
  }

  deleteOneCompany(id: number | undefined) {
    if (id !== undefined) {
      this.isUpdatingTable = true
      this.companyService.deleteOneCompany(id).subscribe({
        next: () => this.getAllCompanies(),
        error: () => console.warn('error'),
        complete: () => this.isUpdatingTable = false
      })
    }
  }
}
