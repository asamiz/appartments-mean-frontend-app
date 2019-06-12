import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.required])
  });

  unAuthFlag: Boolean = false;

  constructor(private _service: UserService, private _router: Router) {}

  ngOnInit() {}

  login() {
    if (!this.loginForm.valid) {
      console.log("Invalid");
      return;
    }
    // console.log(JSON.stringify(this.loginForm.value));
    this._service.login(JSON.stringify(this.loginForm.value)).subscribe(
      res => {
        this._router.navigate(["/appartments"]);
      },
      err => (this.unAuthFlag = true)
    );
  }

  register() {
    this._router.navigate(["/register"]);
  }
}
