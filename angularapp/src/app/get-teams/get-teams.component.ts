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

  editData(id:number,name:string):void 
  {
    //console.log('Route'+id)
    this.route.navigate(['/editTeams/'+id+'/'+name])
  }

  deleteData(id:number,name:string):void 
  {
    this.route.navigate(['deleteTeams/'+id+'/'+name])
  }

  ngOnInit(): void {
  }

}
