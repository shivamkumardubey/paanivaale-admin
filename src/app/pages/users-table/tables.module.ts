import { NgModule } from "@angular/core";
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTreeGridModule,
  NbButtonModule
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { HttpClientModule } from "@angular/common/http";
import { ThemeModule } from "../../@theme/theme.module";
import { TablesRoutingModule, routedComponents } from "./tables-routing.module";
import { DeliveryPersonComponent } from "./delivery-person/delivery-person.component";
import { UserActivityComponent } from "./user-activity/user-activity.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VendorActivityComponent } from "./vendor-activity/vendor-activity.component";
import { ProductActivityComponent } from "./product-activity/product-activity.component";
import { DeliveryActivityComponent } from "./delivery-activity/delivery-activity.component";
import { Router } from "@angular/router";
import { BlockusersComponent } from "./blockusers/blockusers.component";
import { DeletedusersComponent } from "./deletedusers/deletedusers.component";
import { BlockusersActivityComponent } from "./blockusers-activity/blockusers-activity.component";
import { DeletedusersActivityComponent } from "./deletedusers-activity/deletedusers-activity.component";
import { BlocksupplierComponent } from "./blocksupplier/blocksupplier.component";
import { BlocksupplierActivityComponent } from "./blocksupplier-activity/blocksupplier-activity.component";
import { DeletedsupplierComponent } from "./deletedsupplier/deletedsupplier.component";
import { DeletedsupplierActivityComponent } from "./deletedsupplier-activity/deletedsupplier-activity.component";
import { BlockvendorComponent } from "./blockvendor/blockvendor.component";
import { BlockvendorActivityComponent } from "./blockvendor-activity/blockvendor-activity.component";
import { DeletedvendorComponent } from "./deletedvendor/deletedvendor.component";
import { DeletedvendorActivityComponent } from "./deletedvendor-activity/deletedvendor-activity.component";
import { UnverifyComponent } from "./unverify/unverify.component";
import { UnverifyActivityComponent } from "./unverify-activity/unverify-activity.component";
import { BlockproductComponent } from "./blockproduct/blockproduct.component";
import { BlockproductActivityComponent } from "./blockproduct-activity/blockproduct-activity.component";
import { DeletedproductsComponent } from "./deletedproducts/deletedproducts.component";
import { DeletedproductsActivityComponent } from "./deletedproducts-activity/deletedproducts-activity.component";
import { OrdersComponent } from "./orders/orders.component";
import { OrdersActivityComponent } from "./orders-activity/orders-activity.component";
import { OrderassignComponent } from "./orderassign/orderassign.component";
import { OrderassignActivityComponent } from "./orderassign-activity/orderassign-activity.component";
import { OEventordersComponent } from "./o-eventorders/o-eventorders.component";
import { OEventordersActivityComponent } from "./o-eventorders-activity/o-eventorders-activity.component";
import { OEventordersAssignActivityComponent } from "./o-eventorders-assign-activity/o-eventorders-assign-activity.component";
import { OEventordersAssignComponent } from "./o-eventorders-assign/o-eventorders-assign.component";
import { ONewbottleComponent } from "./o-newbottle/o-newbottle.component";
import { ONewbottleActivityComponent } from "./o-newbottle-activity/o-newbottle-activity.component";
import { ONewbottleAssignComponent } from "./o-newbottle-assign/o-newbottle-assign.component";
import { ONewbottleAssignActivityComponent } from "./o-newbottle-assign-activity/o-newbottle-assign-activity.component";
import { ComplainpendingComponent } from "./complainpending/complainpending.component";
import { ComplainsolveComponent } from "./complainsolve/complainsolve.component";
import { ComplainsolveactivityComponent } from "./complainsolveactivity/complainsolveactivity.component";
import { ComplainpendingactivityComponent } from "./complainpendingactivity/complainpendingactivity.component";
import { DataTablesModule } from "angular-datatables";
@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    HttpClientModule,
    FormsModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    NbButtonModule,
    ReactiveFormsModule,
    DataTablesModule
  ],
  declarations: [
    ...routedComponents,
    VendorActivityComponent,
    ProductActivityComponent,
    DeliveryActivityComponent,
    BlockusersComponent,
    DeletedusersComponent,
    BlockusersActivityComponent,
    DeletedusersActivityComponent,
    BlocksupplierComponent,
    BlocksupplierActivityComponent,
    DeletedsupplierComponent,
    DeletedsupplierActivityComponent,
    BlockvendorComponent,
    BlockvendorActivityComponent,
    DeletedvendorComponent,
    DeletedvendorActivityComponent,
    UnverifyComponent,
    UnverifyActivityComponent,
    BlockproductComponent,
    BlockproductActivityComponent,
    DeletedproductsComponent,
    DeletedproductsActivityComponent,
    OrdersComponent,
    OrdersActivityComponent,
    OrderassignComponent,
    OrderassignActivityComponent,
    OEventordersComponent,
    OEventordersActivityComponent,
    OEventordersAssignActivityComponent,
    OEventordersAssignComponent,
    ONewbottleComponent,
    ONewbottleActivityComponent,
    ONewbottleAssignComponent,
    ONewbottleAssignActivityComponent,
    ComplainpendingComponent,
    ComplainsolveComponent,
    ComplainsolveactivityComponent,
    ComplainpendingactivityComponent
  ]
})
export class TablesModule {}
