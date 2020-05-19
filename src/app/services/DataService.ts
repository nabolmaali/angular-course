import { BadRequestError } from './../common/bad-request-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from '../common/not-found-error';
// @Injectable()
export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  geAll() {
    return this.http.get<any[]>(this.url).
      catch(this.handleError);
  }
  create(post: {
    title: string;
  }) {
    return this.http.post(this.url, JSON.stringify(post)).
      catch(this.handleError);
  }
  update(post: {
    id: string;
  }) {
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
      .catch(this.handleError);
  }
  delete(id: string | number) {
    return this.http.delete(this.url + '/' + id).
      catch(this.handleError);
  }
  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error.json()));
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    return Observable.throw(new AppError(error));
  }
}
