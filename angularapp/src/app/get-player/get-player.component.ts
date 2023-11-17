import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';

@Component({
  selector: 'app-get-player',
  templateUrl: './get-player.component.html',
  styleUrls: ['./get-player.component.css']
})
export class GetPlayerComponent implements OnInit {
  playerdata:any[]=[]
  constructor(private service:IplService) {
    //
    this.playerdata[0] = this.service.getAllPlayers()
    //this.service.getAllPlayers().subscribe(data=>{this.playerdata.push(...data)})
    console.log(this.playerdata[0]);
   }

  ngOnInit(): void {
  }

}
