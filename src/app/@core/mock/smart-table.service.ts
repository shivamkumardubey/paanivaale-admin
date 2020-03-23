import { Injectable } from "@angular/core";
import { SmartTableData } from "../data/smart-table";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { url } from "../data/url";
import { error } from "@angular/compiler/src/util";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};
@Injectable()
export class SmartTableService extends SmartTableData {
  constructor(private http: HttpClient) {
    super();
  }
  data = [
    {
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      username: "@mdo",
      email: "mdo@gmail.com",
      age: "28"
    },
    {
      id: 2,
      firstName: "Jacob",
      lastName: "Thornton",
      username: "@fat",
      email: "fat@yandex.ru",
      age: "45"
    }
  ];

  getData() {
    return this.data;
  }
  getUser() {
    this.http.get(url + "/pv_users/alluser").subscribe(res => {
      let data;
    });
  }
}
