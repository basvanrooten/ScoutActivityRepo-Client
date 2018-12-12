import { Component, OnInit } from '@angular/core';
import { ComponentObject, APIService } from 'src/app/services/api.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Comp } from 'src/app/models/Comp';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-components-edit',
  templateUrl: './components-edit.component.html',
  styleUrls: ['./components-edit.component.css']
})
export class ComponentsEditComponent implements OnInit {

  // Get selected Object
  selectedComponentId: string;
  selectedComponent: Comp;

  public options: Object = {
    placeholderText: 'Voer hier de uitwerking in',
    charCounterCount: false,
    colorsBackground: [],
    pluginsEnabled: ['link', 'align', 'paragraphFormat', 'fontAwesome', 'lineBreaker', 'lists', 'quote', 'table'],
  }

  // // Set model for form submission
  // public edit: ComponentObject = {
  //   name: '',
  //   expressionField: '',
  //   duration: '',
  //   budget: '',
  //   componentText: ''

  // }

  showError: boolean = false;
  error: string = '';

  constructor(private api: APIService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.selectedComponentId = params.get("componentId");

      this.api.getComponentByID(this.selectedComponentId).subscribe(res => {

        this.selectedComponent = new Comp(res._id, res.name, res.expressionField, res.duration, res.budget, res.componentText);
      }, err => {
        this.showError = true;
        this.error = err.error.message;
      })
    })
  }

  editComponent() { 
    this.api.editComponent(this.selectedComponentId, this.selectedComponent).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('components');


    }, err => {
      this.showError = true;
      this.error = err.error.message;
    })
  }
}
