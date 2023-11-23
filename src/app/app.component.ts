import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'informatica-shop';
  mainClass: string = '';
  constructor(private router: Router){  }
  private setMainClass(url: string): void {
    if (url.includes('/ifshop-admin')) {
      this.mainClass = 'hidden';
    } else {
      this.mainClass = '';
    }
  }
  ngOnInit(): void {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd) {
        console.log(event.url)
        this.setMainClass(event.url)
      }
    })
    initFlowbite();
  }
}
