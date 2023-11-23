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
  tid:any
  str:any
  editForm:any

  constructor(private fb:FormBuilder, private service:IplService,private route:Router,private ar:ActivatedRoute) {
    
    
    this.tid=this.ar.snapshot.paramMap.get('id')
    this.str=this.ar.snapshot.paramMap.get('name')
    this.teamdata.TeamId=Number(this.tid)
    this.teamdata.Name=String(this.str)

    this.ar.paramMap.subscribe(result=>{
      result.get('id');
       result.get('name');
     })
     this.editForm=this.fb.group({
      TeamId:[this.tid],
      Name:[this.str]
     })
   }
   

  

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
