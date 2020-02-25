import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { SnackBarComponent } from './../shared/components/snack-bar/snack-bar.component';
import { LoginService } from './services/login.service';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    AuthRoutingModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [LoginService],
  entryComponents: [
    SnackBarComponent
  ]
})
export class AuthModule { }
