import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { url } from "../@core/data/url";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UsersTableService {
  constructor(private http: HttpClient) {}

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
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXNkZmFzZGYiLCJpYXQiOjE1Njk5MTc2MDAsImV4cCI6MTU3MDA5MDQwMH0._aNpuahuWZ0QeulBKZxckLeVpeBu1setLSW70wITxGA"
    })
  };
  // headers = new HttpHeaders({
  //   "Content-Type": "application/json",

  // });
  //................users
  getData() {
    return this.http.get<any>(url + "/pv_users/all", this.httpOptions);
  }
  newData_user(data) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_users/insertuser",
      data.newData,
      this.httpOptions
    );
  }
  updateData_user(data, id) {
    console.log(data, id);
    // console.log(data.data.user_id);

    return this.http.post<any>(
      url + "/pv_users/updateuser_id_admin",
      { data: data, id: id },
      this.httpOptions
    );
  }
  deleteData_user(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(
      url + "/pv_users/delete_admin",
      { id: data },
      this.httpOptions
    );
  }
  userdata(id) {
    return this.http.post<any>(
      url + "/pv_users/user",
      { mobile: id },
      this.httpOptions
    );
  }
  userdata_id(id) {
    return this.http.post<any>(
      url + "/pv_users/user_by_id",
      { id: id },
      this.httpOptions
    );
  }
  deleall(id) {
    return this.http.post<any>(
      url + "/pv_users/deleall",
      { id: id },
      this.httpOptions
    );
  }
  useraddress(id) {
    return this.http.post<any>(
      url + "/pv_users_address/alladdress",
      { user_mobile: id },
      this.httpOptions
    );
  }
  getblockuserData() {
    return this.http.get<any>(url + "/pv_users/blockusers", this.httpOptions);
  }
  getdeleteduserData() {
    return this.http.get<any>(url + "/pv_users/deletedusers", this.httpOptions);
  }
  blockuser(id) {
    return this.http.post<any>(
      url + "/pv_users/userblock",
      { mobile: id },
      this.httpOptions
    );
  }
  blockuser_multi(id) {
    return this.http.post<any>(
      url + "/pv_users/userblock_multi",
      { mobile: id },
      this.httpOptions
    );
  }
  unblockuser(id) {
    return this.http.post<any>(
      url + "/pv_users/userunblock",
      { mobile: id },
      this.httpOptions
    );
  }
  unblockuse_multi(id) {
    return this.http.post<any>(
      url + "/pv_users/userunblock_multi",
      { mobile: id },
      this.httpOptions
    );
  }
  undeleteuser(id) {
    return this.http.post<any>(
      url + "/pv_users/userundelete",
      { mobile: id },
      this.httpOptions
    );
  }
  undeleteuser_mult(id) {
    return this.http.post<any>(
      url + "/pv_users/userundelete_multi",
      { mobile: id },
      this.httpOptions
    );
  }
  loaduserdata(data) {
    return this.http.post<any>(
      url + "/pv_users/importdata",
      data,
      this.httpOptions
    );
  }
  //...........................................................user activity
  allorder(data) {
    return this.http.post<any>(
      url + "/pv_order_history/allorder_admin",
      { user_mobile: data },
      this.httpOptions
    );
  }
  delivery_person_review(data) {
    return this.http.post<any>(
      url + "/pv_delivery_person_review/all_by_mobile",
      { user_mobile: data },
      this.httpOptions
    );
  }
  pv_products_reviews(data) {
    console.log("pv_products_reviews", data);
    return this.http.post<any>(
      url + "/pv_products_reviews/all_by_mobileid",
      { user_mobile: data },
      this.httpOptions
    );
  }
  pv_vendor_reviews(data) {
    console.log("pv_vendor_reviews", data);
    return this.http.post<any>(
      url + "/pv_vendor_reviews/allreview_by_mobile",
      { user_mobile: data },
      this.httpOptions
    );
  }

  //.....................vendors
  getData_vendors() {
    return this.http.get<any>(url + "/pv_vendor/all", this.httpOptions);
  }

  newData_vendors(data, image) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_vendor/addvendor_admin",
      { data: data, image: image },
      this.httpOptions
    );
  }
  updateData_vendors(data, id, image) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_vendor/updatevendor_admin",
      { data: data, id: id, image: image },
      this.httpOptions
    );
  }
  deleteData_vendors(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(
      url + "/pv_vendor/deletevendor",
      { vendor_id: data.data.vendor_id },
      this.httpOptions
    );
  }
  deleteData_vendors_multi(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(
      url + "/pv_vendor/deletevendor_multi",
      { vendor_id: data },
      this.httpOptions
    );
  }
  pv_vendor_reviews_by_id(data) {
    console.log("pv_vendor_reviews", data);
    return this.http.post<any>(
      url + "/pv_vendor_reviews/allreview_by_vendor_id2",
      { vendor_id: data },
      this.httpOptions
    );
  }
  vendordata_byarea(area) {
    return this.http.post<any>(
      url + "/pv_vendor/allvendor_by_area",
      { area: area },
      this.httpOptions
    );
  }
  vendordata(id) {
    return this.http.post<any>(
      url + "/pv_vendor/vendor_by_id",
      { vendor_id: id },
      this.httpOptions
    );
  }
  vendordatabynewid(id) {
    return this.http.post<any>(
      url + "/pv_vendor/vendor_by_newid",
      { vendor_id: id },
      this.httpOptions
    );
  }
  vendordata1(id) {
    return this.http.post<any>(
      url + "/pv_vendor/vendor_by_id1",
      { vendor_id: id },
      this.httpOptions
    );
  }
  getblockvendorData() {
    return this.http.get<any>(url + "/pv_vendor/blockvendor", this.httpOptions);
  }
  getdeletevendorData() {
    return this.http.get<any>(
      url + "/pv_vendor/deletedvendor",
      this.httpOptions
    );
  }
  blocksupplier(id) {
    return this.http.post<any>(
      url + "/pv_vendor/supplierblock",
      { vendor_id: id },
      this.httpOptions
    );
  }
  blocksupplier_multi(id) {
    return this.http.post<any>(
      url + "/pv_vendor/supplierblock_multi",
      { vendor_id: id },
      this.httpOptions
    );
  }
  unblocksupplier(id) {
    return this.http.post<any>(
      url + "/pv_vendor/supplierunblock",
      { vendor_id: id },
      this.httpOptions
    );
  }
  unblocksupplier_multi(id) {
    return this.http.post<any>(
      url + "/pv_vendor/supplierunblock_mutli",
      { vendor_id: id },
      this.httpOptions
    );
  }
  undeletesupplier(id) {
    return this.http.post<any>(
      url + "/pv_vendor/supplierundelete",
      { vendor_id: id },
      this.httpOptions
    );
  }
  undeletesupplier_multi(id) {
    return this.http.post<any>(
      url + "/pv_vendor/supplierundelete_mutli",
      { vendor_id: id },
      this.httpOptions
    );
  }
  loaddata(data) {
    return this.http.post<any>(
      url + "/pv_vendor/importdata",
      data,
      this.httpOptions
    );
  }

  // ....................delivery
  getdata_delivery() {
    return this.http.get<any>(
      url + "/pv_delivery_person/alldelivery",
      this.httpOptions
    );
  }
  newData_delivery(data, image) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_delivery_person/add_admin",
      { data: data, image: image },
      this.httpOptions
    );
  }
  newData_deliveryarea(data, id) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_delivery_person_area/insert",
      { data: data, id: id },
      this.httpOptions
    );
  }
  updateData_delivery(data, id, image) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_delivery_person/update_admin",
      { data: data, id: id, image: image },
      this.httpOptions
    );
  }
  updateData_deliveryarea(data, id) {
    return this.http.post<any>(
      url + "/pv_delivery_person_area/admin_update",
      { data: data, id: id },
      this.httpOptions
    );
  }
  deleteData_delivery(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(url + "/pv_delivery_person/deletes", {
      delivery_person_id: data.data.delivery_person_id
    });
  }
  deleteData_delivery_multi(data) {
    return this.http.post<any>(url + "/pv_delivery_person/deletes_multi", {
      delivery_person_id: data
    });
  }
  delivery_person_review_by_id(data) {
    return this.http.post<any>(
      url + "/pv_delivery_person_review/all_by_delivery_id",
      { delivery_person_id: data },
      this.httpOptions
    );
  }
  deliverydata(id) {
    return this.http.post<any>(
      url + "/pv_delivery_person/by_id",
      { id: id },
      this.httpOptions
    );
  }
  deliverydatabyarea(area) {
    return this.http.post<any>(
      url + "/pv_delivery_person/allby_deliveryarea",
      { area: area },
      this.httpOptions
    );
  }
  deliverydatabynewid(id) {
    return this.http.post<any>(
      url + "/pv_delivery_person/bynew_id",
      { id: id },
      this.httpOptions
    );
  }
  deliverydata1(id) {
    return this.http.post<any>(
      url + "/pv_delivery_person/by_id1",
      { id: id },
      this.httpOptions
    );
  }
  deliveryareadata(id) {
    return this.http.post<any>(
      url + "/pv_delivery_person_area/all",
      { delivery_person_id: id },
      this.httpOptions
    );
  }
  getdeliveryblockdata() {
    return this.http.get<any>(
      url + "/pv_delivery_person/blockdata",
      this.httpOptions
    );
  }
  getdeliverydeleteddata() {
    return this.http.get<any>(
      url + "/pv_delivery_person/deleteddata",
      this.httpOptions
    );
  }
  getdeliveryunverifydata() {
    return this.http.get<any>(
      url + "/pv_delivery_person/unverifydata",
      this.httpOptions
    );
  }
  blockvendor(data) {
    return this.http.post<any>(url + "/pv_delivery_person/vendorblock", {
      delivery_person_id: data
    });
  }
  blockvendor_multi(data) {
    return this.http.post<any>(url + "/pv_delivery_person/vendorblock_multi", {
      delivery_person_id: data
    });
  }
  unblockvendor(data) {
    return this.http.post<any>(url + "/pv_delivery_person/vendorunblock", {
      delivery_person_id: data
    });
  }
  unblockvendor_multi(data) {
    return this.http.post<any>(
      url + "/pv_delivery_person/vendorunblock_multi",
      {
        delivery_person_id: data
      }
    );
  }
  undeletevendor(data) {
    return this.http.post<any>(url + "/pv_delivery_person/vendorundelete", {
      delivery_person_id: data
    });
  }
  undeletevendor_multi(data) {
    return this.http.post<any>(
      url + "/pv_delivery_person/vendorundelete_mulit",
      {
        delivery_person_id: data
      }
    );
  }
  verifyvendor(data) {
    return this.http.post<any>(url + "/pv_delivery_person/vendorverify", {
      delivery_person_id: data
    });
  }
  verifyvendor_multi(data) {
    return this.http.post<any>(url + "/pv_delivery_person/vendorverify_mutli", {
      delivery_person_id: data
    });
  }

  loaddevliberydata(data) {
    return this.http.post<any>(
      url + "/pv_delivery_person/importdata",
      data,
      this.httpOptions
    );
  }
  //......................................................Products
  getdata_Prodcuts() {
    return this.http.get<any>(
      url + "/pv_products/allproduct",
      this.httpOptions
    );
  }
  newData_Products(data, image, image1, image2) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_products/addproduct_admin",
      { data: data, image: image, image1: image1, image2: image2 },
      this.httpOptions
    );
  }
  updateData_Products(data, id, image, image1, image2) {
    const da = data.newData;
    return this.http.post<any>(
      url + "/pv_products/updateproduct_admin",
      { data: data, id: id, image: image, image1: image1, image2: image2 },
      this.httpOptions
    );
  }
  deleteData_Products(data) {
    return this.http.post<any>(url + "/pv_products/deleteproduct", {
      product_id: data.data.product_id
    });
  }
  deleteData_Products_multi(data) {
    return this.http.post<any>(url + "/pv_products/deleteproduct_mutli", {
      product_id: data
    });
  }
  pv_products_reviews_by_product_id(data) {
    console.log("pv_products_reviews", data);
    return this.http.post<any>(
      url + "/pv_products_reviews/all_by_prodcut_id",
      { product_id: data },
      this.httpOptions
    );
  }
  productdata(id) {
    return this.http.post<any>(
      url + "/pv_products/prodcut_by_id",
      { product_id: id },
      this.httpOptions
    );
  }
  productdata1(id) {
    return this.http.post<any>(
      url + "/pv_products/prodcut_by_id1",
      { product_id: id },
      this.httpOptions
    );
  }
  getProdcutsblock() {
    return this.http.get<any>(url + "/pv_products/blockdata", this.httpOptions);
  }
  getProdcutsdeleted() {
    return this.http.get<any>(
      url + "/pv_products/deletedata",
      this.httpOptions
    );
  }
  blockproduct(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(url + "/pv_products/productblock", {
      product_id: data
    });
  }
  blockproduct_mutli(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(url + "/pv_products/productblock_mutli", {
      product_id: data
    });
  }
  unblockproduct(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(url + "/pv_products/productunblcok", {
      product_id: data
    });
  }
  unblockproduct_mutli(data) {
    return this.http.post<any>(url + "/pv_products/productunblcok_mutli", {
      product_id: data
    });
  }
  undeleteproduct(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(url + "/pv_products/prodcutundelete", {
      product_id: data
    });
  }
  undeleteproduct_mutli(data) {
    console.log("deltea seveice ", data);
    return this.http.post<any>(url + "/pv_products/prodcutundelete_mutli", {
      product_id: data
    });
  }
  loadproductdata(data) {
    return this.http.post<any>(
      url + "/pv_products/importdata",
      data,
      this.httpOptions
    );
  }
  //..........................................................Orders

  getdata_orders() {
    return this.http.get<any>(
      url + "/pv_order_history/allorders",
      this.httpOptions
    );
  }
  getdata_assignorders() {
    return this.http.get<any>(
      url + "/pv_order_history/allordersassign",
      this.httpOptions
    );
  }
  getdata_ordersbyid(id) {
    return this.http.post<any>(url + "/pv_order_history/allorderbyorderid", {
      order_id: id
    });
  }

  getdata_ordersbyidDistributer(id) {
    return this.http.post<any>(
      url + "/pv_order_history/allorderofdistributer",
      {
        id: id
      }
    );
  }

  assignorder(order_id, id, type) {
    console.log("assign order data", order_id, id, type);
    return this.http.post<any>(url + "/pv_order_history/assignorder", {
      id: id,
      type: type,
      order_id: order_id
    });
  }
  //...........................................................event
  alleventorder(data) {
    return this.http.post<any>(
      url + "/pv_event_order_his/alleventorder_admin",
      { user_mobile: data },
      this.httpOptions
    );
  }
  getdata_eventsorders() {
    return this.http.get<any>(
      url + "/pv_event_order_his/allorders",
      this.httpOptions
    );
  }
  getdata_assigneventorders() {
    return this.http.get<any>(
      url + "/pv_event_order_his/allordersassign",
      this.httpOptions
    );
  }
  getdata_eventordersbyid(id) {
    return this.http.post<any>(url + "/pv_event_order_his/allorderbyorderid", {
      order_id: id
    });
  }
  assigneventorders(order_id, id, type) {
    console.log("assign order data", order_id, id, type);
    return this.http.post<any>(url + "/pv_event_order_his/assignorder", {
      id: id,
      type: type,
      order_id: order_id
    });
  }
  getdata_eventbyidDistributer(id) {
    return this.http.post<any>(
      url + "/pv_event_order_his/allorderofdistributer",
      {
        id: id
      }
    );
  }

  //..........................................................newbottleorders
  allnewbottleorder(data) {
    return this.http.post<any>(
      url + "/pv_new_bottle_order_his/allnewbottleorder_admin",
      { user_mobile: data },
      this.httpOptions
    );
  }
  getdata_newbottleorders() {
    return this.http.get<any>(
      url + "/pv_new_bottle_order_his/allneworders",
      this.httpOptions
    );
  }
  getdata_assignneworders() {
    return this.http.get<any>(
      url + "/pv_new_bottle_order_his/allordersassign",
      this.httpOptions
    );
  }
  getdata_newordersbyid(id) {
    return this.http.post<any>(
      url + "/pv_new_bottle_order_his/allorderbyorderid",
      {
        order_id: id
      }
    );
  }
  assigneworders(order_id, id, type) {
    console.log("assign order data", order_id, id, type);
    return this.http.post<any>(url + "/pv_new_bottle_order_his/assignorder", {
      id: id,
      type: type,
      order_id: order_id
    });
  }
  getdata_newbottlebyidDistributer(id) {
    return this.http.post<any>(
      url + "/pv_new_bottle_order_his/allorderofdistributer",
      {
        id: id
      }
    );
  }
  //............................................................complains
  getdata_pendingcomplain() {
    return this.http.get<any>(url + "/pv_complain/pending", this.httpOptions);
  }
  getdata_pendingcomplainbyid(id) {
    return this.http.post<any>(url + "/pv_complain/pendingbyid", {
      id: id
    });
  }
  getdata_pendingcomplain_vendor(id) {
    return this.http.post<any>(url + "/pv_complain/pendingbyvenodrid", {
      id: id
    });
  }
  getdata_solvedcomplain_vendor(id) {
    return this.http.post<any>(url + "/pv_complain/solvebyvenodrid", {
      id: id
    });
  }

  getdata_pendingcomplain_user(id) {
    return this.http.post<any>(url + "/pv_complain/pendingbyuser", {
      id: id
    });
  }
  getdata_solvedcomplain_user(id) {
    return this.http.post<any>(url + "/pv_complain/solvebyuser", {
      id: id
    });
  }
  getdata_solvedcomplain() {
    return this.http.get<any>(url + "/pv_complain/solve", this.httpOptions);
  }
  pendinganswer(data, id) {
    return this.http.post<any>(
      url + "/pv_complain/pendingans",
      { data: data, id: id },
      this.httpOptions
    );
  }
  //..........................................................ADMIN
  adminprofile(data, user, image) {
    return this.http.post<any>(
      url + "/auth/profileupdate",
      { data: data, id: user.id, image: image },
      this.httpOptions
    );
  }
  admindata(data) {
    return this.http.post<any>(
      url + "/auth/all",
      { id: data.id },
      this.httpOptions
    );
  }
  changepassword(data, user) {
    return this.http.post<any>(
      url + "/auth/changepassword",
      { data: data, id: user.id },
      this.httpOptions
    );
  }
  email(data, email) {
    return this.http.post<any>(
      url + "/auth/email",
      { data: data, email: email },
      this.httpOptions
    );
  }
  public uploadFiles(data) {
    let uploadURL = url + "/auth/upload";
    return this.http.post<any>(uploadURL, data);
  }
}
