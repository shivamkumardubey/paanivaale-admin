import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-unverify-activity",
  templateUrl: "./unverify-activity.component.html",
  styleUrls: ["./unverify-activity.component.scss"]
})
export class UnverifyActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.deliverydata(this.route.snapshot.params.id).subscribe(
      res => {
        console.log("userddata datata:", res.data.rows);
        this.delivery = res.data.rows[0];
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
  }
  blockuser() {
    console.log("blockuser called", this.route.snapshot.params.id);
    this.service.verifyvendor(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("vendor is verify");
          this.router.navigate(["/pages/users-tables/unverifyvendors"]);
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  delivery;
  deliveryarea;
}
