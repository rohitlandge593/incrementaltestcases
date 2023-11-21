import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPlayerComponent } from './get-player/get-player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { GetplayerbyidComponent } from './getplayerbyid/getplayerbyid.component';
import { PutplayerComponent } from './putplayer/putplayer.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';

const routes: Routes = [
  {path:'getplayers', component:GetPlayerComponent},
  {path:'addplayers', component:AddplayerComponent},
  {path:'find/:id', component:GetplayerbyidComponent},
  {path:'editplayer/:id', component:PutplayerComponent},
  {path:'deleteplayer/:id', component:DeletePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
