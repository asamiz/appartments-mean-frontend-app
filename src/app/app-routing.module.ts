import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApartmentsComponent } from "../app/components/apartments/apartments.component";
import { HomeComponent } from "../app/components/home/home.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { LoginComponent } from "../app/components/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "appartments",
    component: ApartmentsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
