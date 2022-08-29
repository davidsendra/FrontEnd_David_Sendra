import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditHysComponent } from './components/hys/edit-hys_html';
import { HysedicionredesComponent} from  './components/redes/edit-redes_html';
import { EditgithubComponent } from  './components/github/edit-github_html';
import { EditactitudComponent } from  './components/actitud/edit-actitud_html';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'edithys/:id', component: EditHysComponent},    // lo agregue manualmente 
  { path: 'editredes/:id', component: HysedicionredesComponent},
  { path: 'editgithub/:id', component: EditgithubComponent},
  { path: 'editactitud/:id', component: EditactitudComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


