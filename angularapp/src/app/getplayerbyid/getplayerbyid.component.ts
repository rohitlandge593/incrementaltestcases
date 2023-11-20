import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { IPlayer } from '../Model/iplayer';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-getplayerbyid',
  templateUrl: './getplayerbyid.component.html',
  styleUrls: ['./getplayerbyid.component.css']
})
export class GetplayerbyidComponent implements OnInit {

  playerdata:object ={};
  
  id:any
  isReady = false;
 
  constructor(private service:IplService, private ar:ActivatedRoute) { }
  getPlayerDetails(playerform:NgForm):void{
    // const pid=this.ar.snapshot.paramMap.get('id')
    // this.id=Number(pid)
    this.id=playerform.controls['id'].value;
    this.service.getPlayerById(this.id).subscribe(data=>{
      this.playerdata=data; 
      this.isReady= true;
      console.log(this.playerdata);
    })
  }
  


  ngOnInit(): void {
  }

}


    