import { LoginService } from 'src/app/auth/services/login.service';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatOptionModule } from '@angular/material';
import { SearchFieldComponent } from './components/header/search-field/search-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, SearchFieldComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    HttpClientJsonpModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [LoginService]
})
export class CoreModule { }
