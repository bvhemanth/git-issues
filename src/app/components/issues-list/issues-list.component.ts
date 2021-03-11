import { Component, OnInit, HostListener } from '@angular/core';
import { GetIssuesService } from 'src/app/services/get-issues.service';
import { Issue } from 'src/app/models/issue.interface';
@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  issues: Issue[]=[];
  totalIssues;

  @HostListener("window:scroll", ['$event'])
  onScroll(event:any) {
     if (this.bottomReached()) {
      this.attachData();
     }
  }

  constructor(private get : GetIssuesService) { }

  ngOnInit(): void {
    this.get.getData().subscribe((data)=>{
      this.totalIssues = data;
      this.issues = this.totalIssues.slice(0,25);
      }
    );
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
  
  attachData(){
    if(this.issues.length === this.totalIssues.length){
      return false;
    }
    this.issues.push(...this.totalIssues.slice(this.issues.length, this.issues.length+25));
    return true;   
  }
}
