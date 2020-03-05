import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './employment/employment.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';
import { SkillsDemoComponent } from './skills-demo/skills-demo.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { LoginComponent } from './login/login.component';
import { CssComponent } from './css/css.component';
import { AuthGuard } from './_helpers/auth.guard';
import { JqueryComponent } from './jquery/jquery.component';


const routes: Routes = [
  { path: '', component: EmploymentComponent},
  { path: 'home', component: EmploymentComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'others', component: EducationComponent },
  { path: 'CSS', component: CssComponent, canActivate: [AuthGuard] },
  //  { path: 'skills-demo', component: SkillsDemoComponent},
  { 
    path: 'demo', 
    component: SkillsDemoComponent,
    children: [
      { path: '', component: JavascriptComponent },
      { path: 'javaScript', component: JavascriptComponent },
    ]
  },  
  { path: 'demo/jQuery', component: JqueryComponent },
  { path: 'login', component: LoginComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
