import { Component, OnInit } from '@angular/core';
import { ComponentObject, APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-new',
  templateUrl: './components-new.component.html',
  styleUrls: ['./components-new.component.css']
})
export class ComponentsNewComponent implements OnInit {

  public options: Object = {
    placeholderText: 'Voer hier de uitwerking in',
    charCounterCount: false,
    colorsBackground: [],
    pluginsEnabled: ['link', 'align', 'paragraphFormat', 'fontAwesome', 'lineBreaker', 'lists', 'quote', 'table'],
  }

  // Set model for form submission
  public newComponent: ComponentObject = {
    name: '',
    expressionField: '',
    duration: '',
    budget: '',
    componentText: ''

  }

  showError: boolean = false;
  error: string = '';

  constructor(private api: APIService, private router: Router) { }

  ngOnInit() {
  }

  sendComponent() {
    this.api.postComponent(this.newComponent).subscribe(result => {
      console.log(result);
      this.router.navigateByUrl('components');
      
    }, err => {
      this.showError = true;
      this.error = err.error.message;

    })
  }
}
