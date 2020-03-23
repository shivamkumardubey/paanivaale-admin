import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";

// import { SmartTableData } from "../../../@core/data/smart-table";
import { UsersTableService } from "../../users-table.service";
@Component({
  selector: "ngx-orderassign",
  templateUrl: "./orderassign.component.html",
  styleUrls: ["./orderassign.component.scss"]
})
export class OrderassignComponent {
  // settings = {
  //   actions: false,
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
  //     order_id: {
  //       title: "ID",
  //       type: "number"
  //     },
  //     delivered_address: {
  //       title: "Address",
  //       type: "string"
  //     },
  //     payment_method: {
  //       title: "Payment Method ",
  //       type: "string"
  //     },
  //     delivered_date: {
  //       title: "Date",
  //       type: "number"
  //     },
  //     delivered_time: {
  //       title: "Time",
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
      "/pages/users-tables/orders-assign-activity",
      data.order_id
    ]);
  }
  ngOnInit(): void {
    this.service.getdata_assignorders().subscribe(
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
  //     "/pages/users-tables/orders-assign-activity",
  //     event.data.order_id
  //   ]);
  // }
  // onSaveConfirm(event): void {
  //   console.log(event);
  //   this.service.updateData_Products(event).subscribe(
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
  //   this.service.deleteData_Products(event).subscribe(
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
  //     this.service.deleteData_Products(event).subscribe(
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
  //   this.router.navigate(["/pages/productform/", event.data.product_id]);
  // }
  // createRowSelect(event) {
  //   console.log("create onlcik ", event);
  //   this.router.navigate(["/pages/productform/", "insert"]);
  // }
}
