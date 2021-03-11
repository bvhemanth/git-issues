import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  issueDetails;
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    if (navigation.extras.state) {
      this.issueDetails= navigation.extras.state.item;
      console.log(navigation.extras.state.item);
    }
   }

  ngOnInit(): void {
  }

}
