import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys_tjava } from 'src/app/model/hys_tjava';
import { Shys_tjavaService } from 'src/app/service/tjava_html.service';

@Component({
  selector: 'app-edit-tjava_html',   
  templateUrl: './edit-tjava_html.html',
  styleUrls: ['./edit-tjava_html.css']
})
export class HysediciontjavaComponent implements OnInit {
  Porc_tjava: hys_tjava = null;

  constructor(private shys_tjava:Shys_tjavaService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_tjava.detail(id).subscribe(
      data =>{
        this. Porc_tjava = data;
      },
       
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_tjava.update(id, this.Porc_tjava).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar porcentuale");
         this.router.navigate(['']);
      }
    )
  }

}