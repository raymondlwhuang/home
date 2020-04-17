import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/_models/course';
import { CourseService } from 'src/app/_services/course.service';
import { Store, select } from '@ngrx/store';
import { CourseState } from 'src/app/_store/state/course.state';
import { getAllCourses } from 'src/app/_store/selectors/course.selector';
import * as courseActionTypes from '../../../_store/actions/course.action';
import { Update } from '@ngrx/entity';
import { NgForm }   from '@angular/forms';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})
export class StateManagementComponent implements OnInit {
  courses$ : Observable<Course[]>;
  courseToBeUpdated : Course;
  isUpdateActivated = false;
  isAddActivated = false;

  constructor(private courseService : CourseService, private store : Store<CourseState>) { }

  ngOnInit() {
    this.courses$ = this.store.pipe(select(getAllCourses));
  }
  deleteCourse(payload:string) {
    this.store.dispatch(courseActionTypes.deleteCourse({payload}))
  }
  showUpdateForm(payload : Course) {
    document.getElementById('data-table').style.display = 'none';
    this.courseToBeUpdated = {...payload};
    this.isUpdateActivated = true;
  }
  showAddForm() {
    document.getElementById('data-table').style.display = 'none';
    this.isAddActivated = true;
  }
  AddCourse(submittedForm: NgForm) {
    this.isAddActivated = false;
    document.getElementById('data-table').removeAttribute('style');
    if(submittedForm.invalid) {
      return;
    }
    const payload : Course = {id: uuid(), name: submittedForm.value.name, description:submittedForm.value.description};
    this.store.dispatch(courseActionTypes.createCourse({payload}));  
  }  
  updateCourse(updateForm: NgForm){
    const payload: Update<Course> = {
      id: this.courseToBeUpdated.id,
      changes: {
        ...this.courseToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(courseActionTypes.updateCourse({payload}));

    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
    document.getElementById('data-table').removeAttribute('style');
  }
  cancel(){
    this.isUpdateActivated = false;
    this.courseToBeUpdated = null;
    document.getElementById('data-table').removeAttribute('style');
  }
}
