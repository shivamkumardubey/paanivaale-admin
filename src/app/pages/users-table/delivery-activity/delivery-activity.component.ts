import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { url } from "../../../@core/data/url";
@Component({
  selector: "ngx-delivery-activity",
  templateUrl: "./delivery-activity.component.html",
  styleUrls: ["./delivery-activity.component.scss"]
})
export class DeliveryActivityComponent {
  settings = {
    actions: false,

    columns: {
      // delivery_person_id: {
      //   title: "delivery_person_id",
      //   type: "number"
      // },
      fname: {
        title: "name",
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
  source: LocalDataSource = new LocalDataSource();
  Orders = {
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
      order_id: {
        title: "ID",
        type: "number"
      },
      delivered_address: {
        title: "Address",
        type: "string"
      },
      payment_method: {
        title: "Payment Method ",
        type: "string"
      },
      delivered_date: {
        title: "Date",
        type: "number"
      },
      delivered_time: {
        title: "Time",
        type: "number"
      }
    }
  };

  ordersource: LocalDataSource = new LocalDataSource();
  evetnsource: LocalDataSource = new LocalDataSource();
  newbottlesource: LocalDataSource = new LocalDataSource();

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

  userdata;
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service.deliverydata(this.route.snapshot.params.id).subscribe(
      res => {
        console.log("userddata datata:", res.data.rows);
        this.delivery = res.data.rows[0];
        this.imageurl = url + "/image/" + res.data.rows[0].pic;
        this.service
          .getdata_ordersbyidDistributer(res.data.rows[0].del_per_id)
          .subscribe(
            res => {
              this.ordersource.load(res.data.rows);
              console.log(res.data.rows);
            },
            error => {
              console.log(error);
              alert(error.error.message);
            }
          );

        this.service
          .getdata_eventbyidDistributer(res.data.rows[0].del_per_id)
          .subscribe(
            res => {
              this.evetnsource.load(res.data.rows);
              console.log(res.data.rows);
            },
            error => {
              console.log(error);
              alert(error.error.message);
            }
          );

        this.service
          .getdata_newbottlebyidDistributer(res.data.rows[0].del_per_id)
          .subscribe(
            res => {
              this.newbottlesource.load(res.data.rows);
              console.log(res.data.rows);
            },
            error => {
              console.log(error);
              alert(error.error.message);
            }
          );

        this.service
          .getdata_pendingcomplain_vendor(res.data.rows[0].del_per_id)
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
          .getdata_solvedcomplain_vendor(res.data.rows[0].del_per_id)
          .subscribe(
            res => {
              this.solvesource.load(res.data.rows);
            },
            error => {
              console.log(error);
              alert(error.error.message);
            }
          );
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service.deliveryareadata(this.route.snapshot.params.id).subscribe(
      res => {
        console.log("userddata datata:", res.data.rows);
        this.deliveryarea = res.data.rows[0];
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.service
      .delivery_person_review_by_id(this.route.snapshot.params.id)
      .subscribe(
        res => {
          this.source.load(res.data.rows);
          console.log(res.data.rows);
          this.userdata = res.data.rows;
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
  }
  imageurl = "";
  blockuser() {
    console.log("blockuser called", this.route.snapshot.params.id);
    this.service.blockvendor(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("vendor is blocked");
          this.router.navigate(["/pages/users-tables/delivery_person"]);
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  userRowSelectorder(event): void {
    console.log(event.data.mobile);
    this.router.navigate([
      "/pages/users-tables/orders-assign-activity",
      event.data.order_id
    ]);
  }
  userRowSelectevent(event): void {
    console.log(event.data.mobile);
    this.router.navigate([
      "/pages/users-tables/eventorders-assign-activity",
      event.data.order_id
    ]);
  }
  userRowSelectnewbottle(event): void {
    console.log(event.data.mobile);
    this.router.navigate([
      "/pages/users-tables/newbottle-assign-activity",
      event.data.order_id
    ]);
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
    this.router.navigate(["/pages/email", this.delivery.email]);
  }
  delivery;
  deliveryarea;
}
