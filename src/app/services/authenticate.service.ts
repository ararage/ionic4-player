import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class AuthenticateService {
  constructor(private storage: Storage) {}

  loginUser(credential) {
    return new Promise(async (accept, reject) => {
      let user = await this.storage.get("user");
      if (user) {
        let password = atob(user.password) == credential.password;
        let email = user.email == credential.email;
        if (password && email) {
          accept("Login Correcto");
        }
        reject("Login Incorrecto");
      }
      reject("Usuario Invalido");
    });
  }

  registerUser(userData) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }
}
