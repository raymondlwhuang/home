import { CourseEffects } from '../../../_store/effects/course.effect';
import { CourseService } from '../../../_services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StateManagementComponent } from '../state-management/state-management.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CourseReducer } from '../../../_store/reducers/course.reducer';
import { MatIconModule } from '@angular/material/icon';
//import { CreateCourseComponent } from './component/create-course/create-course.component';

@NgModule({
  declarations: [StateManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [StateManagementComponent]
})
export class StateManagementModule { }
