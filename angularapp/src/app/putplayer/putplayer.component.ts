import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Router } from '@angular/router';
import { IPlayer } from '../Model/iplayer';

@Component({
  selector: 'app-putplayer',
  templateUrl: './putplayer.component.html',
  styleUrls: ['./putplayer.component.css']
})
export class PutplayerComponent implements OnInit {

  constructor(private service:IplService,private route:Router) { }

  playerdata:IPlayer
  id:number

  getPlayerById(id:number)
  {
    this.service.getPlayerById
  }

  ngOnInit(): void {
  }

}











// constructor(private ms:MovieserviceService,private route:Router,private ar:ActivatedRoute) { }
//   moviedata:IMovie
//   id:number
// getMovie(id:number)
// { 
//   this.ms.getMovie(id).subscribe((data:IMovie)=>this.moviedata=data)
// }

// EditData(movie :IMovie)
// {
//   this.moviedata=movie
//   this.ms.editMovie(this.moviedata).subscribe(()=>
//   {
//     alert('Edited')
//     this.route.navigate(['/listmovies'])
//   })
// }
//   ngOnInit()
//    {
//     const tid=this.ar.snapshot.paramMap.get('id')
//     this.id=Number(tid)
//     this.getMovie(this.id)
//   }

// }