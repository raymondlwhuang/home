import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
    name = new FormControl();
    title = 'angforms';
    submitted : boolean = false;
    angForm = new FormGroup({
      name : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      phone : new FormControl('', Validators.required),
      website : new FormControl(''),
      picture : new FormControl(''),
      location : new FormGroup({
        address: new FormControl('', Validators.required),
        postalCode: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        countryCode: new FormControl('', Validators.required),
        region: new FormControl('', Validators.required),
      }),
      summary : new FormControl(''),
      highlights: new FormArray([new FormControl('')]),
      works : new FormArray([this.addWorkFormGroup()])
    });  
    get highlights(): FormArray {
      return this.angForm.get('highlights') as FormArray;
    } 
    get works(): FormArray {
      return this.angForm.get('works') as FormArray;
    } 
    get formInput() {
      let test = this.angForm.controls;
      return this.angForm.controls;
    } 
    onFormSubmit(): void {
      this.submitted = true;
      console.log(this.angForm.valid);
      document.getElementById('output').innerText = JSON.stringify(this.angForm.value);
    } 
    addHighlightField() { 
      (<FormArray>this.highlights).push(new FormControl('', Validators.required)); 
    }
  
    deleteHighlightField(index: number,event) {
      event.preventDefault();
      if (this.highlights.length !== 1) { 
        this.highlights.removeAt(index); 
      }
    }  
    addWorkFormGroup() : FormGroup {
      let workFormGroup =new FormGroup({
        company : new FormControl('', Validators.required),
        position : new FormControl('', Validators.required),
    
      });
      return workFormGroup;
    }  
    addWork() {
      let test = this.addWorkFormGroup();
      (<FormArray>this.works).push(test); 
    }
  
    deleteWork(index: number,event) {
      event.preventDefault();
      if (this.works.length !== 1) { 
        this.works.removeAt(index); 
      }
    }  
  
  }
  