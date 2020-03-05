import { BorderColorDirective } from './directives/border-color.directive';
import { NumberConversionPipe } from './pipes/number-conversion-pipe.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
import { SearchItemComponent } from './components/search-item/search-item.component';

@NgModule({
  declarations: [
    SnackBarComponent,
    NumberConversionPipe,
    StatisticsComponent,
    SearchItemComponent,
    BorderColorDirective
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    SnackBarComponent,
    StatisticsComponent,
    SearchItemComponent,
    BorderColorDirective
  ]
})
export class SharedModule { }
