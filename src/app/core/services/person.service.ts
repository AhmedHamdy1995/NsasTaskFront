import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  baseUrl = environment.apiUrl + 'Persons/';
  constructor(private httpClient: HttpClient) { }

  // addPerson(person: PersonModel){
  //   return this.httpClient.post(`${this.baseUrl}AddPerson`, person);
  // }
  // editPerson(person: PersonModel){
  //   return this.httpClient.put(`${this.baseUrl}EditPerson`, person);
  // }
  // deletePerson(id:number){
  //   return this.httpClient.delete(`${this.baseUrl}DeletePerson/${id}`);
  // }
  // getPersonById(id:number){
  //   return this.httpClient.get(`${this.baseUrl}GetPerson/${id}`);
  // }
  // filterPersons(countryId?: number){

  //   return this.httpClient.post<PersonModel[]>(`${this.baseUrl}FilterPerson`, countryId);
  // }
}
