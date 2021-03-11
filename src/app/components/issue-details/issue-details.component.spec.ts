import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDetailsComponent } from './issue-details.component';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { GetIssuesService } from 'src/app/services/get-issues.service';
import { of } from 'rxjs';
describe('IssueDetailsComponent', () => {
  let component: IssueDetailsComponent;
  let fixture: ComponentFixture<IssueDetailsComponent>;
  let mockActiveRoute;
  let debugElement: DebugElement;
  let router: jasmine.SpyObj<Router>;
  beforeEach(async(() => {
    mockActiveRoute = {
      snapshot: {
        queryParams: {
          id: 41657,
        },
      },
    };
    TestBed.configureTestingModule({
      declarations: [ IssueDetailsComponent ],
      providers:[
      { provide: Router, useValue: new MockRouterSecondary('/issue/41657') },
      { provide: GetIssuesService, useClass: MockSerivce },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router)
    spyOn(router, 'getCurrentNavigation').and.returnValue({ extras: { state: {item: {
      "url": "https://api.github.com/repos/rails/rails/issues/41657",
      "repository_url": "https://api.github.com/repos/rails/rails",
      "labels_url": "https://api.github.com/repos/rails/rails/issues/41657/labels{/name}",
      "comments_url": "https://api.github.com/repos/rails/rails/issues/41657/comments",
      "events_url": "https://api.github.com/repos/rails/rails/issues/41657/events",
      "html_url": "https://github.com/rails/rails/issues/41657",
      "id": 829013265,
      "node_id": "MDU6SXNzdWU4MjkwMTMyNjU=",
      "number": 41657,
      "title": "ActiveStorage link expires when playing videos",
      "user": {
        "login": "heaven",
        "id": 126732,
        "node_id": "MDQ6VXNlcjEyNjczMg==",
        "avatar_url": "https://avatars.githubusercontent.com/u/126732?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/heaven",
        "html_url": "https://github.com/heaven",
        "followers_url": "https://api.github.com/users/heaven/followers",
        "following_url": "https://api.github.com/users/heaven/following{/other_user}",
        "gists_url": "https://api.github.com/users/heaven/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/heaven/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/heaven/subscriptions",
        "organizations_url": "https://api.github.com/users/heaven/orgs",
        "repos_url": "https://api.github.com/users/heaven/repos",
        "events_url": "https://api.github.com/users/heaven/events{/privacy}",
        "received_events_url": "https://api.github.com/users/heaven/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
  
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [
  
      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2021-03-11T10:26:14Z",
      "updated_at": "2021-03-11T10:26:14Z",
      "closed_at": null,
      "author_association": "NONE",
      "active_lock_reason": null,
      "body": "### Steps to reproduce\r\nWe upload video files to S3, they're not too large, like 150-250MB. Normally, the connection remains alive after 300 seconds and the playback works as expected but when people use the rewind feature or pause the playback for some time and then restore the content is being downloaded in chunks. In this case, the playback stops at some point with 403 Forbidden.\r\n\r\nWhen using ActiveStorage's proxy the rewind feature doesn't work at all.\r\n\r\n### Expected behavior\r\nPlayback should not stop.\r\n\r\n### Actual behavior\r\nPlayback stops.\r\n\r\n### System configuration\r\nRails 6.1.3\r\nRuby 2.6.6p146\r\n",
      "performed_via_github_app": null
      }
    }
    } } as any);
      fixture = TestBed.createComponent(IssueDetailsComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


export class MockRouterSecondary{
  public url = '/issue/41657';

  constructor(urlArgs) {
    this.url = urlArgs;
  }

  navigateByUrl(url: string) {
    return url;
  }
  getCurrentNavigation() {
    return {
      extras: {
        state: {
          item: {
              "url": "https://api.github.com/repos/rails/rails/issues/41657",
              "repository_url": "https://api.github.com/repos/rails/rails",
              "labels_url": "https://api.github.com/repos/rails/rails/issues/41657/labels{/name}",
              "comments_url": "https://api.github.com/repos/rails/rails/issues/41657/comments",
              "events_url": "https://api.github.com/repos/rails/rails/issues/41657/events",
              "html_url": "https://github.com/rails/rails/issues/41657",
              "id": 829013265,
              "node_id": "MDU6SXNzdWU4MjkwMTMyNjU=",
              "number": 41657,
              "title": "ActiveStorage link expires when playing videos",
              "user": {
                "login": "heaven",
                "id": 126732,
                "node_id": "MDQ6VXNlcjEyNjczMg==",
                "avatar_url": "https://avatars.githubusercontent.com/u/126732?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/heaven",
                "html_url": "https://github.com/heaven",
                "followers_url": "https://api.github.com/users/heaven/followers",
                "following_url": "https://api.github.com/users/heaven/following{/other_user}",
                "gists_url": "https://api.github.com/users/heaven/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/heaven/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/heaven/subscriptions",
                "organizations_url": "https://api.github.com/users/heaven/orgs",
                "repos_url": "https://api.github.com/users/heaven/repos",
                "events_url": "https://api.github.com/users/heaven/events{/privacy}",
                "received_events_url": "https://api.github.com/users/heaven/received_events",
                "type": "User",
                "site_admin": false
              },
              "labels": [
          
              ],
              "state": "open",
              "locked": false,
              "assignee": null,
              "assignees": [
          
              ],
              "milestone": null,
              "comments": 0,
              "created_at": "2021-03-11T10:26:14Z",
              "updated_at": "2021-03-11T10:26:14Z",
              "closed_at": null,
              "author_association": "NONE",
              "active_lock_reason": null,
              "body": "### Steps to reproduce\r\nWe upload video files to S3, they're not too large, like 150-250MB. Normally, the connection remains alive after 300 seconds and the playback works as expected but when people use the rewind feature or pause the playback for some time and then restore the content is being downloaded in chunks. In this case, the playback stops at some point with 403 Forbidden.\r\n\r\nWhen using ActiveStorage's proxy the rewind feature doesn't work at all.\r\n\r\n### Expected behavior\r\nPlayback should not stop.\r\n\r\n### Actual behavior\r\nPlayback stops.\r\n\r\n### System configuration\r\nRails 6.1.3\r\nRuby 2.6.6p146\r\n",
              "performed_via_github_app": null
          },
        },
      },
    };
  } 
}

export class MockSerivce{
  getComments(id){
    return of([])
  }
}