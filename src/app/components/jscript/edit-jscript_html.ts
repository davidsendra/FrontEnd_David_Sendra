import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys_jscript } from 'src/app/model/hys_jscript';
import { Shys_jscriptService } from 'src/app/service/jscript_html.service';

@Component({
  selector: 'app-edit-jscript_html',   
  templateUrl: './edit-jscript_html.html',
  styleUrls: ['./edit-jscript_html.css']
})
export class HysedicionjscriptComponent implements OnInit {
  Porc_jscript: hys_jscript = null;

  constructor(private shys_jscript:Shys_jscriptService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_jscript.detail(id).subscribe(
      data =>{
        this. Porc_jscript = data;
      },// err =>{
        //alert("Error al modificar porcentuage");
      //  this.router.navigate(['']);
      //}
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_jscript.update(id, this.Porc_jscript).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar porcentuale");
         this.router.navigate(['']);
      }
    )
  }

}