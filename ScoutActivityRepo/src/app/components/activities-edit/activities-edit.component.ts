import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/Activity';
import { APIService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities-edit',
  templateUrl: './activities-edit.component.html',
  styleUrls: ['./activities-edit.component.css']
})
export class ActivitiesEditComponent implements OnInit {

  // Get selected Object
  selectedActivityId: string;
  selectedActivity: Activity;

  showError: boolean = false;
  error: string = '';

  constructor(private api: APIService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedActivityId = params.get("activityId");

      this.api.getActivityByID(this.selectedActivityId).subscribe(res => {

        this.selectedActivity = new Activity(res._id, res.name, res.date, res.expressionField, res.author, res.components);
      }, err => {
        this.showError = true;
        this.error = err.error.message;
      })
    })
  }

  editActivity() { 
    this.api.editActivity(this.selectedActivityId, this.selectedActivity).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('activities');


    }, err => {
      this.showError = true;
      this.error = err.error.message;
    })
  }

}
