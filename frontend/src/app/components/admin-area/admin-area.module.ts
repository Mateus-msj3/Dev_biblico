import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserAdminAreaComponent} from "./components/user-admin-area/user-admin-area.component";
import {RouterModule} from "@angular/router";
import {NavbarAdminComponent} from './components/navbar-admin/navbar-admin.component';
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CardModule} from "primeng/card";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    UserAdminAreaComponent,
    NavbarAdminComponent,
  ],

  exports: [
    UserAdminAreaComponent,
    NavbarAdminComponent
  ],

  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    ToolbarModule,
    FileUploadModule,
    RatingModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    BrowserAnimationsModule,
    CardModule,
    AutoCompleteModule,
    CheckboxModule,

  ],


  providers: [
    ConfirmationService
  ],
})
export class AdminAreaModule { }
