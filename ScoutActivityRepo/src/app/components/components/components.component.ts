import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { Comp } from 'src/app/models/Comp';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  constructor(private api : APIService) { }

  components: Comp[] = [];
  loading: boolean = true;
  selectedComponent: Comp;
  selectedIndex: number;
  showError: boolean = false;
  error: string = '';
  showNotification: boolean;
  notification: string = '';

  ngOnInit() {
    this.loadComponents();
  }

  loadComponents() {
    // Get all components
    this.api.getAllComponents().subscribe(res => {
      this.components = res;
      this.loading = false;

    });
  }

  onSelect(component: Comp) {
    this.showNotification = false;
    this.notification = '';
    this.selectedComponent = component;
  }

  deleteComponent(component: Comp) {
    this.api.deleteComponent(component).subscribe(result => {
      this.selectedComponent = null;
      this.loadComponents();

      this.showNotification = true;
      this.notification = "Activiteit succesvol verwijderd."

    }, err => {
      this.showError = true;
      this.error = err.error.message;
    })
  }


}
