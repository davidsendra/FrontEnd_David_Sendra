import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys_github } from '../model/hys_github';

@Injectable({
  providedIn: 'root'
})
export class Shys_githubService {
  gitURL = 'https://backdavidsendra.herokuapp.com/porc_github/'; 
  //gitURL = 'http://localhost:8080/porc_github/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys_github[]>{
    return this.httpClient.get<hys_github[]>(this.gitURL + 'lista_porcentual'); // sin la primer backlash se la quite, este era el problema de no levantar la lista de la bd
  }

  public detail(id: number): Observable<hys_github>{
    return this.httpClient.get<hys_github>(this.gitURL + `detail/${id}`);
  } 

  public save(hys_github1: hys_github): Observable<any>{
    return this.httpClient.post<any>(this.gitURL + 'create', hys_github1);
  }

  public update(id: number, hys_github1: hys_github): Observable<any>{
    return this.httpClient.put<any>(this.gitURL + `update/${id}`, hys_github1);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.gitURL + `delete/${id}`);
  }
}
