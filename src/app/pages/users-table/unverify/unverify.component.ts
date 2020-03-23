import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";

// import { SmartTableData } from "../../../@core/data/smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-unverify",
  templateUrl: "./unverify.component.html",
  styleUrls: ["./unverify.component.scss"]
})
export class UnverifyComponent {
  // settings = {
  //   mode: "external",
  //   add: {
  //     addButtonContent: '<i class="nb-plus"></i>',
  //     createButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //     confirmCreate: true
  //   },
  //   edit: {
  //     editButtonContent: '<i class="nb-edit"></i>',
  //     saveButtonContent: '<i class="nb-checkmark"></i>',
  //     cancelButtonContent: '<i class="nb-close"></i>',
  //     confirmSave: true
  //   },
  //   delete: {
  //     deleteButtonContent: '<i class="nb-trash"></i>',
  //     confirmDelete: true
  //   },
  //   columns: {
  //     del_per_id: {
  //       title: "ID",
  //       type: "number"
  //     },
  //     fname: {
  //       title: "First Name",
  //       type: "string"
  //     },
  //     lname: {
  //       title: "Last Name",
  //       type: "string"
  //     },
  //     email: {
  //       title: "E-mail",
  //       type: "string"
  //     },
  //     mobile: {
  //       title: "Mobile",
  //       type: "number"
  //     }
  //   }
  // };

  // source: LocalDataSource = new LocalDataSource();
  showTable: boolean = true;
  dataTable: any;
  title = "Example of Angular 8 DataTable";
  dtOptions: any;
  tableShow = false;
  dtUsers;
  constructor(private service: UsersTableService, private router: Router) {}
  arr: any = [];
  select(event, data) {
    console.log("allselect evetn", event.srcElement.checked, data);
    if (event.srcElement.checked) {
      this.arr.push(data);
      console.log(this.arr.length, this.arr);
    } else {
      const index = this.arr.findIndex(order => order.user_id === data.user_id);
      this.arr.splice(index, 1);
      console.log("remove array", this.arr);
    }
  }

  view(data) {
    this.router.navigate([
      "/pages/users-tables/unverifyvendors-activity",
      data.delivery_person_id
    ]);
  }
  verify() {
    if (this.arr.length !== 0) {
      if (window.confirm("Are you sure you want to Verify?")) {
        this.service.verifyvendor_multi(this.arr).subscribe(
          res => {
            console.log(res);
            if (res.success === true) {
              location.reload();
            } else {
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
  ngOnInit(): void {
    this.service.getdeliveryunverifydata().subscribe(
      res => {
        this.tableShow = true;
        this.dtUsers = res.data.rows;
      },
      error => {
        console.log(error);
        alert(error.error.message);
      }
    );
    this.dtOptions = {
      pagingType: "full_numbers",
      pageLength: 10,
      dom: "Bfrtip",
      buttons: [
        {
          extend: "csv",
          text: '<i class="fa fa-file-text-o"></i> Export As CSV',
          title: "Countries",
          className: "btn btn-info"
        },
        {
          extend: "excel",
          text: '<i class="fa fa-file-excel-o"></i> Export As Excel',
          title: "Countries",
          className: "btn btn-primary"
        }
      ],
      select: true
    };
  }
  // userRowSelect(event): void {
  //   console.log(event.data.mobile);
  //   this.router.navigate([
  //     "/pages/users-tables/unverifyvendors-activity",
  //     event.data.delivery_person_id
  //   ]);
  // }
  // onSaveConfirm(event): void {
  //   console.log(event);
  //   this.service.updateData_delivery(event).subscribe(
  //     res => {
  //       console.log(res);
  //       if (res.success === true) {
  //         event.confirm.resolve();
  //       } else {
  //         event.confirm.reject();
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //       alert("something wrong");
  //     }
  //   );
  // }
  // onCreateConfirm(event): void {
  //   console.log(event);
  //   this.service.newData_delivery(event).subscribe(
  //     res => {
  //       console.log(res);
  //       if (res.success === true) {
  //         event.confirm.resolve();
  //       } else {
  //         event.confirm.reject();
  //       }
  //     },
  //     error => {
  //       console.log(error);
  //       alert("something wrong");
  //     }
  //   );
  // }
  // deleteRowSelect(event): void {
  //   console.log(event);

  //   if (window.confirm("Are you sure you want to delete?")) {
  //     this.service.deleteData_delivery(event).subscribe(
  //       res => {
  //         console.log(res);
  //         if (res.success === true) {
  //           this.source.remove(event.data);
  //         } else {
  //         }
  //       },
  //       error => {
  //         console.log(error);
  //         alert("something wrong");
  //       }
  //     );
  //   } else {
  //   }
  // }
  // editRowSelect(event) {
  //   console.log("edti onlcik ", event);
  //   this.router.navigate([
  //     "/pages/deliveryform/",
  //     event.data.delivery_person_id
  //   ]);
  // }
  // createRowSelect(event) {
  //   console.log("create onlcik ", event);
  //   this.router.navigate(["/pages/deliveryform/", "insert"]);
  // }
}
