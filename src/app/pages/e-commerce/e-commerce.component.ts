import { Component } from "@angular/core";
import { NbAuthJWTToken, NbAuthService } from "@nebular/auth";
@Component({
  selector: "ngx-ecommerce",
  templateUrl: "./e-commerce.component.html"
})
export class ECommerceComponent {
  user = {};
  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      console.log(token);
      if (token.isValid()) {
        this.user = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable
      }
    });
    console.log("asdfsafas fasdf ", this.user);
  }
}
