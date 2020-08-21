import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'write-review',
  templateUrl: './write-review.component.html',
  styleUrls: ['./write-review.component.css'],
})
export class WriteReviewComponent {
  constructor(
    public webService: WebService,
    public authService: AuthService,
    private router: Router
  ) {
    if (!authService.isAuthenticated) {
      router.navigate(['login']);
    }
  }
}
