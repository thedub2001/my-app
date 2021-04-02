import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TourComponent } from './tour/tour.component';
import { UploadComponent } from './upload/upload.component';
import { TaradioComponent } from './taradio/taradio.component';
import { TestGridComponent } from './test-grid/test-grid.component';
import { TestTableComponent } from './test-table/test-table.component';
import { DashtestComponent } from './dashtest/dashtest.component';
import { EraseMeComponent } from './erase-me/erase-me.component';
import { TestDialogComponent } from './test-dialog/test-dialog.component';
import { TrackListComponent } from './track-list/track-list.component';


/*{ path: '', redirectTo: '/tour', pathMatch: 'full' },
*/const routes: Routes = [
  
  { path: 'tour', component: TourComponent,
  children: [
	  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component: DashboardComponent},
      {path: 'heroes', component: HeroesComponent},
    ]},
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'taradio', component: TaradioComponent },
  { path: 'testgrid', component: TestGridComponent },
  { path: 'dashtest', component: DashtestComponent },
  { path: 'dialogtest', component: TestDialogComponent },
  { path: 'tracklist', component: TestTableComponent },
  { path: 'erase', component: EraseMeComponent }
  

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}