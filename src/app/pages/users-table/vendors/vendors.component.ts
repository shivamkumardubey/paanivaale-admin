import { Component } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
// import { SmartTableData } from "../../../@core/data/smart-table";
import { UsersTableService } from "../../users-table.service";
import * as XLSX from "xlsx";

@Component({
  selector: "ngx-vendors",
  templateUrl: "./vendors.component.html",
  styleUrls: ["./vendors.component.scss"]
})
export class VendorsComponent {
 
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
  create() {
    this.router.navigate(["/pages/vendorfrom/", "insert"]);
  }
  view(data) {
    this.router.navigate([
      "/pages/users-tables/vendors-activity",
      data.vendor_id
    ]);
  }
  edit(data) {
    this.router.navigate(["/pages/vendorfrom/", data.vendor_id]);
  }
  blockuser() {
    if (this.arr.length !== 0) {
      if (window.confirm("Are you sure you want to BLOCK?")) {
        this.service.blocksupplier_multi(this.arr).subscribe(
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
  delete() {
    if (this.arr.length !== 0) {
      if (window.confirm("Are you sure you want to DELETE?")) {
        this.service.deleteData_vendors_multi(this.arr).subscribe(
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
    this.service.getData_vendors().subscribe(
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
  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = event => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: "binary" });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);

      this.setDownload(dataString);
    };
    reader.readAsBinaryString(file);
  }
  willDownload = false;
  data = [];
  setDownload(data) {
    console.log(data);
    this.data = data;
    this.willDownload = true;
    // setTimeout(() => {
    //   const el = document.querySelector("#download");
    //   el.setAttribute("href", `data:text/json;charset=utf-8,${encodeURIComponent(data)}`);
    //   el.setAttribute("download", 'xlsxtojson.json');
    // }, 1000)
  }
  loaddata() {
    console.log("load data", this.data);
    this.service.loaddata(this.data).subscribe(
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
  // userRowSelect(event): void {
  //   console.log(event.data.mobile);
  //   this.router.navigate([
  //     "/pages/users-tables/vendors-activity",
  //     event.data.vendor_id
  //   ]);
  // }
  // onSaveConfirm(event): void {
  //   console.log(event);
  //   this.service.updateData_vendors(event).subscribe(
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
  //   this.service.newData_vendors(event).subscribe(
  //     res => {
  //       console.log(res);
  //       if (res.success === true) {
  //         this.source.remove(event.data);
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
  //     this.service.deleteData_vendors(event).subscribe(
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
  //   this.router.navigate(["/pages/vendorfrom/", event.data.vendor_id]);
  // }
  // createRowSelect(event) {
  //   console.log("create onlcik ", event);
  //   this.router.navigate(["/pages/vendorfrom/", "insert"]);
  // }
}
