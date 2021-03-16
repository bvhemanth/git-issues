import { Component, OnInit, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { GetIssuesService } from 'src/app/services/get-issues.service';
import { Issue } from 'src/app/models/issue.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { debounceTime, catchError, takeUntil } from 'rxjs/operators';
import { throwError, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit , OnDestroy{
  issues: Issue[]=[];
  loader:boolean=true;
  per_page=25;
  page=1;
  lazy:boolean=false;
  @ViewChild('wrapper') wrapper
  private readonly destroy$ = new Subject();

  @HostListener("window:scroll", ['$event'])
  onScroll(event:any) {
     if (this.bottomReached()) {
      this.attachData();
     }
  }

  constructor(private get : GetIssuesService) { }

  ngOnInit(): void {
    this.loader=true;
    this.getlist(this.page);
  }
  getlist(pagenumber){
    this.get.getData(pagenumber,this.per_page).pipe(
      takeUntil(this.destroy$),
      debounceTime(300,),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
      ).subscribe((data)=>{
        if(data){
          let list= data; 
          this.issues.push(...JSON.parse(JSON.stringify(list))); 
          this.loader=false;
          this.lazy=false;
        }
      }
    );
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= Math.floor(document.body.scrollHeight);
  }
  
  attachData(){
    this.page++;
    this.lazy=true;
    this.getlist(this.page);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();//to destroy service when component end
  }
}
