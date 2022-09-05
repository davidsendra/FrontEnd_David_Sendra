
import { hys_jscript } from 'src/app/model/hys_jscript';
import { Shys_jscriptService } from 'src/app/service/jscript_html.service';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit } from '@angular/core';


 @Component({
  selector: 'app-jscript', 
  templateUrl: './jscript.component.html',
  styleUrls: ['./jscript.component.css'],
  

})


export class HysjscriptComponent implements OnInit {
  jscript: hys_jscript[] = [];
  
  


  constructor(private  shys_jscript: Shys_jscriptService, private tokenService: TokenService ) { }


isLogged = false;



  ngOnInit(): void {
    this.cargarHys_jscripta();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }



}

  cargarHys_jscripta(): void {
    this.shys_jscript.lista().subscribe(data => { this.jscript = data; })
  }

 

  }

