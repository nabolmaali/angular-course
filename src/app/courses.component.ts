import { CoursesService } from './courses.service';
import {Component} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

//decorator function
//has properties how component is working
@Component({
    selector: 'course',
    template: 
    `

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

    private newMethod(): string {
        return 'course';
    }

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