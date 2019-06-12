import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-apartments",
  templateUrl: "./apartments.component.html",
  styleUrls: ["./apartments.component.css"]
})
export class ApartmentsComponent implements OnInit {
  username: String = "";
  minDate1 = new Date(localStorage.getItem("resDate1"));
  minDate2 = new Date(localStorage.getItem("resDate2"));

  resDateAppart1: String = localStorage.getItem("resDate1");
  resDateAppart2: String = localStorage.getItem("resDate2");

  reservationFormAppart1: FormGroup = new FormGroup({
    dateAppart1: new FormControl(null)
  });

  reservationFormAppart2: FormGroup = new FormGroup({
    dateAppart2: new FormControl(null)
  });

  firstAppartNumber: Boolean = false;
  secondtAppartNumber: Boolean = false;
  constructor(private _service: UserService, private _router: Router) {
    this._service.appartments().subscribe(
      data => {
        this.addName(data);
      },
      err => {
        this._router.navigate(["/login"]);
      }
    );
    this.reservationFormAppart1
      .get("dateAppart1")
      .valueChanges.subscribe(res => {
        console.log();
        localStorage.setItem("resDate1", res.toLocaleDateString("en-US"));
      });

    this.reservationFormAppart2
      .get("dateAppart2")
      .valueChanges.subscribe(res => {
        localStorage.setItem("resDate2", res.toLocaleDateString("en-US"));
      });
  }

  ngOnInit() {}

  logout() {
    this._service.logout().subscribe(
      data => {
        console.log(data);
        this._router.navigate(["/login"]);
      },
      err => {
        console.log(err);
      }
    );
  }

  showFirstNo() {
    if (confirm("Are you sure you want to rent?")) {
      this.firstAppartNumber = true;
      this.minDate1 = new Date(localStorage.getItem("resDate1"));
      this.resDateAppart1 = localStorage.getItem("resDate1");
    }
  }

  showSecondNo() {
    if (confirm("Are you sure you want to rent?")) {
      this.secondtAppartNumber = true;
      this.resDateAppart2 = localStorage.getItem("resDate2");
    }
  }

  checkAvailabilityAppart1() {
    if (localStorage.getItem("resDate1") === null) {
      return true;
    }
  }

  checkAvailabilityAppart2() {
    if (localStorage.getItem("resDate2") === null) {
      return true;
    }
  }

  addName(data) {
    this.username = data.body.username;
  }

  pressRent() {
    this.resDateAppart1 = "Press Rent Please ...";
  }

  pressRent2() {
    this.resDateAppart2 = "Press Rent Please ...";
  }
}
