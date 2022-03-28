import { NgModule } from '@angular/core';

import { CompanyRoutingModule } from './company-routing.module';

import { CompanyComponent } from './company.component';
import {CommonModule} from "@angular/common";

import { NzTableModule } from 'ng-zorro-antd/table';
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  imports: [
    CompanyRoutingModule,
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    NzTagModule,
    NzCardModule,
    NzDropDownModule,
    NzIconModule
  ],
  declarations: [CompanyComponent],
  exports: [CompanyComponent]
})
export class CompanyModule { }
