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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CssComponent } from './css/css.component';
import { JqueryComponent } from './jquery/jquery.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PreShowComponent } from './pre-show/pre-show.component';

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
    CssComponent,
    JqueryComponent,
    MainNavComponent,
    RxjsComponent,
    PreShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DeferLoadModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {provide: APP_BASE_HREF, useValue: ''},

    // provider used to create fake backend
    fakeBackendProvider    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
