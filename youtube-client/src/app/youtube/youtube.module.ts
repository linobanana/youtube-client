import { SharedModule } from './../shared/shared.module';
import { WordFilteringPipe } from './pipes/word-filtering.pipe';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { CountOfViewsPipe } from './pipes/count-of-views.pipe';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { YoutubeService } from './services/youtube.service';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchResultsComponent,
    SortPanelComponent,
    CountOfViewsPipe,
    DateSortPipe,
    WordFilteringPipe,
    DetailedInformationComponent,
    MainPageComponent,
    DateSortPipe,
    WordFilteringPipe,
    CountOfViewsPipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    NotFoundComponent,
    SearchResultsComponent,
    SortPanelComponent,
    MainPageComponent,
    DetailedInformationComponent
  ],
  providers: [YoutubeService]
})
export class YoutubeModule { }
