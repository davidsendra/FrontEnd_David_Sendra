
import { hys_tjava } from 'src/app/model/hys_tjava';
import { Shys_tjavaService } from 'src/app/service/tjava_html.service';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit} from '@angular/core';


 @Component({
  selector: 'app-tjava', 
  templateUrl: './tjava.component.html',
  styleUrls: ['./tjava.component.css'],
  

})


export class HystjavaComponent implements OnInit {
  tjava: hys_tjava[] = [];
  
  


  constructor(private  shys_tjava: Shys_tjavaService, private tokenService: TokenService ) { }


isLogged = false;



  ngOnInit(): void {
    this.cargarHys_tjavaa();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }



}

  cargarHys_tjavaa(): void {
    this.shys_tjava.lista().subscribe(data => { this.tjava = data; })
  }

 

  }

