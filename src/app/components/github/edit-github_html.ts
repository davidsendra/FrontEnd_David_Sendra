import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { hys_github } from 'src/app/model/hys_github';
import { hys_html } from 'src/app/model/hys_html';
import { Shys_githubService } from 'src/app/service/github_html.service';

@Component({
  selector: 'app-edit-github_html',
  templateUrl: './edit-github_html.html',
  styleUrls: ['./edit-github_html.css']
})
export class EditgithubComponent implements OnInit {
  Porc_github: hys_github = null;

  constructor(private shys_github:Shys_githubService , private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_github.detail(id).subscribe(
      data =>{
        this.Porc_github = data;
      }, err =>{
        alert("Error al modificar porcentual");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.shys_github.update(id, this.Porc_github).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar porcentuale");
         this.router.navigate(['']);
      }
    )
  }

}