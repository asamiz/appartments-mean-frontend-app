import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  register(body: any) {
    return this._http.post("http://127.0.0.1:3000/users/register", body, {
      observe: "response" as "body",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  login(body: any) {
    return this._http.post("http://127.0.0.1:3000/users/login", body, {
      observe: "response",
      withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  appartments() {
    return this._http.get("http://127.0.0.1:3000/users/appartments", {
      observe: "response" as "body",
      withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }

  logout() {
    return this._http.get("http://127.0.0.1:3000/users/logout", {
      observe: "response" as "body",
      withCredentials: true,
      headers: new HttpHeaders().append("Content-Type", "application/json")
    });
  }
}
