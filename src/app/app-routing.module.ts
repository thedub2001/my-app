import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TourComponent } from './tour/tour.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: '', redirectTo: '/tour', pathMatch: 'full' },
  { path: 'tour', component: TourComponent,
  children: [
	  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'heroes', component: HeroesComponent},
    ]},
  { path: 'upload', component: UploadComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes1', component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}