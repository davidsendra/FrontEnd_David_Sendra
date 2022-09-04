import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys_actitud } from '../model/hys_actitud';

@Injectable({
  providedIn: 'root'
})
export class Shys_actitudService {
  actURL = 'https://backdavidsendra.herokuapp.com/porc_actitud/'; 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys_actitud[]>{
    return this.httpClient.get<hys_actitud[]>(this.actURL + 'lista_porcentual'); // sin la primer backlash se la quite, este era el problema de no levantar la lista de la bd
  }

  public detail(id: number): Observable<hys_actitud>{
    return this.httpClient.get<hys_actitud>(this.actURL + `detail/${id}`);
  } 

  public save(hys_actitud1: hys_actitud): Observable<any>{
    return this.httpClient.post<any>(this.actURL + 'create', hys_actitud1);
  }

  public update(id: number, hys_actitud1: hys_actitud): Observable<any>{
    return this.httpClient.put<any>(this.actURL + `update/${id}`, hys_actitud1);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.actURL + `delete/${id}`);
  }
}
