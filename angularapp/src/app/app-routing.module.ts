import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetPlayerComponent } from './get-player/get-player.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { GetplayerbyidComponent } from './getplayerbyid/getplayerbyid.component';
import { PutplayerComponent } from './putplayer/putplayer.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { GetTeamsComponent } from './get-teams/get-teams.component';
import { AddteamsComponent } from './addteams/addteams.component';
import { EditteamsComponent } from './editteams/editteams.component';

const routes: Routes = [
  {path:'getplayers', component:GetPlayerComponent},
  {path:'addplayers', component:AddplayerComponent},
  {path:'find/:id', component:GetplayerbyidComponent},
  {path:'editplayer/:id', component:PutplayerComponent},
  {path:'deleteplayer/:id', component:DeletePlayerComponent},
  {path:'getTeams', component:GetTeamsComponent},
  {path:'addTeams', component:AddteamsComponent},
  {path:'editTeams', component:EditteamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
