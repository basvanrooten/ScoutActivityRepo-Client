import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { Comp } from '../models/Comp';
import { AuthenticationService } from './authentication.service';
import config from '../config.json';


  // Interfaces for API Calls
  // ComponentObject
  export interface ComponentObject {
    name: string,
    expressionField: string,
    duration: string,
    budget: string,
    componentText: string;
  }

@Injectable({
  providedIn: 'root'
})

export class APIService {


  constructor(private auth: AuthenticationService, private httpClient: HttpClient) { }

  getAllComponents(): Observable<Comp[]> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });
    let params = new HttpParams();

    return this.httpClient.get<any>(config.apiUrl + '/component', {headers: headers, params: params} )
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

  postComponent(newComponent: ComponentObject): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });
    
    var res = this.httpClient.post(config.apiUrl + '/component', newComponent, {headers: headers});
    return res;
  }
}
