import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country';


@Injectable({providedIn: 'root'})
export class CountriesService {

  constructor(private http: HttpClient ) { }

  private apiUrl: string = 'https://restcountries.com/v3.1'

  searchCountryByAlphaCode(code: string): Observable<Country | null>{
    const url =`${this.apiUrl}/alpha/${ code }`;
    return this.http.get<Country[]>( url )
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null),
      catchError(error => {
        return of(null)
      }));
  }


  searchByCapital(term: string): Observable<Country[]> {
    const url =`${this.apiUrl}/capital/${ term }`;
    return this.http
      .get<Country[]>(url)
      .pipe(
        // catchError(error => of([]));
        catchError(error => {
          // console.log(error);
          return of([])
        })
        );
  }
  searchByRegion(term: string): Observable<Country[]> {
    const url =`${this.apiUrl}/region/${ term }`;
    return this.http
      .get<Country[]>(url)
      .pipe(
        catchError(error => {
          return of([])
        })
        );
  }
  searchByCountry(term: string): Observable<Country[]> {
    const url =`${this.apiUrl}/name/${ term }`;
    return this.http
      .get<Country[]>(url)
      .pipe(
        catchError(error => {
          return of([])
        })
        );
  }
}
