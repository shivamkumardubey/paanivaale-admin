import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { UsersTableService } from "../../users-table.service";
import { url } from "../../../@core/data/url";
@Component({
  selector: "ngx-product-activity",
  templateUrl: "./product-activity.component.html",
  styleUrls: ["./product-activity.component.scss"]
})
export class ProductActivityComponent {
  settings = {
    actions: false,
    columns: {
      // products_reviews_id: {
      //   title: "products_reviews_id",
      //   type: "number"
      // },
      fname: {
        title: "name",
        type: "number"
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

  constructor(
    private service: UsersTableService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.service
      .pv_products_reviews_by_product_id(this.route.snapshot.params.id)
      .subscribe(
        res => {
          this.source.load(res.data.rows);
          console.log(res.data.rows);
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
    this.service.productdata(this.route.snapshot.params.id).subscribe(
      res => {
        this.prodcutdata = res.data.rows[0];
        this.imageurl = url + "/image/" + res.data.rows[0].pic1;
        this.imageurl1 = url + "/image/" + res.data.rows[0].pic2;
        this.imageurl2 = url + "/image/" + res.data.rows[0].pic3;
        console.log("userddata datata:", res.data.rows, this.prodcutdata);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
  }
  imageurl = "";
  imageurl1 = "";
  imageurl2 = "";

  blockuser() {
    this.service.blockproduct(this.route.snapshot.params.id).subscribe(
      res => {
        if (res.success) {
          alert("Product is blocked");
          this.router.navigate(["/pages/users-tables/products"]);
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
