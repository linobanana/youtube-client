import { MatSnackBarModule, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [SnackBarComponent]
})
export class SharedModule { }
