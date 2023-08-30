import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  @Input()
  gameType = 'DIGITAL PS4';
  @Input()
  gamePrice = "R$ 399,99";

  @Input()
  title:string = "";

}
