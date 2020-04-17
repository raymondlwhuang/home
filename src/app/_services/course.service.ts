import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient) { }

  getAllCourses() : Observable<Course[]>{
    return this.http.get<Course[]>('api/courses');
  }
  createCourse(payload : Course): Observable<Course> {
    return this.http.post<Course>('api/courses',payload);
  }
  deleteCourse(payload : string) : Observable<any>{
    return this.http.delete('api/courses/' + payload);
  }
  updateCourse(payload : string | number, changes : Partial<Course>) : Observable<any> {
    return this.http.put('/api/courses/' + payload, changes);
  }
}
