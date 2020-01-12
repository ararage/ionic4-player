import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate
} from "@angular/router";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root"
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}
  async canActivate() {
    const isIntoShowed = await this.storage.get("isIntroShowed");
    if (isIntoShowed) {
      return true;
    } else {
      this.router.navigateByUrl("/intro");
    }
    return false;
  }
}
