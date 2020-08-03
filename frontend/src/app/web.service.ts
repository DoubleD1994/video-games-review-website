import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable()
export class WebService {
  BASE_URL = 'http://localhost:3000';

  private reviewStore;

  private reviewSubject = new Subject();

  reviews = this.reviewSubject.asObservable();

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {
    this.getReviews('');
  }

  getReviews(reviewTitle) {
    reviewTitle = reviewTitle ? '/' + reviewTitle : '';
    this.httpClient.get(this.BASE_URL + '/reviews' + reviewTitle).subscribe(
      (response) => {
        this.reviewStore = response;
        this.reviewSubject.next(this.reviewStore);
      },
      (error) => {
        this.handleError('Unable to get reviews from server.');
      }
    );
  }

  private handleError(error) {
    console.error(error);
    this.snackBar.open(error, 'close', { duration: 2000 });
  }
}
