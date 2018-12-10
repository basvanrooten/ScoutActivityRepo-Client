import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { Comp } from '../../models/Comp';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  constructor(private APIService : APIService) { }

  components: Comp[] = [];
  selectedIndex: number;

  ngOnInit() {
    this.APIService.getAllComponents().subscribe(res => {
      this.components = res
    });

  }

}
