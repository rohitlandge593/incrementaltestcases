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

  playerdata:IPlayer ={Id:0,Name:'',Age:0,TeamId:0,Category:'',BiddingPrice:0};
  
  id:any
  isReady = false;
 
  constructor(private service:IplService, private ar:ActivatedRoute) { }

  getPlayerDetails(p:IPlayer){
    
   // this.id=playerform.controls['id'].value;
    this.service.getPlayerById(p.Id).subscribe(data=>{
      this.playerdata=data; 
      this.isReady= true;
      console.log(this.playerdata);
    })
  }
  


  ngOnInit(): void {
  }

}


    