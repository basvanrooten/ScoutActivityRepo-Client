import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Activity } from 'src/app/models/Activity';
import { Comp } from 'src/app/models/Comp';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {


  showNotification: boolean;
  notification: string = '';
  loading: boolean = true;
  showError: boolean = false;
  error: string = '';
  activities: Activity[];
  selectedActivity: Activity = null;
  selectedActivityComponents: Comp[] = [];
  constructor(private api : APIService) { }

  ngOnInit() {
    this.loadComponents();
  }

  onSelect(activity: Activity) {
    this.showNotification = false;
    this.notification = '';
    this.selectedActivity = activity;
    this.selectedActivityComponents = [];
    console.log(this.selectedActivity.name);

    for(let component of this.selectedActivity.components) {

      this.api.getComponentByID(component).subscribe(res => {
        let receivedComponent = new Comp(res._id, res.name, res.expressionField, res.duration, res.budget, res.componentText);
        console.log(receivedComponent);
        this.selectedActivityComponents.push(receivedComponent);
      }, err => {
        this.showError = true;
        this.error = err.error.message;
      })
    }

    console.log(this.selectedActivityComponents);
  }

  loadComponents() {
    // Get all components
    this.api.getAllActivities().subscribe(res => {
      this.selectedActivityComponents = [];
      this.activities = res;
      this.loading = false;
    });
  }

  deleteComponentFromActivity(activityId: string, componentId: string) {
    this.api.deleteComponentFromActivityByID(activityId, componentId).subscribe(res => {
      this.showNotification = true;
      this.notification = "Activiteit succesvol verwijderd uit opkomst";
      
      this.api.getComponentByID(componentId).subscribe(res => {
        let receivedComponent = new Comp(res._id, res.name, res.expressionField, res.duration, res.budget, res.componentText);
        const index: number = this.selectedActivityComponents.indexOf(receivedComponent);
        if (index !== -1) {
          this.selectedActivityComponents.splice(index, 1);
        } 
      }, err => {
        this.showError = true;
        this.error = err.error.message;
      })
    }, err => {
      this.showError = true;
      this.error = err.error.message;
    })
  }

  deleteActivity(activity: Activity) {

    const index: number = this.activities.indexOf(activity);
    if (index !== -1) {
      this.activities.splice(index, 1);
    } 
    this.api.deleteActivity(activity).subscribe(res => {
      this.showNotification = true;
      this.notification = "Activiteit succesvol verwijderd";
      this.selectedActivity = undefined;
    }, err => {
      this.showError = true;
      this.error = err.error.message;
    })
  }
}
