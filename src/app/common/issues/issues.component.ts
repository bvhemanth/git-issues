import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  @Input('data') data;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    //console.log(this.data)
  }
  route(data){
    this.router.navigateByUrl(`/issue/${data.number}`, { state: { item: data }});
  }

  limit(s){
    //console.log(s)
    let s_split = s.split(/\s+/);
    let word_count = 0;
    let result = "";

      word_count = 0;
      result = s_split.reduce((x,y)=>{
        //console.log(x+","+y)
        word_count+=(y.length+1);
        if(word_count>=140) return x;
        else return x+" "+y;
      }
      , "").substring(1);
   
      return result;
  }
}
