import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys_html } from '../model/hys_html';

@Injectable({
  providedIn: 'root'
})
export class Shys_htmlService {
  hysURL = 'http://localhost:8080/porc_html/'; 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys_html[]>{
    return this.httpClient.get<hys_html[]>(this.hysURL + 'lista_porcentual'); // sin la primer backlash se la quite, este era el problema de no levantar la lista de la bd
  }

  public detail(id: number): Observable<hys_html>{
    return this.httpClient.get<hys_html>(this.hysURL + `detail/${id}`);
  } 

  public save(hys_html1: hys_html): Observable<any>{
    return this.httpClient.post<any>(this.hysURL + 'create', hys_html1);
  }

  public update(id: number, hys_html1: hys_html): Observable<any>{
    return this.httpClient.put<any>(this.hysURL + `update/${id}`, hys_html1);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.hysURL + `delete/${id}`);
  }
}
