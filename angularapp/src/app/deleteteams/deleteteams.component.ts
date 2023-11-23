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
  deleteForm:any
  tid:any
  str:any

  constructor(private fb:FormBuilder, private service:IplService,private route:Router,private ar:ActivatedRoute) {
    this.tid=this.ar.snapshot.paramMap.get('id')
    this.str=this.ar.snapshot.paramMap.get('name')
    this.teamdata.TeamId=Number(this.tid)
    this.teamdata.Name=String(this.str)

    this.ar.paramMap.subscribe(result=>{
      result.get('id');
       result.get('name');
     })
     this.deleteForm=this.fb.group({
      TeamId:[this.tid],
      Name:[this.str]
     })
   }
   

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
