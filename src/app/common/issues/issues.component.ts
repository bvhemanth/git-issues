import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  @Input('data') data;
  
  constructor(private router: Router) {
   
   }

  ngOnInit(): void {
    this.data['body'] = this.limit(this.data.body);
  }
  route(data){
    this.router.navigateByUrl(`/issue/${data.number}`, { state: { item: data }});
  }

  limit(s){
    console.log(s);
    if(s){
    let s_split = s.split(/\s+/);
    let word_count = 0;
    let result = "";

      word_count = 0;
      result = s_split.reduce((x,y)=>{
        word_count+=(y.length+1);
        if(word_count>=140) return x;
        else return x+" "+y;
      },"").substring(1);
      console.log(result.length);
      return result;
    }
  }
}
