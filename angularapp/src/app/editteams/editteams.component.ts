import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../Model/iplayer';
import { IplService } from '../ipl.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITeam } from '../Model/iteam';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editteams',
  templateUrl: './editteams.component.html',
  styleUrls: ['./editteams.component.css']
})
export class EditteamsComponent implements OnInit {

  teamdata:ITeam={TeamId:0,Name:''}
  tid:number

  constructor(private fb:FormBuilder, private service:IplService,private route:Router,private ar:ActivatedRoute) {
    
    
    const i=this.ar.snapshot.paramMap.get('id')
    this.teamdata.TeamId=Number(i)
   }
   editForm=this.fb.group({
    TeamId:[''],
    Name:['']
   })

  editTeamData()
  {
    this.teamdata=this.editForm.value
    this.service.editTeams(this.teamdata.TeamId,this.teamdata).subscribe(()=>{
      alert("Record Edited")
      this.route.navigate(['/getTeams'])
    })
  }

  ngOnInit(): void {
  }

}
