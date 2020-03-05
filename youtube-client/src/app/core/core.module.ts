import { LoginService } from 'src/app/auth/services/login.service';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatButtonModule, MatInputModule } from '@angular/material';
import { SearchFieldComponent } from './components/header/search-field/search-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SearchFieldComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [LoginService]
})
export class CoreModule { }
