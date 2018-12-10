import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Comp } from '../models/Comp';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  readonly url =  "https://scoutingactivityrepo-dev.herokuapp.com/api/"

  constructor(private httpClient: HttpClient) { }

  getAllComponents(): Observable<Comp[]> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJhc3ZhbnJvb3RlbkBtZS5jb20iLCJpYXQiOjE1NDQzNjE1MDUsImV4cCI6MTU0Njk1MzUwNX0.HZTqjwRgKkI5VDu3mi8zKs7S2vKTz76RqGXiv2ZWKDA' 
    });
    let params = new HttpParams();

    return this.httpClient.get<any>(this.url+ 'component/', {headers: headers, params: params} )
      .pipe(
          map(result => {
            let components: Comp[] = [];
            result.forEach(res => {
              let component = new Comp(
                res._id,
                res.name,
                res.expressionField,
                res.duration,
                res.budget,
                res.componentText
              )
              components.push(component)
            })
            return components;
          })
      )
  }
}
