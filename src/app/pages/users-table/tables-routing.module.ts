import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablesComponent } from "./tables.component";
import { SmartTableComponent } from "./smart-table/smart-table.component";
import { VendorsComponent } from "./vendors/vendors.component";
import { DeliveryPersonComponent } from "./delivery-person/delivery-person.component";
import { UserActivityComponent } from "./user-activity/user-activity.component";
import { ProductsComponent } from "./products/products.component";
import { VendorActivityComponent } from "./vendor-activity/vendor-activity.component";
import { DeliveryActivityComponent } from "./delivery-activity/delivery-activity.component";
import { ProductActivityComponent } from "./product-activity/product-activity.component";
import { BlockusersComponent } from "./blockusers/blockusers.component";
import { BlockusersActivityComponent } from "./blockusers-activity/blockusers-activity.component";
import { DeletedusersComponent } from "./deletedusers/deletedusers.component";
import { DeletedusersActivityComponent } from "./deletedusers-activity/deletedusers-activity.component";
import { DeletedsupplierComponent } from "./deletedsupplier/deletedsupplier.component";
import { DeletedsupplierActivityComponent } from "./deletedsupplier-activity/deletedsupplier-activity.component";
import { BlocksupplierActivityComponent } from "./blocksupplier-activity/blocksupplier-activity.component";
import { BlocksupplierComponent } from "./blocksupplier/blocksupplier.component";
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
import { OEventordersAssignComponent } from "./o-eventorders-assign/o-eventorders-assign.component";
import { OEventordersAssignActivityComponent } from "./o-eventorders-assign-activity/o-eventorders-assign-activity.component";
import { ONewbottleComponent } from "./o-newbottle/o-newbottle.component";
import { ONewbottleActivityComponent } from "./o-newbottle-activity/o-newbottle-activity.component";
import { ONewbottleAssignComponent } from "./o-newbottle-assign/o-newbottle-assign.component";
import { ONewbottleAssignActivityComponent } from "./o-newbottle-assign-activity/o-newbottle-assign-activity.component";
import { ComplainpendingComponent } from "./complainpending/complainpending.component";
import { combineAll } from "rxjs/operators";
import { ComplainpendingactivityComponent } from "./complainpendingactivity/complainpendingactivity.component";
import { ComplainsolveComponent } from "./complainsolve/complainsolve.component";
import { ComplainsolveactivityComponent } from "./complainsolveactivity/complainsolveactivity.component";

const routes: Routes = [
  {
    path: "",
    component: TablesComponent,
    children: [
      {
        path: "smart-table",
        component: SmartTableComponent
      },
      {
        path: "vendors",
        component: VendorsComponent
      },
      {
        path: "vendors-activity/:id",
        component: VendorActivityComponent
      },
      {
        path: "delivery_person",
        component: DeliveryPersonComponent
      },
      {
        path: "delivery-activity/:id",
        component: DeliveryActivityComponent
      },
      {
        path: "user-activity/:id",
        component: UserActivityComponent
      },
      {
        path: "products",
        component: ProductsComponent
      },
      {
        path: "product-activity/:id",
        component: ProductActivityComponent
      },
      {
        path: "blockuser",
        component: BlockusersComponent
      },
      {
        path: "blockuser-activity/:id",
        component: BlockusersActivityComponent
      },
      {
        path: "deleteduser",
        component: DeletedusersComponent
      },
      {
        path: "deleteduser-activity/:id",
        component: DeletedusersActivityComponent
      },
      {
        path: "deletedsuppliers",
        component: DeletedsupplierComponent
      },
      {
        path: "deletedsuppliers-activity/:id",
        component: DeletedsupplierActivityComponent
      },
      {
        path: "blocksuppliers",
        component: BlocksupplierComponent
      },
      {
        path: "blocksuppliers-activity/:id",
        component: BlocksupplierActivityComponent
      },
      {
        path: "blockvendors",
        component: BlockvendorComponent
      },
      {
        path: "blockvendors-activity/:id",
        component: BlockvendorActivityComponent
      },
      {
        path: "deletedvendors",
        component: DeletedvendorComponent
      },
      {
        path: "deletedvendors-activity/:id",
        component: DeletedvendorActivityComponent
      },
      {
        path: "unverifyvendors",
        component: UnverifyComponent
      },
      {
        path: "unverifyvendors-activity/:id",
        component: UnverifyActivityComponent
      },
      {
        path: "blockproducts",
        component: BlockproductComponent
      },
      {
        path: "blockproducts-activity/:id",
        component: BlockproductActivityComponent
      },
      {
        path: "deletedproducts",
        component: DeletedproductsComponent
      },
      {
        path: "deletedproducts-activity/:id",
        component: DeletedproductsActivityComponent
      },
      {
        path: "orders",
        component: OrdersComponent
      },
      {
        path: "orders-activity/:id",
        component: OrdersActivityComponent
      },
      {
        path: "orders-assign",
        component: OrderassignComponent
      },
      {
        path: "orders-assign-activity/:id",
        component: OrderassignActivityComponent
      },
      {
        path: "eventorders",
        component: OEventordersComponent
      },
      {
        path: "eventorders-activity/:id",
        component: OEventordersActivityComponent
      },
      {
        path: "eventorders-assign",
        component: OEventordersAssignComponent
      },
      {
        path: "eventorders-assign-activity/:id",
        component: OEventordersAssignActivityComponent
      },
      {
        path: "newbottle",
        component: ONewbottleComponent
      },
      {
        path: "newbottle-activity/:id",
        component: ONewbottleActivityComponent
      },
      {
        path: "newbottle-assign",
        component: ONewbottleAssignComponent
      },
      {
        path: "newbottle-assign-activity/:id",
        component: ONewbottleAssignActivityComponent
      },
      {
        path: "pending",
        component: ComplainpendingComponent
      },
      {
        path: "pending-activity/:id",
        component: ComplainpendingactivityComponent
      },
      {
        path: "solve",
        component: ComplainsolveComponent
      },
      {
        path: "solve-activity/:id",
        component: ComplainsolveactivityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  VendorsComponent,
  DeliveryPersonComponent,
  UserActivityComponent,
  ProductsComponent,
  VendorActivityComponent
];
