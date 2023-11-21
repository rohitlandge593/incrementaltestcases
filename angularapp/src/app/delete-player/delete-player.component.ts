import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Router } from '@angular/router';
import { IPlayer } from '../Model/iplayer';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.css']
})
export class DeletePlayerComponent implements OnInit {

  constructor(private service:IplService,private route:Router) { }

  playerdata:IPlayer={Id:0,Age:0,Name:'',TeamId:0,Category:'',BiddingPrice:0}
  isReady=false;
  id:number;

  deletePlayer(p:IPlayer)
  {
    this.service.getPlayerById(this.id).subscribe((data:IPlayer)=>{this.playerdata=data});
    this.isReady=true;
  }

  deletePlayerData(player:IPlayer)
  {
    this.service.deletePlayer(this.id,player).subscribe(()=>{
      alert("Record deleted")
      this.route.navigate(['/getplayers'])
    })
  }

  ngOnInit(): void {
  }

}
