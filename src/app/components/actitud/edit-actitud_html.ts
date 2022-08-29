import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys_actitud } from 'src/app/model/hys_actitud';
import { Shys_actitudService } from 'src/app/service/actitud_html.service';

@Component({
  selector: 'app-edit-actitud_html',   
  templateUrl: './edit-actitud_html.html',
  styleUrls: ['./edit-actitud_html.css']
})
export class EditactitudComponent implements OnInit {
  Porc_actitud: hys_actitud = null;

  constructor(private shys_actitud:Shys_actitudService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_actitud.detail(id).subscribe(
      data =>{
        this. Porc_actitud = data;
      },
     
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_actitud.update(id, this.Porc_actitud).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar porcentuale");
         this.router.navigate(['']);
      }
    )
  }

}