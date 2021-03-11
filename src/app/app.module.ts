import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssuesComponent } from './common/issues/issues.component';
import { IssueDetailsComponent } from './components/issue-details/issue-details.component';
import { LinkPipe } from './helpers/link.pipe';
@NgModule({
  declarations: [
    AppComponent,
    IssuesListComponent,
    IssuesComponent,
    IssueDetailsComponent,
    LinkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    IssuesComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
