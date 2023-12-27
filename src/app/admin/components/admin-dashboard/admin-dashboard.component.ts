import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
    constructor(){}
    component_to_show: string = ''

    showComponent(component:string): void{
      this.component_to_show = component
      console.log(component)
    }

}
