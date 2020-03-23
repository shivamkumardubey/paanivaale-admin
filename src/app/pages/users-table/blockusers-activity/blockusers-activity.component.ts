import { Component, OnInit } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "ngx-blockusers-activity",
  templateUrl: "./blockusers-activity.component.html",
  styleUrls: ["./blockusers-activity.component.scss"]
})
export class BlockusersActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.userdata(this.route.snapshot.params.id).subscribe(
      res => {
        this.userdata = res.data.rows[0];

        console.log("userddata datata:", res.data.rows, this.userdata);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  blockuser() {
    this.service.unblockuser(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("user is Unblocked");
          this.router.navigate(["/pages/users-tables/blockuser"]);
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  userdata;
}
