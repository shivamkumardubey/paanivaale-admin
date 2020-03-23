import { Component, OnInit } from "@angular/core";
import { UsersTableService } from "../users-table.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { url } from "../../@core/data/url";
@Component({
  selector: "ngx-vendorform",
  templateUrl: "./vendorform.component.html",
  styleUrls: ["./vendorform.component.scss"]
})
export class VendorformComponent implements OnInit {
  checkoutForm;
  userdata;
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      address: "",
      business_name: "",
      vend_id: "",
      area: "",
      offer: "",
      stock: "",
      remark: "",
      image: ""
    });
    if (this.route.snapshot.params.id !== "insert") {
      this.service.vendordata(this.route.snapshot.params.id).subscribe(
        res => {
          this.userdata = res.data.rows[0];
          this.imageurl = url + "/image/" + res.data.rows[0].pic1;
          this.imagename = res.data.rows[0].pic1;
          console.log("userform data:", res.data);
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
    }
  }
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
  file;
  imageurl = "";
  imagename = "";
  render = false;
  ngOnInit() {
    if (this.route.snapshot.params.id == "insert") {
      this.render = true;
    }
  }
  insert(data) {
    console.log("insert ", data);
    this.service.newData_vendors(data, this.imagename).subscribe(
      res => {
        console.log(res);
        if (res.success === true) {
          alert("inserted");
          // window.location.href = "pages/users-tables/vendors";
          this.router.navigate(["pages/users-tables/vendors"]);
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
      .updateData_vendors(data, this.route.snapshot.params.id, this.imagename)
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("user updated");
            // window.location.href = "pages/users-tables/vendors";
            this.router.navigate(["pages/users-tables/vendors"]);
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
