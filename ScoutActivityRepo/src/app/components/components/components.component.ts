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
  selectedIndex: number;

  ngOnInit() {

    // Get all components
    this.api.getAllComponents().subscribe(res => {
      this.components = res;
    });

  }

}
