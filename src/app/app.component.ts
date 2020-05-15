import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  canSave = true;

  Courses;

  loadCourses()
  {
    this.Courses =  [
  {id:1 , name: 'course1'},
  {id:2,name: 'course2'},
  {id:3,name: 'course3'}] ;
  }

  trackCourse(index, course)
  {
    return course ? course.id:undefined;
  }

 

  onAdd(){
    this.Courses.push({id:4,name: 'course4'});
  }

  onRemove(course)
  {
    let index=this.Courses.indexOf(course);
    this.Courses.splice(index,1);
  }

  onUpdate(course)
  {
    course.name = "updated";
  }

viewMode = "map";

  courses = [];


  tweet = {
    body: '...',
    LikesCount: 10,
    isLiked: true
  }

  title = 'hello-world';

  Post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(){
    console.log("Favorite changed");
  }
}
