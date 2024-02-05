import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss']
})
export class DashboardContentComponent implements OnInit{
  constructor(){}
  
  @Input() component: string = '';
  
  ngOnInit(): void {
    
  }

}
