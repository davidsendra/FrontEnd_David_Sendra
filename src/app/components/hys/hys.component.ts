
//import { Component, OnInit } from '@angular/core';
import { hys_html } from 'src/app/model/hys_html';

import { Shys_htmlService } from 'src/app/service/hys_html.service';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit} from '@angular/core';
import { CircleProgressComponent } from 'ng-circle-progress';
//import { Pipe, PipeTransform } from '@angular/core';
//import { EditHysComponent } from './edit-hys_html';
//import { EditeducacionComponent } from '../educacion/editeducacion.component';


 @Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css'],
  

})










export class HysComponent implements OnInit {
  hys: hys_html[] = [];
  
  








 

  constructor(private  shys_html: Shys_htmlService, private tokenService: TokenService ) { }






isLogged = false;
















  ngOnInit(): void {
    this.cargarHys_htmla();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  
  

}








  cargarHys_htmla(): void {
    this.shys_html.lista().subscribe(data => { this.hys = data; })
  }



  }
