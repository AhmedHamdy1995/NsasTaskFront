import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { NsasTaskDto } from '../models/NsasTask/nsasTaskDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NsasTaskService {
  baseUrl = environment.apiUrl + 'NsasTask/';
  constructor(private httpClient: HttpClient) { }

  addNsasTask(NsasTask: NsasTaskDto){
    return this.httpClient.post(this.baseUrl + 'CreateNsasTask', NsasTask);
  }
  editNsasTask(NsasTask: NsasTaskDto){
    return this.httpClient.put(`${this.baseUrl}updateNsasTask`, NsasTask);
  }
  deleteNsasTask(id:number){
    return this.httpClient.delete(`${this.baseUrl}DeleteNsasTask/${id}`);
  }
  getNsasTaskById(id:number): Observable<NsasTaskDto>{
    return this.httpClient.get<NsasTaskDto>(`${this.baseUrl}GetNsasTask/${id}`);
  }
  // filterNsasTasks(countryId?: number){

  //   return this.httpClient.post<NsasTaskDto[]>(`${this.baseUrl}FilterNsasTask`, countryId);
  // }

  filterNsasTasks(){
    return this.httpClient.get<NsasTaskDto[]>(`${this.baseUrl}getAllNsasTasks`);
  }
}
