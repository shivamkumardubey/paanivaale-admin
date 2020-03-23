import { Component, OnInit } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { ActivatedRoute, Router } from "@angular/router";

// import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-user-activity",
  templateUrl: "./user-activity.component.html",
  styleUrls: ["./user-activity.component.scss"]
})
export class UserActivityComponent {
  settings = {
    actions: false,
    columns: {
      order_id: {
        title: "order_id",
        type: "number"
      },
      // quantity: {
      //   title: "quantity",
      //   type: "number"
      // },
      delivered_address: {
        title: "delivered address",
        type: "string"
      },
      payment_method: {
        title: "payment_method",
        type: "string"
      },
      delivered_date: {
        title: "delivered_date",
        type: "string"
      },
      delivered_time: {
        title: "delivered_time",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  settings1 = {
    actions: false,

    columns: {
      fname: {
        title: "Name",
        type: "string"
      },

      details: {
        title: "details",
        type: "string"
      },
      rating: {
        title: "rating",
        type: "string"
      },
      created_at: {
        title: "date",
        type: "string"
      }
      // delivery_person_id: {
      //   title: "delivery_person_id",
      //   type: "number"
      // },
      // fname: {
      //   title: "First Name",
      //   type: "string"
      // },
      // lname: {
      //   title: "Last Name",
      //   type: "string"
      // },
      // mobile: {
      //   title: "Mobile",
      //   type: "number"
      // },
      // rating: {
      //   title: "rating",
      //   type: "string"
      // }
    }
  };
  source1: LocalDataSource = new LocalDataSource();
  settings2 = {
    actions: false,
    columns: {
      // product_id: {
      //   title: "product_id",
      //   type: "number"
      // },
      product_name: {
        title: "Product Name",
        type: "string"
      },

      brand_name: {
        title: "Brand Name",
        type: "string"
      },
      details: {
        title: "details",
        type: "string"
      },
      rating: {
        title: "rating",
        type: "string"
      },
      created_at: {
        title: "date",
        type: "string"
      }
    }
  };
  source2: LocalDataSource = new LocalDataSource();

  settings3 = {
    actions: false,
    columns: {
      fname: {
        title: "Name",
        type: "number"
      },
      business_name: {
        title: "Bussines Name",
        type: "string"
      },

      details: {
        title: "details",
        type: "string"
      },
      rating: {
        title: "rating",
        type: "string"
      }
    }
  };
  source3: LocalDataSource = new LocalDataSource();

  Event: LocalDataSource = new LocalDataSource();
  Bottle: LocalDataSource = new LocalDataSource();

  solvesettings = {
    actions: false,
    mode: "external",
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: "ID",
        type: "number"
      },
      user_mobile: {
        title: "User mobile",
        type: "string"
      },
      complain_to: {
        title: "Complain to",
        type: "string"
      },
      issue: {
        title: "Issue",
        type: "string"
      },
      created_at: {
        title: "Date",
        type: "number"
      }
    }
  };

  pendingsource: LocalDataSource = new LocalDataSource();
  solvesource: LocalDataSource = new LocalDataSource();

  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.route.snapshot.params.id);
    this.service.allorder(this.route.snapshot.params.id).subscribe(
      res => {
        this.source.load(res.data.rows);
        console.log(res.data.rows);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service.alleventorder(this.route.snapshot.params.id).subscribe(
      res => {
        this.Event.load(res.data.rows);
        console.log(res.data.rows);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service.allnewbottleorder(this.route.snapshot.params.id).subscribe(
      res => {
        this.Bottle.load(res.data.rows);
        console.log(res.data.rows);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service
      .delivery_person_review(this.route.snapshot.params.id)
      .subscribe(
        res => {
          this.source1.load(res.data.rows);
          console.log(res.data.rows);
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
    this.service.pv_products_reviews(this.route.snapshot.params.id).subscribe(
      res => {
        this.source2.load(res.data.rows);
        console.log(res.data.rows);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service.pv_vendor_reviews(this.route.snapshot.params.id).subscribe(
      res => {
        this.source3.load(res.data.rows);
        console.log(res.data.rows);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service.userdata(this.route.snapshot.params.id).subscribe(
      res => {
        this.userdata = res.data.rows[0];
        this.service
          .getdata_pendingcomplain_user(res.data.rows[0].mobile)
          .subscribe(
            res => {
              this.pendingsource.load(res.data.rows);
            },
            error => {
              console.log(error);
              alert(error.error.message);
            }
          );

        this.service
          .getdata_solvedcomplain_user(res.data.rows[0].mobile)
          .subscribe(
            res => {
              this.solvesource.load(res.data.rows);
            },
            error => {
              console.log(error);
              alert(error.error.message);
            }
          );
        console.log("userddata datata:", res.data.rows, this.userdata);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service.useraddress(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          this.useraddress = res.data.rows;

          console.log(
            "userddataasasasassasa datata:",
            res.data.rows,
            this.useraddress
          );
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  blockuser() {
    console.log("blockuser called", this.route.snapshot.params.id);
    this.service.blockuser(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("user is blocked");
          this.router.navigate(["/pages/users-tables/smart-table"]);
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  userRowSelectpending(event): void {
    this.router.navigate([
      "/pages/users-tables/pending-activity",
      event.data.id
    ]);
  }
  userRowSelectsolve(event): void {
    this.router.navigate(["/pages/users-tables/solve-activity", event.data.id]);
  }
  email(): void {
    this.router.navigate(["/pages/email", this.userdata.email]);
  }
  userdata;
  useraddress;
}
