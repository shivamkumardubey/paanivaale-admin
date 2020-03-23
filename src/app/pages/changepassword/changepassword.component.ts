import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersTableService } from "../users-table.service";
import { FormBuilder, Validators } from "@angular/forms";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
@Component({
  selector: "ngx-changepassword",
  templateUrl: "./changepassword.component.html",
  styleUrls: ["./changepassword.component.scss"]
})
export class ChangepasswordComponent {
  submit = false;
  checkoutForm;
  userdata;
  user = {};
  constructor(
    private authService: NbAuthService,
    private service: UsersTableService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      oldpass: "",
      newpass: "",
      cnewpass: ""
    });
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      console.log(token);
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
  }

  onSubmit(customerData) {
    this.submit = true;
    // Process checkout data here
    console.log(customerData, this.user);
    if (customerData.newpass != customerData.cnewpass) {
      alert("Confirm password not match");
    } else {
      this.service.changepassword(customerData, this.user).subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("password changed");
            window.location.href = "/pages/dashboard";
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
  }
}
