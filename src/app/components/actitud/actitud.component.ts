
//import { Component, OnInit } from '@angular/core';
import { hys_actitud } from 'src/app/model/hys_actitud';
import { Shys_actitudService } from 'src/app/service/actitud_html.service';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit, Input } from '@angular/core';
//import { CircleProgressComponent } from 'ng-circle-progress';

//import { EditHysComponent } from './edit-hys_html';


 @Component({
  selector: 'app-actitud', 
  templateUrl: './actitud.component.html',
  styleUrls: ['./actitud.component.css'],
  

})


export class HysactitudComponent implements OnInit {
  actitud: hys_actitud[] = [];
  
  


  constructor(private  shys_actitud: Shys_actitudService, private tokenService: TokenService ) { }


isLogged = false;



  ngOnInit(): void {
    this.cargarHys_actituda();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }



}

  cargarHys_actituda(): void {
    this.shys_actitud.lista().subscribe(data => { this.actitud = data; })
  }

 

  }

