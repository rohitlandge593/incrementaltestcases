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
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { GetTeamsComponent } from './get-teams/get-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPlayerComponent,
    MenuComponent,
    AddplayerComponent,
    PutplayerComponent,
    GetplayerbyidComponent,
    DeletePlayerComponent,
    GetTeamsComponent,
    
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
