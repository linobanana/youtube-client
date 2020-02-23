import { GlobalService } from './services/global.service';
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
  exports: [HeaderComponent, SearchFieldComponent],
  providers: [GlobalService]
})
export class CoreModule { }
