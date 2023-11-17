import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { IPlayer } from '../Model/iplayer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getplayerbyid',
  templateUrl: './getplayerbyid.component.html',
  styleUrls: ['./getplayerbyid.component.css']
})
export class GetplayerbyidComponent implements OnInit {

  playerdata:IPlayer
  id:number
  constructor(private service:IplService, private ar:ActivatedRoute) { }
  getPlayerDetails():void{
    // const pid=this.ar.snapshot.paramMap.get('id')
    // this.id=Number(pid)
    this.service.getPlayerById(this.id).subscribe(data=>{this.playerdata=data});
  }
  


  ngOnInit(): void {
  }

}


    