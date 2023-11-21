import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../Model/iplayer';
import { IplService } from '../ipl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeam } from '../Model/iteam';

@Component({
  selector: 'app-editteams',
  templateUrl: './editteams.component.html',
  styleUrls: ['./editteams.component.css']
})
export class EditteamsComponent implements OnInit {

  teamdata:ITeam={TeamId:0,Name:''}
  tid:number

  constructor(private service:IplService,private route:Router,private ar:ActivatedRoute) {
    const i=this.ar.snapshot.paramMap.get('id')
    this.teamdata.TeamId=Number(i)
   }

  editTeamData(team:ITeam)
  {
    this.teamdata=team
    this.service.editTeams(this.teamdata.TeamId,team).subscribe(()=>{
      alert("Record Edited")
      this.route.navigate(['/getTeams'])
    })
  }

  ngOnInit(): void {
  }

}
