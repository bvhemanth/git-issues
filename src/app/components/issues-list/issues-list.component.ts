import { Component, OnInit } from '@angular/core';
import { GetIssuesService } from 'src/app/services/get-issues.service';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {
  issues;
  constructor(private get : GetIssuesService) { }

  ngOnInit(): void {
    this.get.getData().subscribe((data)=>{
      this.issues = data;
    });
  }

}
