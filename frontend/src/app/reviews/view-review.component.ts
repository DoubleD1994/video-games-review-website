import { Component } from '@angular/core';
import { WebService } from '../web.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css'],
})
export class ViewReviewComponent {
  constructor(public webService: WebService, private route: ActivatedRoute) {}

  reviewModel = {
    author: '',
    created_date: '',
    gameCategories: [],
    gameTitle: '',
    review: '',
    reviewTitle: '',
  };

  ngOnInit() {
    var reviewTitle = this.route.snapshot.params.reviewTitle;
    var encodedTitle = encodeURIComponent(reviewTitle);
    this.webService.getSingleReview(encodedTitle).subscribe((response) => {
      this.reviewModel.author = response[0].author;
      this.reviewModel.created_date = response[0].created_date;
      this.reviewModel.gameCategories = response[0].gameCategories;
      this.reviewModel.gameTitle = response[0].gameTitle;
      this.reviewModel.review = response[0].review;
      this.reviewModel.reviewTitle = response[0].reviewTitle;
    });
    this.webService.getReviewComments(encodedTitle);
  }
}
