import { Injectable } from '@angular/core';
import { CountryModel } from '../models/country/country.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl = environment.apiUrl + 'Countries/';
  constructor(private httpClient: HttpClient
    //, private routerHelper: RouterHelper
    ) { }
  // getAll(): Observable<CountryModel[]> {
  //   return this.httpClient.get<CountryModel[]>(`${this.baseUrl}GetCountries`);
  // }
}
