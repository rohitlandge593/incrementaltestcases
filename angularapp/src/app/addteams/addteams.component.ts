import { Component, OnInit } from '@angular/core';
import { ITeam } from '../Model/iteam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addteams',
  templateUrl: './addteams.component.html',
  styleUrls: ['./addteams.component.css']
})
export class AddteamsComponent implements OnInit {

  teamdata:ITeam

  constructor(private service:ITeam,private route:Router) { }

  addTeamData(team:ITeam)
  {
    this.service.
  }
  
  ngOnInit(): void {
  }

}
