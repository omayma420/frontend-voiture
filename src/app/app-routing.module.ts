import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrairyComponent } from './librairy/librairy.component';
import { MusicComponent } from './music/music.component';
import { SerachComponent } from './serach/serach.component';

const routes: Routes = [
  {path: 'library',component:LibrairyComponent},
  {path: 'music/:musicId',component:MusicComponent},
  {path: 'search',component:SerachComponent},
  {path: '',redirectTo:'search',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
