import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hys_jscript } from '../model/hys_jscript';

@Injectable({
  providedIn: 'root'
})
export class Shys_jscriptService {
  jscriptURL = 'https://backdavidsendra.herokuapp.com/porc_jscript/'; 
  //jscriptURL = 'http://localhost:8080/porc_jscript/'; 

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<hys_jscript[]>{
    return this.httpClient.get<hys_jscript[]>(this.jscriptURL + 'lista_porcentual'); // sin la primer backlash se la quite, este era el problema de no levantar la lista de la bd
  }

  public detail(id: number): Observable<hys_jscript>{
    return this.httpClient.get<hys_jscript>(this.jscriptURL + `detail/${id}`);
  } 

  public save(hys_jscript1: hys_jscript): Observable<any>{
    return this.httpClient.post<any>(this.jscriptURL + 'create', hys_jscript1);
  }

  public update(id: number, hys_jscript1: hys_jscript): Observable<any>{
    return this.httpClient.put<any>(this.jscriptURL + `update/${id}`, hys_jscript1);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.jscriptURL + `delete/${id}`);
  }
}
