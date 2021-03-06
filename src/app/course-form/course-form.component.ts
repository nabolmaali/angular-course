import { FormGroup, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    (this.getTopics()).push(new FormControl(topic.value))
    topic.value = '';

  }
  removeTopic(topic: FormControl) {
    let index = ((this.getTopics()).controls).indexOf(topic);
    (this.getTopics()).removeAt(index);
  }


  public getTopics(): FormArray {
    return this.form.get('topics') as FormArray;
  }
}
