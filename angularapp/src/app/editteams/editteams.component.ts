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
    const str=this.ar.snapshot.paramMap.get('name')
    this.teamdata.TeamId=Number(i)
    this.teamdata.Name=String(str)
   }
   editForm=this.fb.group({
    TeamId:[this.teamdata],
    Name:['']
   })

   this.no=this.ar.snapshot.paramMap.get('id')
    this.na=this.ar.snapshot.paramMap.get('name')
    this.ar.paramMap.subscribe(result=>{
     result.get('id');
      result.get('name');
    })
    this.teamdata.TeamId=Number(this.no)
   
 
    this.deleteTeamForm=this.fb.group({
      TeamId:[this.no],
      Name:[this.na]
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
