import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hys_html} from 'src/app/model/hys_html';
import { Shys_htmlService } from 'src/app/service/hys_html.service';

@Component({
  selector: 'app-nueva-hys_html',
  templateUrl: './nueva-hys_html.html',
  styleUrls: ['./nueva-hys_html.css']
})

export class NuevoPorcentual implements OnInit {  // debe estar declarada en app.modules,.ts
  porcentualE : string = '';
  


  


  constructor(private shys_html: Shys_htmlService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hys = new hys_html (this.porcentualE); //faltaba el argumento dentro del ()si no da null en bd
    this.shys_html.save(hys).subscribe(
     data => {
       alert("porcentual cambiado");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}