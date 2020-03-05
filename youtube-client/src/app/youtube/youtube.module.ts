import { LoaderService } from './services/loader.service';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { SharedModule } from './../shared/shared.module';
import { WordFilteringPipe } from './pipes/word-filtering.pipe';
import { DateSortPipe } from './pipes/date-sort.pipe';
import { CountOfViewsPipe } from './pipes/count-of-views.pipe';
import { SortPanelComponent } from './components/sort-panel/sort-panel.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { MatButtonModule, MatCardModule, MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { YoutubeService } from './services/youtube.service';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoaderComponent } from './components/loader/loader.component';
import { LoadInterceptor } from './interceptors/load.interceptor';
import { SnackBarComponent } from '../shared/components/snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SearchResultsComponent,
    SortPanelComponent,
    CountOfViewsPipe,
    DateSortPipe,
    WordFilteringPipe,
    MainPageComponent,
    DateSortPipe,
    WordFilteringPipe,
    CountOfViewsPipe,
    DetailedInformationComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    YoutubeService,
    LoaderService,
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
  ],
  exports: [
    LoaderComponent
  ],
  entryComponents: [
    SnackBarComponent
  ]
})
export class YoutubeModule { }
