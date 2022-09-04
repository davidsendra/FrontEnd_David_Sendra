import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys_redes } from '../model/hys_redes';

@Injectable({
  providedIn: 'root'
})
export class Shys_redesService {
  redesURL = 'https://backdavidsendra.herokuapp.com/porc_redes/'; 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys_redes[]>{
    return this.httpClient.get<hys_redes[]>(this.redesURL + 'lista_porcentual'); // sin la primer backlash se la quite, este era el problema de no levantar la lista de la bd
  }

  public detail(id: number): Observable<hys_redes>{
    return this.httpClient.get<hys_redes>(this.redesURL + `detail/${id}`);
  } 

  public save(hys_redes1: hys_redes): Observable<any>{
    return this.httpClient.post<any>(this.redesURL + 'create', hys_redes1);
  }

  public update(id: number, hys_redes1: hys_redes): Observable<any>{
    return this.httpClient.put<any>(this.redesURL + `update/${id}`, hys_redes1);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.redesURL + `delete/${id}`);
  }
}
