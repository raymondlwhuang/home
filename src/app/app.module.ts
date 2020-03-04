import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentDetailComponent } from './employment-detail/employment-detail.component';
import { ArtComponent } from './art/art.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EducationComponent } from './education/education.component';
import { SkillsDemoComponent } from './skills-demo/skills-demo.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { MaterialModule } from './material/material.module';
import { FrequentUsedjsComponent } from './frequent-usedjs/frequent-usedjs.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FunctionComponent } from './function/function.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ReactiveFormsModule } from '@angular/forms';
import { CssComponent } from './css/css.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDetailComponent,
    ArtComponent,
    PortfolioComponent,
    SkillsDemoComponent,
    JavascriptComponent,
    FrequentUsedjsComponent,
    FunctionComponent,
    LoginComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeferLoadModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
