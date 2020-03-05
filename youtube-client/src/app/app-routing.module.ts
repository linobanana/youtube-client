import { DetailedInformationComponent }
from './youtube/pages/detailed-information/detailed-information.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';
import { NotFoundComponent } from './youtube/pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: MainPageComponent, canActivate: [AuthGuard]},
  { path: 'video/:id', component: DetailedInformationComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
