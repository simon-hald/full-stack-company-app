import {Component, OnInit, TemplateRef} from '@angular/core';

import {UserService} from "../../services/user.service";
import {UserModel, UserModelFull} from "../../models/user.model";
import {NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private modal: NzModalService) { }

  isUpdatingTable = false
  users: UserModelFull[] = []
  newUser: UserModel = {
    email: "",
    name: "",
    socialSecurityNumber: 0
  }
  updatingUser: UserModelFull = {
    id: 0,
    email: "",
    name: "",
    socialSecurityNumber: 0
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.isUpdatingTable = true
    this.userService.getAll().subscribe( {
      next: users => {
        this.users = users
      },
      error: error => console.warn('Error getting all users:', error),
      complete: () => {
        this.isUpdatingTable = false
      }
    })
  }

  createAddOneModal(dialogContent: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: 'Create a new user',
      nzContent: dialogContent,
      nzClosable: true,
      nzOnOk: () => this.addOne()
    })
  }

  updateUserDialog(dialogContent: TemplateRef<{}>, user: UserModelFull ) {
    this.updatingUser = user
    this.modal.create({
      nzTitle: 'Create a new company',
      nzContent: dialogContent,
      nzClosable: true,
      nzOnOk: () => this.updateUser(this.updatingUser),
    })
  }

  addOne() {
    this.userService.addUser(this.newUser).subscribe( {
      next: () => {
        this.getAllUsers()
      },
      error: error => {
        console.warn('userService.addOne() -> error', error)
      }
    })
  }

  updateUser(updateUser: UserModelFull) {
    this.userService.updateUser(updateUser).subscribe({
      next: () => this.getAllUsers()
    })
  }

  deleteOneUser(id: number) {
    this.isUpdatingTable = true
    this.userService.deleteOneUser(id).subscribe({
      next: () => this.getAllUsers(),
      error: () => console.warn('error'),
      complete: () => this.isUpdatingTable = false
    })
  }
}
