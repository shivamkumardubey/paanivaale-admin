import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-deletedvendor-activity",
  templateUrl: "./deletedvendor-activity.component.html",
  styleUrls: ["./deletedvendor-activity.component.scss"]
})
export class DeletedvendorActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.deliverydata1(this.route.snapshot.params.id).subscribe(
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
    this.service.undeletevendor(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("vendor is Undelete");
          window.location.href = "";
          this.router.navigate(["/pages/users-tables/deletedvendors"]);
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
