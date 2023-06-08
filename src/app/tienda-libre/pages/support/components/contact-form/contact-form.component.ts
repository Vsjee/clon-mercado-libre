import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { MatInputModule } from "@angular/material/input"
import { SnackbarService } from "src/app/services"

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent {
  form = new FormGroup({
    name: new FormControl("", [
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.required,
    ]),
    email: new FormControl("", [Validators.email, Validators.required]),
    subject: new FormControl("", [
      Validators.minLength(20),
      Validators.maxLength(400),
      Validators.required,
    ]),
  })

  constructor(private _snackbar: SnackbarService) {}

  submit() {
    if (!this.form.valid) {
      this._snackbar.openSnackBar("Error datos invalidos 😥.")
    } else {
      this._snackbar.openSnackBar("Se envio correctamente 😄.")
      this.form.controls.name.setValue("")
      this.form.controls.email.setValue("")
      this.form.controls.subject.setValue("")
    }
  }
}
