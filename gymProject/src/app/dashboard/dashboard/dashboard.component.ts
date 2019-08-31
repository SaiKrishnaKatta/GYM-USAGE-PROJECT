import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  activeTab;
  constructor(private readonly route: Router) { }

  ngOnInit() {
  }

  sideNavRoute(event){
    switch(event) {
      case 'plan': 
        this.route.navigate(['/dashboard/addPlan']);
       break;
      case 'scheme':
        this.route.navigate(['/dashboard/addScheme']);
        break;
    }

    // }
  }
}
