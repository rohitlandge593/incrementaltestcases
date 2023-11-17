import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';

@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
  age:number
  name:string
  teamId:number
  category:string
  biddingPrice:number

  constructor(private service:IplService) { }
  handleSave()
    {
        let data: object={age:this.age, name:this.name, departmentId:this.departmentId, designationId: this.designationId}
        console.log(this.service.addPlayers(data));
    }

  ngOnInit(): void {
  }

}
