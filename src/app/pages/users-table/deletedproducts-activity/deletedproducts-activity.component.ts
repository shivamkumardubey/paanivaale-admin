import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-deletedproducts-activity",
  templateUrl: "./deletedproducts-activity.component.html",
  styleUrls: ["./deletedproducts-activity.component.scss"]
})
export class DeletedproductsActivityComponent {
  constructor(
    private service: UsersTableService,
    private router: Router,

    private route: ActivatedRoute
  ) {
    this.service.productdata1(this.route.snapshot.params.id).subscribe(
      res => {
        this.prodcutdata = res.data.rows[0];

        console.log("userddata datata:", res.data.rows, this.prodcutdata);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  blockuser() {
    this.service.undeleteproduct(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("Product is undelete");

          this.router.navigate(["/pages/users-tables/deletedproducts"]);
        }
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  prodcutdata;
}
