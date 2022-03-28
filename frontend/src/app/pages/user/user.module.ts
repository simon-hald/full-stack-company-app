import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import {UserRoutingModule} from "./user-routing.module";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {FormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    UserRoutingModule,
    NzTableModule,
    NzDividerModule,
    FormsModule,
    NzInputModule,
    CommonModule,
    NzButtonModule
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule { }
