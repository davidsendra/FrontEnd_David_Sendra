import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys_redes } from 'src/app/model/hys_redes';
import { Shys_redesService } from 'src/app/service/redes_html.service';

@Component({
  selector: 'app-edit-redes_html',   
  templateUrl: './edit-redes_html.html',
  styleUrls: ['./edit-redes_html.css']
})
export class HysedicionredesComponent implements OnInit {
  Porc_redes: hys_redes = null;

  constructor(private shys_redes:Shys_redesService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_redes.detail(id).subscribe(
      data =>{
        this. Porc_redes = data;
      }, err =>{
        alert("Error al modificar porcentuage");
       this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_redes.update(id, this.Porc_redes).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar porcentuale");
         this.router.navigate(['']);
      }
    )
  }

}