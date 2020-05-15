import { CoursesService } from './courses.service';
import {Component} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//decorator function
//has properties how component is working
@Component({
    selector: 'course',
    template: 
    `

    
    <h2>{{title}}</h2>
    <h2 [textContent] = "title"></h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>
    </ul>
    <table>
    <tr>
    <td [attr.colspan]="colSpan">
    hello
    </td>
    </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive" >Save</button>

    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>

    <div (click)="ondivClicked()">
        <button (click)="onSave($event)">Save</button>
    </div>

    <input (keyup.enter) = "onKeyUp()" />
    <input (keyup.enter) = "onKeyUp1($event)" />
    <input [value]="email" (keyup.enter) = "email = $event.target.value; onKeyUp2()" />
    

    <br/>
    <br/>
    {{ course.title | uppercase | lowercase}} <br/>
    {{ course.students | number}} <br/>
    {{ course.rating | number:'1.2-2'}} <br/>
    {{ course.rating | number:'1.1-1'}} <br/>
    {{ course.price | currency: 'AUD'}} <br/>
    {{ course.price | currency: 'USD'}} <br/>
    {{ course.releaseDate | date:'shortDate'}}

    <br/>
    {{text | summary}}
    `
})

export class CoursesComponent{
    title = "List of courses";
    colSpan = 2;
    isActive = true;
    email = "me@example.com";
    course = {
        title: "The complete angular course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1)

    };
    text = 'sample text   sample text sample text sample text sample text sample text ' ;

    // constructor(service: CoursesService){
        
    //     this.courses = service.getCourses();
    // }

    onSave($event){
        $event.stopPropagation();
        console.log("Button was clicked",$event);
    }

    ondivClicked()
    {
        console.log("Div  was clicked");
    }

    onKeyUp() {
        console.log("Enter was pressed!");
    }

    //Event filtering
    onKeyUp1($event){
        console.log($event.target.value);
    }

    //Template Variables
    onKeyUp2(){
        console.log(this.email);
    }


}