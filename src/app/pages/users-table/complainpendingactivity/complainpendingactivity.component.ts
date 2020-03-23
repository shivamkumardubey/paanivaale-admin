import { Component, OnInit } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "ngx-complainpendingactivity",
  templateUrl: "./complainpendingactivity.component.html",
  styleUrls: ["./complainpendingactivity.component.scss"]
})
export class ComplainpendingactivityComponent {
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    console.log(this.route.snapshot.params.id);
    this.service
      .getdata_pendingcomplainbyid(this.route.snapshot.params.id)
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
    this.checkoutForm = this.formBuilder.group({
      answer: ""
    });
  }
  checkoutForm;
  userdata;
  useraddress;
  orderdata;
  user = false;
  Vendor = false;
  Distributar = false;
  vendordata;
  delivery;
  allvendors;
  submit = false;
  onSubmit(customerData) {
    this.submit = true;
    // Process checkout data here
    console.log(customerData);
    this.service
      .pendinganswer(customerData, this.route.snapshot.params.id)
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("user updated");
            this.router.navigate(["pages/users-tables/pending"]);
          } else {
            alert("something wrong");
          }
        },
        error => {
          console.log(error);
          alert("something wrong");
        }
      );
  }
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
    this.service
      .vendordatabynewid(this.orderdata.data.rows[0].complain_to)
      .subscribe(
        res => {
          console.log("userddata datata:", res.data.rows);
          if (res.data.rows) {
            this.vendordata = res.data.rows[0];
            this.Distributar = true;
          }
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
    this.service
      .deliverydatabynewid(this.orderdata.data.rows[0].complain_to)
      .subscribe(
        res => {
          if (res.data.rows) {
            this.delivery = res.data.rows[0];
            this.Vendor = true;
          }
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
  }
  deliveryassign;
  vendordataassign;
}
