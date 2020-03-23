import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-blockvendor-activity",
  templateUrl: "./blockvendor-activity.component.html",
  styleUrls: ["./blockvendor-activity.component.scss"]
})
export class BlockvendorActivityComponent {
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
    this.service.unblockvendor(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("vendor is Unblocked");
          this.router.navigate(["/pages/users-tables/blockvendors"]);
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
