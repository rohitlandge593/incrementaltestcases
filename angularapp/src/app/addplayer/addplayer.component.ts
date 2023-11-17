import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Router } from '@angular/router';
import { IPlayer } from '../Model/iplayer';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  playerdata:IPlayer={Id:0,Age:0,Name:"",TeamId:0,Category:"",BiddingPrice:0}
  constructor(private service:IplService, private route:Router) { }
  saveData(player:IPlayer):void
    {

        this.playerdata=player
        this.service.addPlayers(this.playerdata).subscribe(()=>
        {
          alert('Record Added')
          this.route.navigate(['/getplayers'])
      })
    }


  ngOnInit(): void {
  }

}
