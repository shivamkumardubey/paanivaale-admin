import { Component, OnInit } from "@angular/core";

import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "ngx-deletedusers-activity",
  templateUrl: "./deletedusers-activity.component.html",
  styleUrls: ["./deletedusers-activity.component.scss"]
})
export class DeletedusersActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service.deleall(this.route.snapshot.params.id).subscribe(
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
    this.service.undeleteuser(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("user is Undeleted");

          this.router.navigate(["/pages/users-tables/deleteduser"]);
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
