import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { NsasTaskDto } from '../models/NsasTask/nsasTaskDto';
import { Observable, filter } from 'rxjs';
import { NsasTaskFilters } from '../models/NsasTask/nsasTaskFilters';

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
  filterNsasTasks(filters: NsasTaskFilters): Observable<NsasTaskDto[]>{

    return this.httpClient.get<NsasTaskDto[]>(`${this.baseUrl}filterNsasTasks?stringfilters=${filters.stringfilters}&status=${filters.status}`);
  }

  getAllNsasTasks(){
    return this.httpClient.get<NsasTaskDto[]>(`${this.baseUrl}getAllNsasTasks`);
  }
}
