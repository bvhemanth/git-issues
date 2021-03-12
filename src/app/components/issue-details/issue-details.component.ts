import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetIssuesService } from 'src/app/services/get-issues.service';
import { Comment } from 'src/app/models/issue.interface';
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  issueDetails;
  comments:Comment[]=[];
  constructor(private route: Router,private getService : GetIssuesService) {
    const navigation = this.route.getCurrentNavigation();
    if (navigation.extras.state) {
      this.issueDetails= navigation.extras.state.item;
    }
   }

  ngOnInit(): void {
    this.issueDetails.comments ?
    this.getService.getComments(this.issueDetails.number).subscribe((data)=>{
      this.comments= JSON.parse(JSON.stringify(data));
    }) : this.issueDetails.comments;
  }

}
