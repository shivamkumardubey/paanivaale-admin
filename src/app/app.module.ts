/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from "@nebular/theme";
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbAuthJWTToken
} from "@nebular/auth";
import { AuthGuard } from "./auth-guard.service";

const formSetting: any = {
  redirectDelay: 0,
  showMessages: {
    success: true
  }
};
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY"
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          token: {
            class: NbAuthJWTToken,
            key: "token"
          },

          baseEndpoint: "https://paanivaale-api.herokuapp.com",
          login: {
            endpoint: "/auth/sign-in",
            method: "post",
            redirect: {
              success: "/dashboard/",
              failure: null
            }
          },
          // register: {
          //   endpoint: "/auth/sign-up",
          //   method: "post"
          // },
          // logout: {
          //   endpoint: "/auth/sign-out",
          //   method: "post"
          // },
          requestPass: {
            endpoint: "/auth/request-pass",
            method: "post",
            redirect: {
              success: "/auth/login",
              failure: null
            }
          }
          // resetPass: {
          //   endpoint: "/auth/reset-pass",
          //   method: "post"
          // }
        })
      ],
      forms: {
        login: formSetting,
        register: formSetting,
        requestPassword: formSetting,
        resetPassword: formSetting,
        logout: {
          redirectDelay: 0
        }
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
