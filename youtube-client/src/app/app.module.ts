import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { SearchFieldComponent } from './components/header/search-field/search-field.component';
import { NumberConversionPipe } from './pipes/number-conversion-pipe.pipe';
import { BorderColorDirective } from './directives/border-color.directive';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { CountOfViewsPipe } from './pipes/count-of-views.pipe';
import { FormsModule } from '@angular/forms';
import { WordFilteringPipe } from './pipes/word-filtering.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFieldComponent,
    SortPanelComponent,
    SearchResultsComponent,
    SearchItemComponent,
    NumberConversionPipe,
    BorderColorDirective,
    DateSortPipe,
    CountOfViewsPipe,
    WordFilteringPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
