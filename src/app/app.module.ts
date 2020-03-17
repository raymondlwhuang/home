import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmploymentComponent } from './employment/employment.component';
import { EmploymentDetailComponent } from './employment/employment-detail/employment-detail.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { ArtComponent } from './employment/art/art.component';
import { EducationComponent } from './employment/education/education.component';
import { JavascriptComponent } from './skills-demo/javascript/javascript.component';
import { FrequentUsedjsComponent } from './skills-demo/frequent-usedjs/frequent-usedjs.component';
import { FunctionComponent } from './skills-demo/function/function.component';
import { JqueryComponent } from './skills-demo/jquery/jquery.component';
import { PortfolioComponent } from './employment/portfolio/portfolio.component';
import { LoginComponent } from './skills-demo/login/login.component';
import { CssComponent } from './skills-demo/css/css.component';
import { RxjsComponent } from './skills-demo/rxjs/rxjs.component';
import { PreShowComponent } from './skills-demo/pre-show/pre-show.component';
import { DecoratorsComponent } from './skills-demo/decorators/decorators.component';
import { ChangeDetectionComponent } from './skills-demo/change-detection/change-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDetailComponent,
    ArtComponent,
    PortfolioComponent,
    JavascriptComponent,
    FrequentUsedjsComponent,
    FunctionComponent,
    LoginComponent,
    CssComponent,
    JqueryComponent,
    MainNavComponent,
    RxjsComponent,
    PreShowComponent,
    DecoratorsComponent,
    ChangeDetectionComponent
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
