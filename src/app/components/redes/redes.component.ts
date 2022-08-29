
//import { Component, OnInit } from '@angular/core';
import { hys_redes } from 'src/app/model/hys_redes';
import { Shys_redesService } from 'src/app/service/redes_html.service';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit, Input } from '@angular/core';
//import { CircleProgressComponent } from 'ng-circle-progress';

//import { EditHysComponent } from './edit-hys_html';


 @Component({
  selector: 'app-redes', 
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'],
  

})


export class HysredesComponent implements OnInit {
  redes: hys_redes[] = [];
  
  


  constructor(private  shys_redes: Shys_redesService, private tokenService: TokenService ) { }


isLogged = false;



  ngOnInit(): void {
    this.cargarHys_redesa();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }



}

  cargarHys_redesa(): void {
    this.shys_redes.lista().subscribe(data => { this.redes = data; })
  }

 

  }

