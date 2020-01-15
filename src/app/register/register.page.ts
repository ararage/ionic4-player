import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { AuthenticateService } from "../services/authenticate.service";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage {
  registerForm: FormGroup;

  validation_messages = {
    firstName: [
      { type: "required", message: "El nombre es requerido" },
      { type: "minlength", message: "Mínimo 2 letras para el Nombre" },
      { type: "maxlength", message: "Máximo 30 letras para el Nombre" }
    ],
    lastName: [
      { type: "required", message: "El apellido es requerido" },
      { type: "minlength", message: "Mínimo 2 letras para el Apellido" },
      { type: "maxlength", message: "Máximo 30 letras para el Apellido" }
    ],
    email: [
      { type: "required", message: "El email es requerido" },
      { type: "pattern", message: "Email inválido" }
    ],
    password: [
      { type: "required", message: "El password es requerido" },
      { type: "minlength", message: "Mínimo 5 letras para el password" }
    ]
  };
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ])
      ),
      lastName: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ])
      ),
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.minLength(5)])
      )
    });
  }

  registerUser(userData) {
    this.authService.registerUser(userData).then(() => {
      this.goToLogin();
    });
  }

  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }
}
