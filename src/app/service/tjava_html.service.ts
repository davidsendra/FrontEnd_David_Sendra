import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys_tjava } from '../model/hys_tjava';

@Injectable({
  providedIn: 'root'
})
export class Shys_tjavaService {
  tjavaURL = 'https://backdavidsendra.herokuapp.com/porc_tjava/'; 
  //tjavaURL = 'http://localhost:8080/porc_tjava/'; 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys_tjava[]>{
    return this.httpClient.get<hys_tjava[]>(this.tjavaURL + 'lista_porcentual'); // sin la primer backlash se la quite, este era el problema de no levantar la lista de la bd
  }

  public detail(id: number): Observable<hys_tjava>{
    return this.httpClient.get<hys_tjava>(this.tjavaURL + `detail/${id}`);
  } 

  public save(hys_tjava1: hys_tjava): Observable<any>{
    return this.httpClient.post<any>(this.tjavaURL + 'create', hys_tjava1);
  }

  public update(id: number, hys_tjava1: hys_tjava): Observable<any>{
    return this.httpClient.put<any>(this.tjavaURL + `update/${id}`, hys_tjava1);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.tjavaURL + `delete/${id}`);
  }
}
