import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersTableService } from "../users-table.service";
import { FormBuilder } from "@angular/forms";
@Component({
  selector: "ngx-userform",
  templateUrl: "./userform.component.html",
  styleUrls: ["./userform.component.scss"]
})
export class UserformComponent {
  submit = false;
  checkoutForm;
  userdata;
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.service.userdata_id(this.route.snapshot.params.id).subscribe(
      res => {
        this.userdata = res.data.rows[0];

        console.log("userform data:", res.data);
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.checkoutForm = this.formBuilder.group({
      fname: "",
      lname: "",
      email: "",
      city: "",
      pincode: "",
      mobile: ""
    });
  }

  onSubmit(customerData) {
    this.submit = true;
    // Process checkout data here
    this.service
      .updateData_user(customerData, this.route.snapshot.params.id)
      .subscribe(
        res => {
          console.log(res);
          if (res.success === true) {
            alert("user updated");
            // window.location.href = "pages/users-tables/smart-table";
            this.router.navigate(["pages/users-tables/smart-table"]);
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
