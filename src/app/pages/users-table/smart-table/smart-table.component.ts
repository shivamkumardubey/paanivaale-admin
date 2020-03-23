import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Router } from "@angular/router";
import * as XLSX from "xlsx";

// import { SmartTableData } from "../../../@core/data/smart-table";
import { UsersTableService } from "../../users-table.service";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./smart-table.component.html",
  styleUrls: ["./smart-table.component.scss"]
})
export class SmartTableComponent implements OnInit {
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
    this.router.navigate(["/pages/users-tables/user-activity", data.mobile]);
  }
  edit(data) {
    console.log("edit", data);
    this.router.navigate(["/pages/userform/", data.user_id]);
  }
  blockuser() {
    if (this.arr.length !== 0) {
      if (window.confirm("Are you sure you want to BLOCK?")) {
        this.service.blockuser_multi(this.arr).subscribe(
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
        this.service.deleteData_user(this.arr).subscribe(
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
    this.service.getData().subscribe(
      res => {
        this.dtUsers = res.data.rows;
        // this.source.load(res.data.rows);
        console.log(res.data.rows);
        this.tableShow = true;
        //
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
  }
  loaddata() {
    console.log("load data", this.data);
    this.service.loaduserdata(this.data).subscribe(
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
