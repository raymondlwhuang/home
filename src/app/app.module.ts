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
    FrequentUsedjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeferLoadModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
