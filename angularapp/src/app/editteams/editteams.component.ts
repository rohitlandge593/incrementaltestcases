import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../Model/iplayer';
import { IplService } from '../ipl.service';
import { Router } from '@angular/router';
import { ITeam } from '../Model/iteam';

@Component({
  selector: 'app-editteams',
  templateUrl: './editteams.component.html',
  styleUrls: ['./editteams.component.css']
})
export class EditteamsComponent implements OnInit {

  teamdata:ITeam
  id:number

  constructor(private service:IplService,private route:Router) { }

  editTeamData(team:ITeam)
  {
    this.teamdata=team
    this.service.editTeams(this.id,team).subscribe((data:ITeam)=>{this.teamdata=data})
  }

  ngOnInit(): void {
  }

}
