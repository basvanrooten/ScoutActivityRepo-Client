import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comp } from '../models/Comp';
import { AuthenticationService } from './authentication.service';
import config from '../config.json';
import { Activity } from '../models/Activity';


  // Interfaces for API Calls
  // ComponentObject
  export interface ComponentObject {
    name: string,
    expressionField: string,
    duration: string,
    budget: string,
    componentText: string;
  }

  export interface ActivityObject {
    name: string,
    date: Date,
    author: string,
    expressionField: string;
  }

@Injectable({
  providedIn: 'root'
})

export class APIService {


  constructor(private auth: AuthenticationService, private httpClient: HttpClient) { }


  // COMPONENT CRUD
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
                res.componentText,
                res.createdAt,
                res.updatedAt
              )
              components.push(component)
            })
            return components;
          })
      )
  }

  getComponentByID(componentId: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.get(config.apiUrl + '/component/' + componentId, {headers: headers});
    return res;
  }

  postComponent(newComponent: ComponentObject): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });
    
    var res = this.httpClient.post(config.apiUrl + '/component', newComponent, {headers: headers});
    return res;
  }

  deleteComponent(component: Comp): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.delete(config.apiUrl + '/component/' + component._id, {headers: headers});
    return res;
  }

  editComponent(componentId: string, component: Comp): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.put(config.apiUrl + '/component/' + componentId, component, {headers: headers});
    return res;

  }

  // ACTIVITY CRUD
  getAllActivities(): Observable<Activity[]> {

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    return this.httpClient.get<any>(config.apiUrl + '/activity', {headers: headers} )
      .pipe(
          map(result => {
            let activities: Activity[] = [];
            result.forEach(res => {
              let activity = new Activity(
                res._id,
                res.name,
                res.date,
                res.expressionField,
                res.author,
                res.components,
                res.createdAt,
                res.updatedAt
              )
              activities.push(activity)
            })
            return activities;
          })
      )
  }

  getActivityByID(activityId: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.get(config.apiUrl + '/activity/' + activityId, {headers: headers});
    return res;
  }

  postActivity(newActivity: ActivityObject): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });
    
    var res = this.httpClient.post(config.apiUrl + '/activity', newActivity, {headers: headers});
    return res;
  }

  deleteComponentFromActivityByID(activityId: string, componentId: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.delete(config.apiUrl + '/activity/' + activityId + '/component/' + componentId, {headers: headers});
    return res;
  }

  deleteActivity(activity: Activity): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.delete(config.apiUrl + '/activity/' + activity._id, {headers: headers});
    return res;
  }

  editActivity(activityId: string, activity: Activity): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.auth.getToken() 
    });

    var res = this.httpClient.put(config.apiUrl + '/activity/' + activityId, activity, {headers: headers});
    return res;

  }
}
