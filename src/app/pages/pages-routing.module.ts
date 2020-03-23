import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { UsersComponent } from "./users/users.component";
import { LogoutComponent } from "./logout/logout.component";
import { ProfileComponent } from "./profile/profile.component";
import { UserformComponent } from "./userform/userform.component";
import { VendorformComponent } from "./vendorform/vendorform.component";
import { ProductformComponent } from "./productform/productform.component";
import { DeliveryformComponent } from "./deliveryform/deliveryform.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { EmailformComponent } from "./emailform/emailform.component";
// import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent
      },
      {
        path: "users",
        component: UsersComponent
      },

      {
        path: "iot-dashboard",
        component: DashboardComponent
      },
      {
        path: "logout",
        component: LogoutComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "userform/:id",
        component: UserformComponent
      },
      {
        path: "vendorfrom/:id",
        component: VendorformComponent
      },
      {
        path: "productform/:id",
        component: ProductformComponent
      },
      {
        path: "deliveryform/:id",
        component: DeliveryformComponent
      },
      {
        path: "changepassword",
        component: ChangepasswordComponent
      },
      {
        path: "email/:id",
        component: EmailformComponent
      },
      // {
      //   path: "forms",
      //   loadChildren: () =>
      //     import("./forms/forms.module").then(m => m.FormsModule)
      // },
      // {
      //   path: "profile",
      //   component: ProfileComponent
      // },

      // {
      //   path: "ui-features",
      //   loadChildren: () =>
      //     import("./ui-features/ui-features.module").then(
      //       m => m.UiFeaturesModule
      //     )
      // },
      // {
      //   path: "extra-components",
      //   loadChildren: () =>
      //     import("./extra-components/extra-components.module").then(
      //       m => m.ExtraComponentsModule
      //     )
      // },
      // {
      //   path: "charts",
      //   loadChildren: () =>
      //     import("./charts/charts.module").then(m => m.ChartsModule)
      // },
      // {
      //   path: "editors",
      //   loadChildren: () =>
      //     import("./editors/editors.module").then(m => m.EditorsModule)
      // },
      // {
      //   path: "tables",
      //   loadChildren: () =>
      //     import("./tables/tables.module").then(m => m.TablesModule)
      // },
      {
        path: "users-tables",
        loadChildren: () =>
          import("./users-table/tables.module").then(m => m.TablesModule)
      },
      // {
      //   path: "miscellaneous",
      //   loadChildren: () =>
      //     import("./miscellaneous/miscellaneous.module").then(
      //       m => m.MiscellaneousModule
      //     )
      // },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
