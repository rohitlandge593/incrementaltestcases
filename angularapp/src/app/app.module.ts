import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPlayerComponent } from './get-player/get-player.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { IplService } from './ipl.service';

@NgModule({
  declarations: [
    AppComponent,
    GetPlayerComponent,
    MenuComponent,
    AddplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [IplService],
  bootstrap: [AppComponent]
})
export class AppModule { }
