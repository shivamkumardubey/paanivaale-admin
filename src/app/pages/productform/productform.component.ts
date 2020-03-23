import { Component, OnInit } from "@angular/core";
import { UsersTableService } from "../users-table.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { url } from "../../@core/data/url";
@Component({
  selector: "ngx-productform",
  templateUrl: "./productform.component.html",
  styleUrls: ["./productform.component.scss"]
})
export class ProductformComponent implements OnInit {
  checkoutForm;
  userdata;
  render = false;
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      product_name: "",
      brand_name: "",
      product_type: "",
      product_details: "",
      discount_price: "",
      orignal_price: "",
      promo_code: "",
      delivery_time: "",
      short_desc: "",
      long_desc: "",
      prod_id: "",
      location: "",
      current_offers: "",
      vendor_id: "",
      dist_id: "",
      image: "",
      image1: "",
      image2: ""
    });
    if (this.route.snapshot.params.id !== "insert") {
      this.service.productdata(this.route.snapshot.params.id).subscribe(
        res => {
          this.userdata = res.data.rows[0];
          this.imageurl = url + "/image/" + res.data.rows[0].pic1;
          this.imagename = res.data.rows[0].pic1;
          this.imageurl1 = url + "/image/" + res.data.rows[0].pic2;
          this.imagename1 = res.data.rows[0].pic2;
          this.imageurl2 = url + "/image/" + res.data.rows[0].pic3;
          this.imagename2 = res.data.rows[0].pic3;
          console.log("userform data:", res.data);
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
    }
  }
  imageurl = "";
  imageurl1 = "";
  imageurl2 = "";
  imagename = "";
  imagename1 = "";
  imagename2 = "";
  ngOnInit() {
    if (this.route.snapshot.params.id == "insert") {
      this.render = true;
    }
  }
  file;
  imageupload(event: any) {
    this.file = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", this.file, this.file.name);
    this.service.uploadFiles(formData).subscribe(
      res => {
        this.imagename = res.fileUrl;
        this.imageurl = url + "/image/" + res.fileUrl;
        console.log(this.imageurl);
      },
      error => {
        console.log(error);
      }
    );
  }
  file1;
  imageupload1(event: any) {
    this.file1 = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", this.file1, this.file1.name);
    this.service.uploadFiles(formData).subscribe(
      res => {
        this.imagename1 = res.fileUrl;
        this.imageurl1 = url + "/image/" + res.fileUrl;
        console.log(this.imageurl);
      },
      error => {
        console.log(error);
      }
    );
  }
  file2;
  imageupload2(event: any) {
    this.file2 = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", this.file2, this.file2.name);
    this.service.uploadFiles(formData).subscribe(
      res => {
        this.imagename2 = res.fileUrl;
        this.imageurl2 = url + "/image/" + res.fileUrl;
        console.log(this.imageurl);
      },
      error => {
        console.log(error);
      }
    );
  }
  insert(data) {
    console.log("insert ", data);
    this.service
      .newData_Products(data, this.imagename, this.imagename1, this.imagename2)
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("inserted");
            // window.location.href = "pages/users-tables/products";
            this.router.navigate(["pages/users-tables/products"]);
          } else {
            alert(res.message);
          }
        },
        error => {
          console.log(error);
          alert("something wrong");
        }
      );
  }
  edit(data) {
    console.log("edit", data, this.route.snapshot.params.id);
    this.service
      .updateData_Products(
        data,
        this.route.snapshot.params.id,
        this.imagename,
        this.imagename1,
        this.imagename2
      )
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("user updated");
            // window.location.href = "pages/users-tables/products";
            this.router.navigate(["pages/users-tables/products"]);
          } else {
            alert("something wrong");
          }
        },
        error => {
          console.log(error);
          alert("something wrong");
        }
      );
  }
}
