import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';

const routes: Routes = [
  {path:'', component:IssuesListComponent},
  {path:'issue/:id', component: IssueDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
