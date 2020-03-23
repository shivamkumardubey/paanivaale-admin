import { Component, OnInit } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "ngx-o-eventorders-activity",
  templateUrl: "./o-eventorders-activity.component.html",
  styleUrls: ["./o-eventorders-activity.component.scss"]
})
export class OEventordersActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params.id);
    // this.service.allorder(this.route.snapshot.params.id).subscribe(
    //   res => {
    //     this.source.load(res.data.rows);
    //     console.log(res.data.rows);
    //   },
    //   error => {
    //     console.log(error);
    //     alert(error.error.message);
    //   }
    // );
    // this.service
    //   .delivery_person_review(this.route.snapshot.params.id)
    //   .subscribe(
    //     res => {
    //       this.source1.load(res.data.rows);
    //       console.log(res.data.rows);
    //     },
    //     error => {
    //       console.log(error);
    //       alert(error.error.message);
    //     }
    //   );
    // this.service.pv_products_reviews(this.route.snapshot.params.id).subscribe(
    //   res => {
    //     this.source2.load(res.data.rows);
    //     console.log(res.data.rows);
    //   },
    //   error => {
    //     console.log(error);
    //     alert(error.error.message);
    //   }
    // );
    // this.service.pv_vendor_reviews(this.route.snapshot.params.id).subscribe(
    //   res => {
    //     this.source3.load(res.data.rows);
    //     console.log(res.data.rows);
    //   },
    //   error => {
    //     console.log(error);
    //     alert(error.error.message);
    //   }
    // );
    this.service
      .getdata_eventordersbyid(this.route.snapshot.params.id)
      .subscribe(
        res => {
          this.orderdata = res;
          this.suplliervendor();
          this.users();

          console.log(
            "order datata:",
            res,
            this.orderdata.data.rows[0].user_mobile
          );
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );

    // this.service.useraddress(this.route.snapshot.params.id).subscribe(
    //   res => {
    //     if (res.success) {
    //       this.useraddress = res.data.rows;

    //       console.log(
    //         "userddataasasasassasa datata:",
    //         res.data.rows,
    //         this.useraddress
    //       );
    //     }
    //   },
    //   error => {
    //     console.log(error);
    //     alert(error.error.message);
    //   }
    // );
  }
  userdata;
  useraddress;
  orderdata;
  user = false;
  Vendor = false;
  Distributar = false;
  vendordata;
  delivery;
  allvendors;
  users() {
    this.service.userdata(this.orderdata.data.rows[0].user_mobile).subscribe(
      res => {
        this.userdata = res.data.rows[0];
        console.log("userddata datata:", res.data.rows, this.userdata);
        this.user = true;
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }

  suplliervendor() {
    if (
      this.orderdata.data.rows[0].vendor_id === "" ||
      this.orderdata.data.rows[0].vendor_id === null
    ) {
      this.service
        .vendordatabynewid(this.orderdata.data.rows[0].dist_id)
        .subscribe(
          res => {
            console.log("userddata datata:", res.data.rows);
            this.vendordata = res.data.rows[0];
            this.Distributar = true;
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
    if (
      this.orderdata.data.rows[0].dist_id === "" ||
      this.orderdata.data.rows[0].dist_id === null
    ) {
      this.service
        .deliverydatabynewid(this.orderdata.data.rows[0].vendor_id)
        .subscribe(
          res => {
            this.delivery = res.data.rows[0];
            this.Vendor = true;
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
  }
  allvendorsdata = false;
  deliverydata = false;
  alldelivery;
  assign() {
    if (
      this.orderdata.data.rows[0].vendor_id === "" ||
      this.orderdata.data.rows[0].vendor_id === null
    ) {
      // alert(this.orderdata.data.rows[0].dist_id);
      // alert(this.orderdata.data.rows[0].area);
      this.service
        .vendordata_byarea(this.orderdata.data.rows[0].area)
        .subscribe(
          res => {
            this.allvendors = res.data;
            this.allvendorsdata = true;
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
    if (
      this.orderdata.data.rows[0].dist_id === "" ||
      this.orderdata.data.rows[0].dist_id === null
    ) {
      // alert(this.orderdata.data.rows[0].vendor_id);
      // alert(this.orderdata.data.rows[0].area);

      this.service
        .deliverydatabyarea(this.orderdata.data.rows[0].area)
        .subscribe(
          res => {
            this.alldelivery = res.data;
            this.deliverydata = true;
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
  }
  assignuser(id) {
    console.log("button click", id.target.value);
    if (this.allvendorsdata) {
      console.log("button click", "ditributar data", id.target.value);
      this.service
        .assigneventorders(
          this.route.snapshot.params.id,
          id.target.value,
          "Distributor"
        )
        .subscribe(
          res => {
            alert("Order Assigned");

            this.router.navigate(["/pages/users-tables/eventorders"]);
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
    if (this.deliverydata) {
      console.log("button click", "venodor data", id.target.value);
      this.service
        .assigneventorders(
          this.route.snapshot.params.id,
          id.target.value,
          "Vendor"
        )
        .subscribe(
          res => {
            if (res.success) {
              alert("Order Assigned");
              this.router.navigate(["/pages/users-tables/eventorders"]);
            } else {
              alert(res.message);
            }
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
  }
}
