import { Component, OnInit } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ngx-o-newbottle-assign-activity",
  templateUrl: "./o-newbottle-assign-activity.component.html",
  styleUrls: ["./o-newbottle-assign-activity.component.scss"]
})
export class ONewbottleAssignActivityComponent {
  constructor(
    private service: UsersTableService,
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
    this.service.getdata_newordersbyid(this.route.snapshot.params.id).subscribe(
      res => {
        this.orderdata = res;
        this.suplliervendor();
        this.users();
        this.assignsuplliervendor();

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
  deliveryassign;
  vendordataassign;
  assignsuplliervendor() {
    if (
      this.orderdata.data.rows[0].vendor_id === "" ||
      this.orderdata.data.rows[0].vendor_id === null
    ) {
      this.service
        .vendordatabynewid(this.orderdata.data.rows[0].asinine_id)
        .subscribe(
          res => {
            console.log("userddata datata:", res.data.rows);
            this.vendordataassign = res.data.rows[0];
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
        .deliverydatabynewid(this.orderdata.data.rows[0].asinine_id)
        .subscribe(
          res => {
            this.deliveryassign = res.data.rows[0];
            this.Vendor = true;
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
    }
  }
}
