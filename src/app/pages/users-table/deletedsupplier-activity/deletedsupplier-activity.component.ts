import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-deletedsupplier-activity",
  templateUrl: "./deletedsupplier-activity.component.html",
  styleUrls: ["./deletedsupplier-activity.component.scss"]
})
export class DeletedsupplierActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.vendordata1(this.route.snapshot.params.id).subscribe(
      res => {
        this.vendordata = res.data.rows[0];

        console.log("userddata datata:", res.data.rows, this.vendordata);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  blockuser() {
    console.log("blockuser called", this.route.snapshot.params.id);
    this.service.undeletesupplier(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("supplier is undeleted");
          this.router.navigate(["/pages/users-tables/deletedsuppliers"]);
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  vendordata;
}
