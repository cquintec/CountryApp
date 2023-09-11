import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  //Inyectar el servicio
  constructor(private countriesService: CountriesService){}

  //Para usar el Observable se debe suscribir si no, no funca
  searchByCapital(term: string):void {
    this.countriesService.searchByCapital(term)
    .subscribe( countries => {
      this.countries = countries;
    } );
  }
}