import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetIssuesService {

  HostAPI = environment.HostAPI;
  BaseAPI = environment.BaseApi;

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${this.HostAPI}${this.BaseAPI}rails/rails/issues`);
  }
  getComments(id){
    return this.http.get(`https://api.github.com/repos/rails/rails/issues/${id}/comments`);
  }
}
