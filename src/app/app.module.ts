import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MusicComponent } from './music/music.component';
import { MusicListComponent } from './music-list/music-list.component';
import { LibrairyComponent } from './librairy/librairy.component';
import { FormsModule } from '@angular/forms';
import { SerachComponent } from './serach/serach.component'; 
import { AppConfigModule } from './app-config/app-config.module';
import { HttpClientModule } from '@angular/common/http';
import { ItuneService } from 'src/shared/itune-service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MusicComponent,
    MusicListComponent,
    LibrairyComponent,
    SerachComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppConfigModule,
    HttpClientModule 
    
  ],
  providers: [
    ItuneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
