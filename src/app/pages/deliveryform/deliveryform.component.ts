import { Component, OnInit } from "@angular/core";
import { UsersTableService } from "../users-table.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { url } from "../../@core/data/url";
@Component({
  selector: "ngx-deliveryform",
  templateUrl: "./deliveryform.component.html",
  styleUrls: ["./deliveryform.component.scss"]
})
export class DeliveryformComponent implements OnInit {
  checkoutForm;
  userdata;
  userareadata;
  render = false;
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      temp_address: "",
      per_address: "",
      area: "",
      pin_code: "",
      del_per_id: "",
      stock: "",
      remark: "",
      product: "",
      price: "",
      image: ""
    });
    if (this.route.snapshot.params.id !== "insert") {
      this.service.deliverydata(this.route.snapshot.params.id).subscribe(
        res => {
          this.userdata = res.data.rows[0];
          this.imageurl = url + "/image/" + res.data.rows[0].pic;
          this.imagename = res.data.rows[0].pic;
          console.log("userform data:", res.data);
        },
        error => {
          console.log(error);
          alert(error.error.message);
        }
      );
      this.service.deliveryareadata(this.route.snapshot.params.id).subscribe(
        res => {
          this.userareadata = res.data.rows[0];

          console.log("user area a da da da  data:", res.data);
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
  ngOnInit() {
    if (this.route.snapshot.params.id == "insert") {
      this.render = true;
    }
  }
  insert(data) {
    console.log("insert ", data);
    this.service.newData_delivery(data, this.imagename).subscribe(
      res => {
        console.log(res);
        if (res.success === true) {
          // alert("inserted");
          this.service
            .newData_deliveryarea(data, res.data[0].delivery_person_id)
            .subscribe(
              res => {
                console.log(res);
                if (res.success === true) {
                  alert("inserted");
                  // window.location.href = "pages/users-tables/delivery_person";
                  this.router.navigate(["pages/users-tables/delivery_person"]);
                } else {
                  alert(res.message);
                }
              },
              error => {
                console.log(error);
                alert("something wrong");
              }
            );
          // window.location.href = "pages/users-tables/delivery_person";
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
      .updateData_delivery(data, this.route.snapshot.params.id, this.imagename)
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("user updated");
            // window.location.href = "pages/users-tables/delivery_person";
          } else {
            alert("something wrong");
          }
        },
        error => {
          console.log(error);
          alert("something wrong");
        }
      );
    this.service
      .updateData_deliveryarea(data, this.route.snapshot.params.id)
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("user updated");
            // window.location.href = "pages/users-tables/delivery_person";
            this.router.navigate(["pages/users-tables/delivery_person"]);
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
