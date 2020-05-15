import { error } from 'protractor';
import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';



@Component({
  selector: 'post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})
export class PostComponentComponent implements OnInit {
  posts: object[];

  constructor(private service: PostService) {
  }
  ngOnInit() {
    this.service.geAll().
      subscribe(response => {
        this.posts = response;
        console.log(response);
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';

    this.service.create(post).
      subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
        console.log(post);
      }, (error: AppError) => {
        if (error instanceof BadRequestError) {
          // this.form.setError(error.originalError);

        }
        else {
          throw error;
        }
      });
  }

  updatePost(post: any) {
    this.service.update(post).
      subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post: any) {
    this.service.delete(345).
      subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('this post has already deleted');
          console.log(error);
        }
        else {
          throw error;
        }

      });
  }


}
