import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: [
    `img {
      width: 25px;
    }`
  ]
})
export class CountryTableComponent {

  // A travez @input se reciben los parametros de otros componentes
  @Input()
  public countries: Country[] = [];

}
