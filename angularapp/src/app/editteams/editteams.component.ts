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

  teamdata:ITeam={TeamId:0,Name:''}
  TeamId:number

  constructor(private service:IplService,private route:Router) { }

  editTeamData(team:ITeam)
  {
    this.teamdata=team
    this.service.editTeams(this.TeamId,team).subscribe(()=>{
      alert("Record Edited")
      this.route.navigate(['/getTeams'])
    })
  }

  ngOnInit(): void {
  }

}
