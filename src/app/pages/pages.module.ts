import { NgModule } from "@angular/core";
import { NbMenuModule } from "@nebular/theme";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { UsersComponent } from "./users/users.component";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbAlertModule
} from "@nebular/theme";
import { UserformComponent } from "./userform/userform.component";
import { VendorformComponent } from "./vendorform/vendorform.component";
import { DeliveryformComponent } from "./deliveryform/deliveryform.component";
import { ProductformComponent } from "./productform/productform.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { HttpClientModule } from "@angular/common/http";
import { EmailformComponent } from './emailform/emailform.component';

// import { ProfileComponent } from './profile/profile.component';
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    ReactiveFormsModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbAlertModule,
    HttpClientModule
  ],
  declarations: [
    PagesComponent,
    UsersComponent,
    LogoutComponent,
    LoginComponent,
    ProfileComponent,
    UserformComponent,
    VendorformComponent,
    DeliveryformComponent,
    ProductformComponent,
    ChangepasswordComponent,
    EmailformComponent
  ]
})
export class PagesModule {}
