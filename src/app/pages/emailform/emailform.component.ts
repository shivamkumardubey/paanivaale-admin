import { Component, OnInit } from "@angular/core";
import { UsersTableService } from "../users-table.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { Location } from "@angular/common";
@Component({
  selector: "ngx-emailform",
  templateUrl: "./emailform.component.html",
  styleUrls: ["./emailform.component.scss"]
})
export class EmailformComponent implements OnInit {
  checkoutForm;
  userdata;
  userareadata;
  render = false;
  submit = false;
  constructor(
    private service: UsersTableService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.checkoutForm = this.formBuilder.group({
      subject: "",
      body: ""
    });
  }

  ngOnInit() {}

  send(data) {
    console.log(data, this.route.snapshot.params.id);
    this.service.email(data, this.route.snapshot.params.id).subscribe(
      res => {
        console.log(res);
        if (res.success === true) {
          alert("mail sended");
          this.location.back();
          // window.location.href = "pages/users-tables/vendors";
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
