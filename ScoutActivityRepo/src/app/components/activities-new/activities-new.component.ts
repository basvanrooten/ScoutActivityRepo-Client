import { Component, OnInit } from '@angular/core';
import { ActivityObject, APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-activities-new',
  templateUrl: './activities-new.component.html',
  styleUrls: ['./activities-new.component.css']
})
export class ActivitiesNewComponent implements OnInit {

  // Set model for form submission
  public newActivity: ActivityObject = {
    name: '',
    date: new Date,
    author: this.auth.getUserDetails()._id,
    expressionField: ''

  }

  showError: boolean = false;
  error: string = '';

  constructor(private api: APIService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
  }

  sendActivity() {
    this.api.postActivity(this.newActivity).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('activities');
      
    }, err => {
      this.showError = true;
      this.error = err.error.message;

    })
  }

}
