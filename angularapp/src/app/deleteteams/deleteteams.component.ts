import { Component, OnInit } from '@angular/core';
import { ITeam } from '../Model/iteam';
import { IplService } from '../ipl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deleteteams',
  templateUrl: './deleteteams.component.html',
  styleUrls: ['./deleteteams.component.css']
})
export class DeleteteamsComponent implements OnInit {

  teamdata:ITeam={TeamId:0,Name:''}

  constructor(private fb:FormBuilder, private service:IplService,private route:Router,private ar:ActivatedRoute) {
    const no=this.ar.snapshot.paramMap.get('id')
    this.teamdata.TeamId=Number(no)
   }
   deleteTeamForm=this.fb.group({
    TeamId:[''],
    Name:['']
   })

  deleteData(team:ITeam)
  {
    this.service.deleteTeams(this.teamdata.TeamId).subscribe(()=>{
      alert('Record Deleted')
      this.route.navigate(['/getTeams'])
    })
  }

  ngOnInit(): void {
  }

}
