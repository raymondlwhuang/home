import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmploymentComponent } from './employment/employment.component';
import { AuthGuard } from './_helpers/auth.guard';
import { EducationComponent } from './employment/education/education.component';
import { JavascriptComponent } from './skills-demo/javascript/javascript.component';
import { JqueryComponent } from './skills-demo/jquery/jquery.component';
import { PortfolioComponent } from './employment/portfolio/portfolio.component';
import { PreShowComponent } from './skills-demo/pre-show/pre-show.component';
import { LoginComponent } from './skills-demo/login/login.component';
import { DecoratorsComponent } from './skills-demo/Angular/decorators/decorators.component';


const routes: Routes = [
  { path: '', component: EmploymentComponent},
  { path: 'home', component: EmploymentComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'others', component: EducationComponent },
  { path: 'Private', component: PreShowComponent, canActivate: [AuthGuard] },
  { path: 'demo/javaScript',component:  JavascriptComponent },
  { path: 'demo/jQuery', component: JqueryComponent },
  { path: 'demo/Angular', component: DecoratorsComponent },
  { path: 'login', component: LoginComponent },
    // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
