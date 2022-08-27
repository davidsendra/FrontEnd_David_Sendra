
import { Component, OnInit } from '@angular/core';
import { hys_html } from 'src/app/model/hys_html';
import { Shys_htmlService } from 'src/app/service/hys_html.service';
import { TokenService } from 'src/app/service/token.service';

 @Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css'],
  
})
export class HysComponent implements OnInit {
  hys: hys_html[] = [];
 // percent: number = porcel_h;
 //porcel_h:string = +edad ;
    
  


 

  constructor(private  shys_html: Shys_htmlService, private tokenService: TokenService ) { }

isLogged = false;

//public porcel_h : number ;
//porcentualE   = +porcel_h;
//kul = 1+1;

//public  porcentual_h = "";
//console.log(num2);



//ublic porcentual_numerico ;  // variBLE porcentual_html
//porcentualE = porcentual_numerico ;  // variBLE porcentual_html public porcentual_html = 50 ;  // variBLE porcentual_html
//public   porcentual_h= "";
//porcentualE = Number porcentual_h;
  //porcentuapublic porcentual_h : number = 100;

 //porcentual_html  = hys_html ;
//let stringAsNumber: string = 42;



  //Returns 759

  // let stringToConvert = "759";
 // numberValue = Number(stringToConvert);
 // hys_html.porcentualE





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

  delete(id?: number){
    if(id != undefined){
      this.shys_html.delete(id).subscribe(
        data => {
          this.cargarHys_htmla();
        }, err => {
          alert("No se pudo borrar el html");
        }
      )
    }
  }


  }

 
  //let persona1: Persona;
 // persona1 = new Persona( 99);
  //persona1.imprimir();

