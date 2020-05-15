import { error } from 'protractor';
import { ErrorHandler } from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable()
export class AppErrorHandler  implements ErrorHandler {
    handleError(error){
        alert('An unexpected error occurred!');
          console.log(error);
    }

}