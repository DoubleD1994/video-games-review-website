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

  private commentsStore;
  private commentsSubject = new Subject();
  comments = this.commentsSubject.asObservable();

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {
    this.getReviews();
  }

  getReviews() {
    this.httpClient.get(this.BASE_URL + '/reviews').subscribe(
      (response) => {
        this.reviewStore = response;
        this.reviewSubject.next(this.reviewStore);
      },
      (error) => {
        this.handleError('Unable to get reviews from server.');
      }
    );
  }

  getSingleReview(reviewTitle) {
    return this.httpClient.get(this.BASE_URL + '/reviews/' + reviewTitle);
  }

  getReviewComments(reviewTitle) {
    this.httpClient
      .get(this.BASE_URL + '/reviews/' + reviewTitle + '/comments')
      .subscribe(
        (response) => {
          this.commentsStore = (response as any).reviewComments;
          this.commentsSubject.next(this.commentsStore);
        },
        (error) => {
          this.handleError('Unable to get comments from server.');
        }
      );
  }

  private handleError(error) {
    console.error(error);
    this.snackBar.open(error, 'close', { duration: 2000 });
  }
}
