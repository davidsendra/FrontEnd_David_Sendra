import { hys_github } from 'src/app/model/hys_github';
import { Shys_githubService } from 'src/app/service/github_html.service';
import { TokenService } from 'src/app/service/token.service';
import { Component, OnInit} from '@angular/core';
//import { CircleProgressComponent } from 'ng-circle-progress';


 @Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  

})


export class HysgithubComponent implements OnInit {
  github: hys_github[] = [];
  

  constructor(private  shys_github: Shys_githubService, private tokenService: TokenService ) { }


isLogged = false;


  ngOnInit(): void {
    this.cargarHys_githuba();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
}

  cargarHys_githuba(): void {
    this.shys_github.lista().subscribe(data => { this.github = data; })
  }

  }
