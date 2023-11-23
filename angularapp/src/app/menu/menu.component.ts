import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   imgUrl:string='/home/coder/project/workspace/angularapp/src/assets/ipl.jpg'
  constructor() { }

  ngOnInit(): void {
  }


}
