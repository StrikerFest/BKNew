import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './models/Post.interface';
import { Category } from './models/Category.interface';

const URL_API = 'http://localhost:3000/posts';
const URL_API_CATE = 'http://localhost:3000/category';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(URL_API_CATE).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<Category[]>('getCategories', []))
    );
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(`${URL_API}/${id}`).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<Category>('getPost'))
    );
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(URL_API).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<Post[]>('getPosts', []))
    );
  }

  // getPostsSpecial(): Observable<Post[]> {
  //   return this.http.get<Post[]>(URL_API).pipe(
  //     tap((data) => console.log(data)),
  //     catchError(this.handleError<Post[]>('getPosts', []))
  //   );
  // }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${URL_API}/${id}`).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<Post>('getPost'))
    );
  }

  updatePost(Post: Post): Observable<Post> {
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
    });

    let options = {
      headers: headers,
    };

    return this.http.post<Post>(`${URL_API}`, Post, options).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<Post>('updatePost', Post))
    );
  }

  // updatePost(Post: Post): Observable<Post> {

  //   let headers = new HttpHeaders({
  //     'Content-type': 'application/json',
  //   });

  //   let options = {
  //     headers: headers,
  //   };

  //   return this.http
  //     .put<Post>(`${URL_API}/${Post.id}`, Post, options)
  //     .pipe(
  //       tap(data => console.log(data)),
  //       catchError(this.handleError<Post>('updatePost', Post))
  //     );
  // }

  deletePost(Post: Post): Observable<Post> {
    return this.http.delete<Post>(`${URL_API}/${Post.id}`).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<Post>('removePost'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      let errorMessage = '';
      if (error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        errorMessage = `Error code: ${error.status}<br>Message: ${error.message}<br>Error: ${error.error}`;
      }

      alert(errorMessage);

      return of(result as T);
    };
  }
}
