import { Injectable } from "@angular/core"
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar"

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  //default snack position
  private horizontalPosition: MatSnackBarHorizontalPosition = "right"
  private verticalPosition: MatSnackBarVerticalPosition = "bottom"

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this._snackBar.open(message, "Cerrar", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2 * 1000,
    })
  }

  setHorizontalPosition(position: MatSnackBarHorizontalPosition) {
    this.horizontalPosition = position
  }

  setverticalPosition(position: MatSnackBarVerticalPosition) {
    this.verticalPosition = position
  }
}
