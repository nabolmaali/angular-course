import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent{
form = new FormGroup({
  topics : new FormArray([])
});

addTopic(topic: HTMLInputElement)
{
  (this.form.get('topics') as FormArray).push(new FormControl(topic.value))
  topic.value = '';

}
removeTopic(topic: FormControl)
{
  let index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
  (this.form.get('topics') as FormArray).removeAt(index);
}
  
}
