import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required])
  });

  constructor(private _service: UserService, private _router: Router) {}

  ngOnInit() {}

  register() {
    if (
      !this.registerForm.valid ||
      this.registerForm.controls.password.value !=
        this.registerForm.controls.confirmPassword.value
    ) {
      console.log("Not Valid");
    }
    this._service.register(JSON.stringify(this.registerForm.value)).subscribe(
      data => {
        console.log(data);
        this._router.navigate(["/login"]);
      },
      err => console.log(err)
    );
    // console.log(JSON.stringify(this.registerForm.value));
  }

  login() {
    this._router.navigate(["/login"]);
  }
}
