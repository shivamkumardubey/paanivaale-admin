import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
@Component({
  selector: "ngx-blockproduct-activity",
  templateUrl: "./blockproduct-activity.component.html",
  styleUrls: ["./blockproduct-activity.component.scss"]
})
export class BlockproductActivityComponent {
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.service.productdata(this.route.snapshot.params.id).subscribe(
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
    this.service.unblockproduct(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("Product is Unblocked");
          this.router.navigate(["/pages/users-tables/blockproducts"]);
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
