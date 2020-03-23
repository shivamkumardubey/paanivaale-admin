import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { UsersTableService } from "../users-table.service";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";
import { url } from "../../@core/data/url";
import { Router } from "@angular/router";
@Component({
  selector: "ngx-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  submit = false;
  data;
  user = {};
  constructor(
    private authService: NbAuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private service: UsersTableService
  ) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      console.log(token);
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });

    this.service.admindata(this.user).subscribe(
      res => {
        console.log(res.data.rows);
        this.data = res.data.rows[0];
        this.imageurl = url + "/image/" + res.data.rows[0].pic;
        this.imagename = res.data.rows[0].pic;
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.checkoutForm = this.formBuilder.group({
      name: "",
      email_id: "",
      username: "",
      mobile_no: "",
      image: ""
    });
    console.log("asdfsafas fasdf ", this.user, this.data);
  }
  file;
  checkoutForm;
  imageurl = "";
  imagename = "";
  ngOnInit() {}
  imageupload(event: any) {
    this.file = event.target.files[0];
    const formData = new FormData();
    formData.append("avatar", this.file, this.file.name);
    this.service.uploadFiles(formData).subscribe(
      res => {
        console.log(res);
        this.imagename = res.fileUrl;
        this.imageurl = url + "/image/" + res.fileUrl;
        console.log(this.imageurl);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit(customerData) {
    this.submit = true;
    // Process checkout data here
    if (this.imageurl === "") {
      alert("image not upload");
    } else {
      this.service
        .adminprofile(customerData, this.user, this.imagename)
        .subscribe(
          res => {
            console.log(res);
            if (res.success === true) {
              alert("Profile updated");
              // window.location.href = "pages/dashboard";
              this.router.navigate(["pages/dashboard"]);
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
}
