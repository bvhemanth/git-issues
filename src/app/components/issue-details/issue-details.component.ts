import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetIssuesService } from 'src/app/services/get-issues.service';
import { Comment } from 'src/app/models/issue.interface';
import { toArray } from 'rxjs/operators';
import { map,takeUntil } from 'rxjs/operators';
import { Subject, pipe } from 'rxjs';
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  issueDetails;
  comments:Comment[]=[];
  loader=true;
  private readonly destroy$ = new Subject();

  constructor(private router: Router,private getService : GetIssuesService,
    private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation.extras.state) {
      //this.issueDetails= navigation.extras.state.item;//another way of extracting data from navigatin param but it ll take
    }
   }

  ngOnInit(): void {
    this.getService.getIssueDetails(this.route.snapshot.params.id)
      .toPromise().then((success)=>{
      this.issueDetails=success;
      this.issueDetails.comments ?
        this.getService.getComments(this.issueDetails.number)
        .pipe(takeUntil(this.destroy$)).subscribe((data)=>{
            this.comments= JSON.parse(JSON.stringify(data));
        }): this.issueDetails.comments;

        this.loader=false;
    }) .catch(err => { console.log(err) });
  }
  getDetails(){
   return this.getService.getIssueDetails(this.route.snapshot.params.id)
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();//to destroy service when component ends
  }
}
