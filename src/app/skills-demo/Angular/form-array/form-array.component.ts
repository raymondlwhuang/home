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
      phone : new FormControl('', Validators.required),
      location : new FormGroup({
        address: new FormControl('', Validators.required),
        postalCode: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        countryCode: new FormControl('', Validators.required),
        region: new FormControl('', Validators.required),
      }),
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
      if(this.angForm.valid){
        document.getElementById('output').innerHTML = JSON.stringify(this.angForm.value, undefined, 4);
      }
    } 
    addHighlightField() { 
      let isOKtoAdd = true;
      for(let i=0;i<this.highlights.length;i++) {
        if(this.highlights.value=='') isOKtoAdd = false;
      }
      if(isOKtoAdd) (<FormArray>this.highlights).push(new FormControl('', Validators.required)); 
      else alert('Previous hightlight is empty');
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
      let isOKtoAdd = true;
      console.log(this.works.value);
      for(let i=0;i<this.works.length;i++) {
        console.log(this.works.value[i]);
        if(this.works.value[i].company=='' || this.works.value[i].position=='') isOKtoAdd = false;
      }
      if(isOKtoAdd) (<FormArray>this.works).push(this.addWorkFormGroup());
      else alert('Previous work required field is empty');

       
    }
  
    deleteWork(index: number,event) {
      event.preventDefault();
      if (this.works.length !== 1) { 
        this.works.removeAt(index); 
      }
    }  
  
  }
  