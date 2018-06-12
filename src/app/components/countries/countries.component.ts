import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html'
})
export class CountriesComponent implements OnInit {

  countries: any[] = [];

  constructor( private http: HttpClient ) {
    console.log('llamada');
    this.http.get('http://restcountries.eu/rest/v1/region/europe')
      .subscribe( (resp: any) => {
          this.countries = resp;
      })
  }

  ngOnInit() {
  }

}
