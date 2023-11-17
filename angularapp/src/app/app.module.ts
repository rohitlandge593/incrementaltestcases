import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPlayerComponent } from './get-player/get-player.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { IplService } from './ipl.service';
import { FormsModule } from '@angular/forms';
import { PutplayerComponent } from './putplayer/putplayer.component';
import { GetplayerbyidComponent } from './getplayerbyid/getplayerbyid.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GetPlayerComponent,
    MenuComponent,
    AddplayerComponent,
    PutplayerComponent,
    GetplayerbyidComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [IplService],
  bootstrap: [AppComponent]
})
export class AppModule { }
