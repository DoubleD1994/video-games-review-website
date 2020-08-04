import { Component } from '@angular/core';
import { WebService } from '../web.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public webService: WebService) {}

  ngOnInit() {
    this.webService.getReviews('');
  }
}
