import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameLabel:string = "";
  @Input()
  title:string = "Play it now!";
  @Input()

  gameCover:string = "";

  @Input()
  gameType = 'DIGITAL PS4';
  @Input()
  gamePrice = "R$ 399,99";
  
  
  
  constructor(){}
  ngOnInit(): void {

  }

}
