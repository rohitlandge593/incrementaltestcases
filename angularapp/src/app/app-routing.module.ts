import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPlayerComponent } from './get-player/get-player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { GetplayerbyidComponent } from './getplayerbyid/getplayerbyid.component';
import { PutplayerComponent } from './putplayer/putplayer.component';

const routes: Routes = [
  {path:'getplayers', component:GetPlayerComponent},
  {path:'addplayers', component:AddplayerComponent},
  {path:'find/:id', component:GetplayerbyidComponent},
  {path:'editplayer', component:PutplayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
