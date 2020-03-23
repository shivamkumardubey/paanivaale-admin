import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from "@nebular/theme";
import { url } from "../../../@core/data/url";
import { UserData } from "../../../@core/data/users";
import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NbAuthService, NbAuthJWTToken } from "@nebular/auth";
import { UsersTableService } from "../../../pages/users-table.service";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  themes = [
    {
      value: "default",
      name: "Light"
    },
    {
      value: "dark",
      name: "Dark"
    },
    {
      value: "cosmic",
      name: "Cosmic"
    },
    {
      value: "corporate",
      name: "Corporate"
    }
  ];

  currentTheme = "default";

  userMenu = [
    { title: "Profile", link: "pages/profile" },
    { title: "Change password", link: "pages/changepassword" },
    { title: "Log out", link: "pages/logout" }
  ];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private userService: UserData,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private authService: NbAuthService,
    private service: UsersTableService
  ) {
    console.log("sssssssssssssss", this.menuService.onItemClick());
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;

    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      console.log(token);
      if (token.isValid()) {
        // this.users = ; // here we receive a payload from the token and assigns it to our `user` variable
        this.service.admindata(token.getPayload()).subscribe(
          res => {
            console.log(res.data.rows);
            this.user = {
              name: res.data.rows[0].name,
              picture: url + "/image/" + res.data.rows[0].pic
            };
          },
          error => {
            console.log(error);
            alert(error.error.message);
          }
        );
      }
    });

    // this.userService
    //   .getUsers()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((users: any) => (this.user = users.nick));
    // console.log(this.user);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe(themeName => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
  login() {
    console.log("logout is call");
    this.authService.logout("email");
  }
}
