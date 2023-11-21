import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { ITeam } from '../Model/iteam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-teams',
  templateUrl: './get-teams.component.html',
  styleUrls: ['./get-teams.component.css']
})
export class GetTeamsComponent implements OnInit {

  teamdata:ITeam[]=[]

  constructor(private service:IplService,private route:Router) { 
    this.service.getTeams().subscribe(data=>this.teamdata.push(...data))
  }

  editData(id:number):void 
  {
    //console.log('Route'+id)
    this.route.navigate(['/editTeams/'+id])
  }

  deleteData(id:number):void 
  {
    this.route.navigate(['deleteTeams/'+id])
  }

  ngOnInit(): void {
  }

}
