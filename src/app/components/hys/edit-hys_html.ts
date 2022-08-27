import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys_html } from 'src/app/model/hys_html';
import { Shys_htmlService } from 'src/app/service/hys_html.service';

@Component({
  selector: 'app-edit-ehys_html',
  templateUrl: './edit-hys_html.html',
  styleUrls: ['./edit-hys_html.css']
})
export class EditHysComponent implements OnInit {
  Porc_html: hys_html = null;

  constructor(private shys_html:Shys_htmlService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_html.detail(id).subscribe(
      data =>{
        this.Porc_html = data;
      }, err =>{
        alert("Error al modificar porcentual");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_html.update(id, this.Porc_html).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar porcentuale");
         this.router.navigate(['']);
      }
    )
  }

}