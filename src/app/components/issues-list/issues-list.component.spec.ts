import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesListComponent } from './issues-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GetIssuesService } from 'src/app/services/get-issues.service';
import { of } from 'rxjs';
import { IssuesComponent } from 'src/app/common/issues/issues.component';
import { Router } from '@angular/router';

fdescribe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ IssuesListComponent,
      IssuesComponent ],
        providers:[
        { provide: GetIssuesService, useClass: MockSerivce },
        { provide: Router, useValue: new MockRouterSecondary('/issue/41657') },
      ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud call mockervice and get data',()=>{
    spyOn(component,'getlist');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.getlist).toHaveBeenCalled();
  })
  it('should send initial pagenumber as 1',()=>{
    spyOn(component,'getlist');
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.page).toEqual(1);
  });

  it('should have the other component', async(() => {
    const fixture = TestBed.createComponent(IssuesListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-issues')).not.toBe(null);
  }));
});

export class MockRouterSecondary{
  public url = '/issue/41657';

  constructor(urlArgs) {
    this.url = urlArgs;
  }

  navigateByUrl(url: string) {
    return url;
  }
}

export class MockSerivce{
  
  getData(){
    return of([
        {
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
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41656",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41656/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41656/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41656/events",
          "html_url": "https://github.com/rails/rails/pull/41656",
          "id": 828670561,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTkwNDUwNzE2",
          "number": 41656,
          "title": "ActionView: Implement Tag Helpers with Nokogiri",
          "user": {
            "login": "seanpdoyle",
            "id": 2575027,
            "node_id": "MDQ6VXNlcjI1NzUwMjc=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2575027?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/seanpdoyle",
            "html_url": "https://github.com/seanpdoyle",
            "followers_url": "https://api.github.com/users/seanpdoyle/followers",
            "following_url": "https://api.github.com/users/seanpdoyle/following{/other_user}",
            "gists_url": "https://api.github.com/users/seanpdoyle/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/seanpdoyle/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/seanpdoyle/subscriptions",
            "organizations_url": "https://api.github.com/users/seanpdoyle/orgs",
            "repos_url": "https://api.github.com/users/seanpdoyle/repos",
            "events_url": "https://api.github.com/users/seanpdoyle/events{/privacy}",
            "received_events_url": "https://api.github.com/users/seanpdoyle/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 3666649,
              "node_id": "MDU6TGFiZWwzNjY2NjQ5",
              "url": "https://api.github.com/repos/rails/rails/labels/actionview",
              "name": "actionview",
              "color": "d7e102",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-11T03:34:42Z",
          "updated_at": "2021-03-11T03:35:38Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41656",
            "html_url": "https://github.com/rails/rails/pull/41656",
            "diff_url": "https://github.com/rails/rails/pull/41656.diff",
            "patch_url": "https://github.com/rails/rails/pull/41656.patch"
          },
          "body": "# Experiment: Add Nokogiri dependency to Action View\r\n\r\nThere is already an ActionText implementation-side dependency on Nokogiri. ActionText is an optional dependency of Rails, but since 7.0 is a major version bump from 6.1, it feels like an appropriate time to experiment with something like this.\r\n\r\nThis work is in parallel and support of https://github.com/rails/rails/pull/41638. If this proves to be viable, we could consider returning `Nokogiri::XML::Node` extensions from these helpers instead of Strings so that ERB templates or View Helpers can have instance-level access prior to encoding them to response HTML content.\r\n\r\n# Summary\r\n\r\nActionView: Implement Tag Helpers with Nokogiri\r\n---\r\n    \r\nImplement `tag` and `content_tag` helpers as wrappers around\r\n[Nokogiri::XML::Node#to_html][].\r\n\r\n[Nokogiri::XML::Node#to_html]: https://nokogiri.org/rdoc/Nokogiri/XML/Node.html#to_html-instance_method\r\n\r\ns/href/title/ to avoid URL _and_ HTML escaping\r\n---\r\n    \r\nSince Nokogiri is responsible for transforming nodes into HTML, it's\r\nstrict handling of the `[href]` attribute is _URL_ escaping values,\r\nwhich was not occurring in the prior tests.\r\n\r\nIn an effort to exercise the code in the same spirit as the original\r\ncoverage, replace the `href:` assignments with `title:` assignments,\r\nsince they're both attributes but a `title` has no restrictions on\r\nformat or validity.\r\n\r\n### Other Information\r\n\r\nIn its current form, there are still two classes of test failure: escaping and encoding.\r\n\r\n```\r\nFailure:\r\nTagHelperTest#test_content_tag_with_unescaped_conditional_hash_classes [/Users/seanpdoyle/Work/rails/rails/actionview/test/template/tag_helper_test.rb:334]:\r\n--- expected\r\n+++ actual\r\n@@ -1 +1 @@\r\n-\"<p class=\\\"song play>\\\">limelight</p>\"\r\n+\"<p class=\\\"song play&gt;\\\">limelight</p>\"\r\n```\r\n\r\nThere are tests that assert that attributes marked as `#html_safe` won't be escaped, even if they would result in invalid HTML. For example, the failure above is expecting that the `>` character exist in the attribute instead of the `&gt;`, even though `>` would close the opening `<p` portion of the HTML syntax.\r\n\r\n```\r\nFailure:                                                                       \r\nFormCollectionsHelperTest#test_collection_radio_generates_labels_for_non-English_values_correctly [/Users/seanpdoyle/Work/rails/rails/actionview/test/template\r\n/form_collections_helper_test.rb:46]:                                          \r\n<Господин> expected but was                                                                                                                                   <ÐÐ¾ÑÐ¿Ð¾Ð´Ð¸Ð½>..                                                                                                                                          Expected 0 to be >= 1.\r\n\r\nFailure:                                                                                                                                                      \r\nUrlHelperTest#test_link_tag_with_html_safe_string [/Users/seanpdoyle/Work/rails/rails/actionview/test/template/url_helper_test.rb:498]:                       \r\nExpected: <a href=\"/article/Gerd_M%C3%BCller\">Gerd Müller</a>                                                                                                 \r\nActual: <a href=\"/article/Gerd_M%C3%BCller\">Gerd M&Atilde;&frac14;ller</a>  \r\n```\r\n\r\nI'm unsure whether or not Nokogiri's formatting can be configured to account for these situations.\r\n\r\n### Open Questions\r\n\r\nI'm a little unsure about the performance characteristics of instantiating Nokogiri instances instead of allocating and concatenating Strings. My gut tells me that it might be possible for the replacement to be a net-zero change, but I'm curious how the two will compare to one another.\r\n\r\nHaving said that, are there any red flags that I'm missing that are worth considering ahead of time? Any showstoppers you all might have more context and history on?\r\n\r\nCurrently, Action Text has a hard dependency on Nokogiri, but Action View does not. What is the history behind that decision? Does the release of nokogiri@1.11.0 and its bundled pre-compiled libraries make an Action View dependency on Nokogiri more palatable?\r\n\r\nIf this proves to be viable, what other logic and HTML validation code would we be able to drop from the suite of ActionView::Helpers?",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41651",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41651/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41651/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41651/events",
          "html_url": "https://github.com/rails/rails/issues/41651",
          "id": 827953134,
          "node_id": "MDU6SXNzdWU4Mjc5NTMxMzQ=",
          "number": 41651,
          "title": "ActiveRecord::Result#column_types is often missing data",
          "user": {
            "login": "terracatta",
            "id": 315873,
            "node_id": "MDQ6VXNlcjMxNTg3Mw==",
            "avatar_url": "https://avatars.githubusercontent.com/u/315873?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/terracatta",
            "html_url": "https://github.com/terracatta",
            "followers_url": "https://api.github.com/users/terracatta/followers",
            "following_url": "https://api.github.com/users/terracatta/following{/other_user}",
            "gists_url": "https://api.github.com/users/terracatta/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/terracatta/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/terracatta/subscriptions",
            "organizations_url": "https://api.github.com/users/terracatta/orgs",
            "repos_url": "https://api.github.com/users/terracatta/repos",
            "events_url": "https://api.github.com/users/terracatta/events{/privacy}",
            "received_events_url": "https://api.github.com/users/terracatta/received_events",
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
          "created_at": "2021-03-10T15:55:01Z",
          "updated_at": "2021-03-10T16:00:03Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "body": "### Regression in ActiveRecord::Result column_types\r\n\r\nIn my app (which uses PostgreSQL) I have several reporting features that construct TEMP DB views on the fly and query them with ActiveRecord's `exec_query` functionality. When I run these queries, I depend upon the values in the `column_types` attribute of the [ActiveRecord::Result object ](https://api.rubyonrails.org/classes/ActiveRecord/Result.html) to contain all of the column names and associated types.\r\n\r\nAfter upgrading to Rails 6.1 I have noticed most of the time, the `columns_types` hash is now empty. This seems to be caused by this commit, specifically on the line that I have highlighted. https://github.com/rails/rails/commit/71e45582b794d7cdcbd72a93dc2f3c8665859653#diff-e6fd03cad5e3437c76b6c5db106359124dc9feab8341ade39b9ae54af001fac9R58\r\n\r\nThis appears to skip adding certain items to `column_types`. From what I can see, it's clear this was an intentional decision, and that the absence of data in meaningful in some way to other parts of AR. With that said, I believe this attribute is a public-enough API surface that it should always reflect all columns in the query.\r\n\r\nAs you might expect, it's hard to understand the context of a SQL query result without knowing what data types are for each column. I think we should keep that context in the `ActiveRecord::Result` object and restore the original behavior.\r\n\r\n### Steps to reproduce\r\n\r\n1. In a rails console run `result = ActiveRecord::Base.connection.exec_query(\"SELECT 1 AS test\")`\r\n1. Run `result.column_types`\r\n\r\n### Expected behavior\r\nI expect that `result.column_type` will return something like `=> {\"test\"=>#<ActiveModel::Type::Integer:0x00007fc9fbb6fe50 @limit=4, @precision=nil, @range=-2147483648...2147483648, @scale=nil>}`\r\n\r\n### Actual behavior\r\nAfter this commit 71e45582b794d7cdcbd72a93dc2f3c8665859653, `result.column_type` returns `{}`\r\n\r\n### System configuration\r\n**Rails version**:Rails 6.1.3\r\n**Ruby version**: ruby 2.7.2p137\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41650",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41650/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41650/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41650/events",
          "html_url": "https://github.com/rails/rails/issues/41650",
          "id": 827901541,
          "node_id": "MDU6SXNzdWU4Mjc5MDE1NDE=",
          "number": 41650,
          "title": "slow perfomance method `sum` for enumerable, array",
          "user": {
            "login": "ermolaev",
            "id": 938305,
            "node_id": "MDQ6VXNlcjkzODMwNQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/938305?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ermolaev",
            "html_url": "https://github.com/ermolaev",
            "followers_url": "https://api.github.com/users/ermolaev/followers",
            "following_url": "https://api.github.com/users/ermolaev/following{/other_user}",
            "gists_url": "https://api.github.com/users/ermolaev/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ermolaev/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ermolaev/subscriptions",
            "organizations_url": "https://api.github.com/users/ermolaev/orgs",
            "repos_url": "https://api.github.com/users/ermolaev/repos",
            "events_url": "https://api.github.com/users/ermolaev/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ermolaev/received_events",
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
          "created_at": "2021-03-10T15:19:54Z",
          "updated_at": "2021-03-10T15:39:53Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\n```ruby\r\n> irb\r\nrequire 'benchmark/ips'\r\nnum_arr = (1..10).to_a;\r\nC = Struct.new(:v);\r\nobj_arr = (1..10).map { |i| C.new(i) };\r\n\r\nBenchmark.ips do |x|\r\n  x.report(\"sum num_arr\") do |n|\r\n    while n > 0\r\n      num_arr.sum\r\n      n-=1\r\n    end\r\n  end\r\n  x.report(\"sum obj_arr\") do |n|\r\n    while n > 0\r\n      obj_arr.sum(&:v)\r\n      n-=1\r\n    end\r\n  end\r\n\r\n  x.compare!\r\nend;\r\nCalculating -------------------------------------\r\n         sum num_arr     17.615M (± 4.4%) i/s -     88.270M in   5.021204s\r\n         sum obj_arr      2.645M (± 3.8%) i/s -     13.292M in   5.033431s\r\n```\r\n\r\n```ruby\r\n> rails c\r\nrequire 'benchmark/ips'\r\nnum_arr = (1..10).to_a;\r\nC = Struct.new(:v);\r\nobj_arr = (1..10).map { |i| C.new(i) };\r\n\r\nBenchmark.ips do |x|\r\n  x.report(\"sum num_arr\") do |n|\r\n    while n > 0\r\n      num_arr.sum\r\n      n-=1\r\n    end\r\n  end\r\n  x.report(\"sum obj_arr\") do |n|\r\n    while n > 0\r\n      obj_arr.sum(&:v)\r\n      n-=1\r\n    end\r\n  end\r\n\r\n  x.compare!\r\nend;\r\n\r\nCalculating -------------------------------------\r\n         sum num_arr      5.277M (± 4.0%) i/s -     26.518M in   5.034190s\r\n         sum obj_arr    911.786k (± 5.6%) i/s -      4.626M in   5.090562\r\n```\r\n\r\n### Expected behavior\r\nspeed should be equal\r\n\r\n### Actual behavior\r\nin rails app code very slow\r\n```\r\nsum num_arr 17.6/5.2 => 3.3846153846153846\r\nsum obj_arr 2645/911.0 => 2.903402854006586\r\n```\r\n\r\n### System configuration\r\n**Rails version**: 6.0\r\n\r\n**Ruby version**: 2.5\r\n\r\nI think we may remove this monkey patch\r\n\r\nhttps://github.com/rails/rails/blob/4607f13c88fdc773a3ee69101bcb6ebe41ed20ce/activesupport/lib/active_support/core_ext/enumerable.rb#L53\r\n\r\nhttps://github.com/rails/rails/blob/4607f13c88fdc773a3ee69101bcb6ebe41ed20ce/activesupport/lib/active_support/core_ext/enumerable.rb#L265\r\n\r\n### The next examples very strange\r\nhttps://github.com/rails/rails/blob/4607f13c88fdc773a3ee69101bcb6ebe41ed20ce/activesupport/lib/active_support/core_ext/enumerable.rb#L47\r\nreplaced by `['foo', 'bar'].join`\r\n\r\nhttps://github.com/rails/rails/blob/4607f13c88fdc773a3ee69101bcb6ebe41ed20ce/activesupport/lib/active_support/core_ext/enumerable.rb#L48\r\nreplaced by `[[1, 2], [3, 1, 5]].flatten`\r\n\r\n---\r\n\r\nmethod sum added in rails in the 2006 year https://github.com/rails/rails/commit/236c7325df4ca2783c92dffc0f0b9592f822d95a\r\n\r\nbut ruby added this method in version 2.4, and now rails require minimum ruby version 2.5, we may remove it from rails",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41649",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41649/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41649/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41649/events",
          "html_url": "https://github.com/rails/rails/pull/41649",
          "id": 827693787,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg5NTc4NjY4",
          "number": 41649,
          "title": "WIP: `belongs_to` w/ `counter_cache, touch: true` doesn't execute `after_commit` callback on parent model",
          "user": {
            "login": "vfonic",
            "id": 67437,
            "node_id": "MDQ6VXNlcjY3NDM3",
            "avatar_url": "https://avatars.githubusercontent.com/u/67437?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/vfonic",
            "html_url": "https://github.com/vfonic",
            "followers_url": "https://api.github.com/users/vfonic/followers",
            "following_url": "https://api.github.com/users/vfonic/following{/other_user}",
            "gists_url": "https://api.github.com/users/vfonic/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/vfonic/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/vfonic/subscriptions",
            "organizations_url": "https://api.github.com/users/vfonic/orgs",
            "repos_url": "https://api.github.com/users/vfonic/repos",
            "events_url": "https://api.github.com/users/vfonic/events{/privacy}",
            "received_events_url": "https://api.github.com/users/vfonic/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107191,
              "node_id": "MDU6TGFiZWwxMDcxOTE=",
              "url": "https://api.github.com/repos/rails/rails/labels/activerecord",
              "name": "activerecord",
              "color": "0b02e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-10T12:54:46Z",
          "updated_at": "2021-03-10T13:56:23Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41649",
            "html_url": "https://github.com/rails/rails/pull/41649",
            "diff_url": "https://github.com/rails/rails/pull/41649.diff",
            "patch_url": "https://github.com/rails/rails/pull/41649.patch"
          },
          "body": "NOTE: This is not ready to be merged! :)\n\n### Summary\n\nAs per API documentation:\nhttps://api.rubyonrails.org/v6.0.3.5/classes/ActiveRecord/Persistence.html#method-i-touch\n\nI expected that `counter_cache, touch: true` would execute `after_commit` callback on parent model.\n\nHowever, that doesn't seem to be the case. The `counter_cache` column is properly updated in the database table (of a parent model) and, since `touch: true` is specified it also updates the `updated_at` column, as expected. However, it doesn't execute `after_commit` callback on parent model.\n\nI've created a repro test case (I'm not very familiar with MiniTest, pardon the ugliness of the test code).\nIf you uncommend the `after_commit` in the child model (`ReplyWithTouch`), it will correctly \"touch\" the `TopicWithAfterCommitCallback` and execute `after_commit` callback on parent model (`TopicWithAfterCommitCallback`).",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41647",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41647/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41647/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41647/events",
          "html_url": "https://github.com/rails/rails/issues/41647",
          "id": 827130304,
          "node_id": "MDU6SXNzdWU4MjcxMzAzMDQ=",
          "number": 41647,
          "title": "Is `logger` method introduced by ActiveSupport::Configurable public API?",
          "user": {
            "login": "mtsmfm",
            "id": 1796864,
            "node_id": "MDQ6VXNlcjE3OTY4NjQ=",
            "avatar_url": "https://avatars.githubusercontent.com/u/1796864?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/mtsmfm",
            "html_url": "https://github.com/mtsmfm",
            "followers_url": "https://api.github.com/users/mtsmfm/followers",
            "following_url": "https://api.github.com/users/mtsmfm/following{/other_user}",
            "gists_url": "https://api.github.com/users/mtsmfm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/mtsmfm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/mtsmfm/subscriptions",
            "organizations_url": "https://api.github.com/users/mtsmfm/orgs",
            "repos_url": "https://api.github.com/users/mtsmfm/repos",
            "events_url": "https://api.github.com/users/mtsmfm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/mtsmfm/received_events",
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
          "comments": 1,
          "created_at": "2021-03-10T05:18:36Z",
          "updated_at": "2021-03-10T23:29:42Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "body": "`ActionController::Base` and `ActiveRecord::Base` have `logger` method because it includes `ActiveSupport::Configurable` and it sets logger.\r\n\r\nIn Rails guides, in some place it uses `logger` directly:\r\n\r\nhttps://github.com/rails/rails/blob/dc7817cb42768ad01d69d5f9b0023f556760cb06/guides/source/debugging_rails_applications.md#L161-L167\r\n\r\nAnd other uses `Rails.logger`:\r\n\r\nhttps://github.com/rails/rails/blob/dc7817cb42768ad01d69d5f9b0023f556760cb06/guides/source/upgrading_ruby_on_rails.md#L193-L200\r\n\r\nI'd like to know which API is preferable and considered as a public API to prepare possibility of breaking changes in the future.\r\n\r\nIf my understanding is correct, all methods listed in https://api.rubyonrails.org/ are considered as public API but I can't find `ActionController::Base#logger`, `ActiveRecord::Base#logger` and `Rails.logger`.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41644",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41644/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41644/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41644/events",
          "html_url": "https://github.com/rails/rails/issues/41644",
          "id": 826689497,
          "node_id": "MDU6SXNzdWU4MjY2ODk0OTc=",
          "number": 41644,
          "title": "Set Cache-Control: public, no-cache with etag",
          "user": {
            "login": "collimarco",
            "id": 90962,
            "node_id": "MDQ6VXNlcjkwOTYy",
            "avatar_url": "https://avatars.githubusercontent.com/u/90962?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/collimarco",
            "html_url": "https://github.com/collimarco",
            "followers_url": "https://api.github.com/users/collimarco/followers",
            "following_url": "https://api.github.com/users/collimarco/following{/other_user}",
            "gists_url": "https://api.github.com/users/collimarco/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/collimarco/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/collimarco/subscriptions",
            "organizations_url": "https://api.github.com/users/collimarco/orgs",
            "repos_url": "https://api.github.com/users/collimarco/repos",
            "events_url": "https://api.github.com/users/collimarco/events{/privacy}",
            "received_events_url": "https://api.github.com/users/collimarco/received_events",
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
          "created_at": "2021-03-09T21:52:43Z",
          "updated_at": "2021-03-09T21:52:43Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\n\r\n```\r\nfresh_when etag: @resource, public: true\r\n# => Cache-control: public\r\n# => ETag: ...\r\n```\r\n\r\nThe problem is that there is no way to add `no-cache`.\r\n\r\n**Sometimes you need to use `Cache-Control: public, no-cache`, with an etag, in order to allow caching in the intermediate / proxy caches, while also requiring the caches to re-validate the request with etags.**\r\n\r\nFor example Cloudflare suggests:\r\n\r\n> Cache an asset in client and proxy caches, but prefer revalidation when served:\r\n> Cache-Control: public, no-cache\r\n> https://support.cloudflare.com/hc/en-us/articles/115003206852-Understanding-Origin-Cache-Control\r\n\r\nIf you don't add `no-cache`, the proxy or the browser may show a stale response to the user (and does not use the etag for re-validation).\r\n\r\n### Expected behavior\r\n\r\n`fresh_when` should set `Cache-Control: public, no-cache` instead of `Cache-control: public`... otherwise what is the meaning of an etag if it's not used?\r\n\r\nOr at least there should be a way (an option) to set `Cache-Control: public, no-cache` when using `fresh_when`. \r\n\r\n### Actual behavior\r\n\r\nIf we keep the current configuration, browsers use the unpredictable / heuristic behavior in order to decide when to contact the server again, so `etag` is not reliable / is not always checked.\r\n\r\n### System configuration\r\n\r\n**Rails version**: 6.1\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41643",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41643/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41643/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41643/events",
          "html_url": "https://github.com/rails/rails/pull/41643",
          "id": 826673510,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg4NjU2NDA1",
          "number": 41643,
          "title": "Nudge engines to be compatible with include_all_helpers",
          "user": {
            "login": "etiennebarrie",
            "id": 3535,
            "node_id": "MDQ6VXNlcjM1MzU=",
            "avatar_url": "https://avatars.githubusercontent.com/u/3535?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/etiennebarrie",
            "html_url": "https://github.com/etiennebarrie",
            "followers_url": "https://api.github.com/users/etiennebarrie/followers",
            "following_url": "https://api.github.com/users/etiennebarrie/following{/other_user}",
            "gists_url": "https://api.github.com/users/etiennebarrie/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/etiennebarrie/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/etiennebarrie/subscriptions",
            "organizations_url": "https://api.github.com/users/etiennebarrie/orgs",
            "repos_url": "https://api.github.com/users/etiennebarrie/repos",
            "events_url": "https://api.github.com/users/etiennebarrie/events{/privacy}",
            "received_events_url": "https://api.github.com/users/etiennebarrie/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107195,
              "node_id": "MDU6TGFiZWwxMDcxOTU=",
              "url": "https://api.github.com/repos/rails/rails/labels/railties",
              "name": "railties",
              "color": "8BE06E",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-09T21:39:05Z",
          "updated_at": "2021-03-10T19:25:26Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41643",
            "html_url": "https://github.com/rails/rails/pull/41643",
            "diff_url": "https://github.com/rails/rails/pull/41643.diff",
            "patch_url": "https://github.com/rails/rails/pull/41643.patch"
          },
          "body": "When applications use this configuration setting, it may break an Engine relying implicitly on all helpers being included.\r\n\r\nBy setting the option in the dummy app, we help engine authors be compatible with this setting.\r\n\r\nCo-authored-by: Adrianna Chang <adrianna.chang@shopify.com>\r\n\r\n### Summary\r\n\r\nWe had this issue in https://github.com/Shopify/maintenance_tasks/pull/337.\r\n\r\nApplication authors can set this configuration, and engines either need to only use helpers matching the controllers, or set `helper :all` in their `ApplicationController`. We decided not to put `helper :all` in the generated `ApplicationController` in a mountable plugin because it's not documented but that could have been another solution.\r\n\r\n\r\n### Other Information\r\n\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41642",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41642/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41642/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41642/events",
          "html_url": "https://github.com/rails/rails/pull/41642",
          "id": 825768411,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg3ODMwNDAy",
          "number": 41642,
          "title": "Handle postgresql database not found error more gracefully",
          "user": {
            "login": "bitfurry",
            "id": 2116435,
            "node_id": "MDQ6VXNlcjIxMTY0MzU=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2116435?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bitfurry",
            "html_url": "https://github.com/bitfurry",
            "followers_url": "https://api.github.com/users/bitfurry/followers",
            "following_url": "https://api.github.com/users/bitfurry/following{/other_user}",
            "gists_url": "https://api.github.com/users/bitfurry/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bitfurry/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bitfurry/subscriptions",
            "organizations_url": "https://api.github.com/users/bitfurry/orgs",
            "repos_url": "https://api.github.com/users/bitfurry/repos",
            "events_url": "https://api.github.com/users/bitfurry/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bitfurry/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107191,
              "node_id": "MDU6TGFiZWwxMDcxOTE=",
              "url": "https://api.github.com/repos/rails/rails/labels/activerecord",
              "name": "activerecord",
              "color": "0b02e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 3,
          "created_at": "2021-03-09T11:26:09Z",
          "updated_at": "2021-03-09T12:54:51Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41642",
            "html_url": "https://github.com/rails/rails/pull/41642",
            "diff_url": "https://github.com/rails/rails/pull/41642.diff",
            "patch_url": "https://github.com/rails/rails/pull/41642.patch"
          },
          "body": "### Summary\r\n\r\nFixes #41606 \r\n\r\n```ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.new_client``` method had this logic to handle errors such way that if error message had ```dbName``` then raise exception  ```ActiveRecord::NoDatabaseError```\r\n\r\nBut there can be scenarios when ```dbName``` and ```host``` values  are same and ```host``` value is invalid.\r\n\r\nSo in that scenario actual error from ```PG.connect``` method is related to unable to establish connection.\r\n\r\nBut error returned was  ```ActiveRecord::NoDatabaseError```\r\n\r\n\r\nI have made changes to return ```ActiveRecord::NoDatabaseError``` in more explicit scenario.\r\n\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41638",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41638/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41638/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41638/events",
          "html_url": "https://github.com/rails/rails/pull/41638",
          "id": 824675327,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg2ODcwMzIz",
          "number": 41638,
          "title": "TokenList and Attributes Objects",
          "user": {
            "login": "seanpdoyle",
            "id": 2575027,
            "node_id": "MDQ6VXNlcjI1NzUwMjc=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2575027?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/seanpdoyle",
            "html_url": "https://github.com/seanpdoyle",
            "followers_url": "https://api.github.com/users/seanpdoyle/followers",
            "following_url": "https://api.github.com/users/seanpdoyle/following{/other_user}",
            "gists_url": "https://api.github.com/users/seanpdoyle/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/seanpdoyle/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/seanpdoyle/subscriptions",
            "organizations_url": "https://api.github.com/users/seanpdoyle/orgs",
            "repos_url": "https://api.github.com/users/seanpdoyle/repos",
            "events_url": "https://api.github.com/users/seanpdoyle/events{/privacy}",
            "received_events_url": "https://api.github.com/users/seanpdoyle/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 3666649,
              "node_id": "MDU6TGFiZWwzNjY2NjQ5",
              "url": "https://api.github.com/repos/rails/rails/labels/actionview",
              "name": "actionview",
              "color": "d7e102",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 1,
          "created_at": "2021-03-08T15:33:33Z",
          "updated_at": "2021-03-08T22:38:19Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41638",
            "html_url": "https://github.com/rails/rails/pull/41638",
            "diff_url": "https://github.com/rails/rails/pull/41638.diff",
            "patch_url": "https://github.com/rails/rails/pull/41638.patch"
          },
          "body": "### Summary\r\n\r\nExpend `token_list` and `tag.attributes` helpers to construct\r\n`Attributes` and `TokenList` instances that are smart about merging with\r\nother values turning themselves into HTML.\r\n\r\nFor example, consider the following helpers:\r\n\r\n```ruby\r\nmodule ApplicationHelper\r\n  def feed_section\r\n    class_names \"max-w-prose max-w-sm w-full lg:w-1/3\"\r\n  end\r\n\r\n  def button\r\n    class_names \"py-2 px-4 font-semibold shadow-md focus:outline-none focus:ring-2\"\r\n  end\r\n\r\n  def primary_button\r\n    button | \"bg-black rounded-lg text-white hover:bg-yellow-300 focus:ring-yellow-300 focus:ring-opacity-75\"\r\n  end\r\n\r\n  def pagination_controller\r\n    tag.attributes data: { controller: \"pagination\", action: \"turbo:before-cache@document->pagination#preserveScroll turbo:before-render@document->pagination#injectIntoVisit\" }\r\n  end\r\n\r\n  def sorted_controller\r\n    tag.attributes data: { controller: \"sorted\", sorted_attribute_name_value: \"data-code\" }\r\n  end\r\nend\r\n```\r\n\r\nUsing those helpers (or some other means of declaring re-usable\r\n`class_names`, `token_list`, or `tag.attributes` calls), consider the\r\nfollowing diffs:\r\n\r\n```diff\r\n <% if page.before_last? %>\r\n   <div class=\"hidden last-of-type:flex justify-center my-6\">\r\n-    <%= link_to url_for(page: page.next_param, q: params[:q]), rel: \"next\", class: \"py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75\" do %>\r\n+    <%= link_to url_for(page: page.next_param, q: params[:q]), rel: \"next\", class: primary_button do %>\r\n       Load more\r\n     <% end %>\r\n   </div>\r\n\r\n-  <%= form.button class: \"colspan-2 py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-75\" do %>\r\n+  <%= form.button class: primary_button | \"colspan-2\" do %>\r\n     Sign in\r\n   <% end %>\r\n <% end %>\r\n\r\n-<section id=\"entries\" class=\"max-w-prose max-w-sm w-full lg:w-1/3\" data-controller=\"pagination sorted\" data-sorted-attribute-name-value=\"data-code\" data-action=\"turbo:before-cache@document->pagination#preserveScroll turbo:before-render@document->pagination#injectNextPageIntoBody\">\r\n+<section id=\"entries\" class=\"<%= feed_section %>\" <%= pagination_controller | sorted_controller %>>\r\n   <%= render partial: \"entries/page\", object: @page %>\r\n </section>\r\n```\r\n\r\n### Other Information\r\n\r\nIf we're interested in supporting this, there is some other related work:\r\n\r\n* If there are scenarios where a view wants to opt-out of the values that have been iteratively built up to that point, it might be useful to declare `class_names!`, `token_list!`, and `tag.attributes!` variants to construct instances that don't merge and instead reset the values passed: \r\n```ruby\r\nclass_names(\"font-semibold\") | class_names!(\"font-bold\") #=> \"font-bold\"\r\n```\r\n* If an application's shared `class_names` and `tag.attributes` calls are declared in a Helper module (like `ApplicationHelper`), changes to them wouldn't be visible to Action View's fragment caching calculations. This is a problem if their call sites don't include a fragment cache busting comment. **Is there currently other work in-flight to incorporate Helper module source code into cache key generation the way that view partial source code is incorporated?**\r\n* We could potentially push this even further and implement [`TagHelper.build_tag_values`](https://github.com/rails/rails/blob/90d0b42bd8206e942597b64163837287caf7119d/actionview/lib/action_view/helpers/tag_helper.rb#L377-L395) and [`TagBuilder#tag_options`](https://github.com/rails/rails/blob/90d0b42bd8206e942597b64163837287caf7119d/actionview/lib/action_view/helpers/tag_helper.rb#L82-L122), [`TagBuilder#boolean_tag_option`](https://github.com/rails/rails/blob/90d0b42bd8206e942597b64163837287caf7119d/actionview/lib/action_view/helpers/tag_helper.rb#L124-L126), [`TagBuilder#tag_option`](https://github.com/rails/rails/blob/90d0b42bd8206e942597b64163837287caf7119d/actionview/lib/action_view/helpers/tag_helper.rb#L128-L140), [`TagBuilder#prefix_tag_option`](https://github.com/rails/rails/blob/90d0b42bd8206e942597b64163837287caf7119d/actionview/lib/action_view/helpers/tag_helper.rb#L143-L149), and the supporting [constant declarations](https://github.com/rails/rails/blob/90d0b42bd8206e942597b64163837287caf7119d/actionview/lib/action_view/helpers/tag_helper.rb#L18-L42) in terms of the new `Attributes` class, (perhaps in a file or namespace of its own).\r\n\r\n**Tangent:** Even bigger picture\r\n---\r\n\r\nI'm curious if transitioning Action View's `tag` and `content_tag` helpers from String concatenation into an architecture that outsourced element and attribute construction to something like Nokogiri or Nokogumbo would reduce Action View's footprint. For example, if calls to helpers like `button_tag` or `form_with` returned Nokogiri `Node` instances that knew how to turn themselves into HTML, dealing with merging attribute and DOMTokenList values ([denoted as `kwattr_*` for \"keyword attributes\" in Nokogiri](https://nokogiri.org/rdoc/Nokogiri/XML/Node.html#kwattr_add-instance_method)) might be more straightforward to implement.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41631",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41631/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41631/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41631/events",
          "html_url": "https://github.com/rails/rails/pull/41631",
          "id": 823861215,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg2MjA5NjQx",
          "number": 41631,
          "title": "[ImgBot] Optimize images",
          "user": {
            "login": "jbampton",
            "id": 418747,
            "node_id": "MDQ6VXNlcjQxODc0Nw==",
            "avatar_url": "https://avatars.githubusercontent.com/u/418747?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/jbampton",
            "html_url": "https://github.com/jbampton",
            "followers_url": "https://api.github.com/users/jbampton/followers",
            "following_url": "https://api.github.com/users/jbampton/following{/other_user}",
            "gists_url": "https://api.github.com/users/jbampton/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/jbampton/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/jbampton/subscriptions",
            "organizations_url": "https://api.github.com/users/jbampton/orgs",
            "repos_url": "https://api.github.com/users/jbampton/repos",
            "events_url": "https://api.github.com/users/jbampton/events{/privacy}",
            "received_events_url": "https://api.github.com/users/jbampton/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 1174770998,
              "node_id": "MDU6TGFiZWwxMTc0NzcwOTk4",
              "url": "https://api.github.com/repos/rails/rails/labels/actionmailbox",
              "name": "actionmailbox",
              "color": "f4a6cb",
              "default": false,
              "description": ""
            },
            {
              "id": 107188,
              "node_id": "MDU6TGFiZWwxMDcxODg=",
              "url": "https://api.github.com/repos/rails/rails/labels/actionmailer",
              "name": "actionmailer",
              "color": "8B00FC",
              "default": false,
              "description": null
            },
            {
              "id": 107189,
              "node_id": "MDU6TGFiZWwxMDcxODk=",
              "url": "https://api.github.com/repos/rails/rails/labels/actionpack",
              "name": "actionpack",
              "color": "FFF700",
              "default": false,
              "description": null
            },
            {
              "id": 1180817762,
              "node_id": "MDU6TGFiZWwxMTgwODE3NzYy",
              "url": "https://api.github.com/repos/rails/rails/labels/actiontext",
              "name": "actiontext",
              "color": "3bc667",
              "default": false,
              "description": ""
            },
            {
              "id": 664533972,
              "node_id": "MDU6TGFiZWw2NjQ1MzM5NzI=",
              "url": "https://api.github.com/repos/rails/rails/labels/activestorage",
              "name": "activestorage",
              "color": "bfd4f2",
              "default": false,
              "description": null
            },
            {
              "id": 150377,
              "node_id": "MDU6TGFiZWwxNTAzNzc=",
              "url": "https://api.github.com/repos/rails/rails/labels/docs",
              "name": "docs",
              "color": "02d7e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-07T08:23:22Z",
          "updated_at": "2021-03-07T08:23:25Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41631",
            "html_url": "https://github.com/rails/rails/pull/41631",
            "diff_url": "https://github.com/rails/rails/pull/41631.diff",
            "patch_url": "https://github.com/rails/rails/pull/41631.patch"
          },
          "body": "*Total -- 3,476.55kb -> 3,157.45kb (9.18%)\r\n\r\n/activestorage/test/fixtures/files/image.gif -- 1.98kb -> 0.04kb (97.88%)\r\n/guides/assets/images/active_record_querying/bookstore_models.png -- 96.74kb -> 34.15kb (64.7%)\r\n/activestorage/test/fixtures/files/icon.svg -- 1.54kb -> 1.33kb (13.67%)\r\n/actionmailer/test/fixtures/attachments/foo.jpg -- 1.98kb -> 1.78kb (9.96%)\r\n/actionmailer/test/fixtures/attachments/test.jpg -- 1.98kb -> 1.78kb (9.96%)\r\n/actionpack/test/fixtures/multipart/ruby_on_rails.jpg -- 44.08kb -> 39.84kb (9.62%)\r\n/actionmailbox/test/fixtures/files/avatar1.jpeg -- 20.05kb -> 18.43kb (8.09%)\r\n/activestorage/test/fixtures/files/racecar_rotated.jpg -- 1,097.71kb -> 1,015.11kb (7.53%)\r\n/activestorage/test/fixtures/files/racecar.jpg -- 1,097.72kb -> 1,015.11kb (7.53%)\r\n/actiontext/test/fixtures/files/racecar.jpg -- 1,097.72kb -> 1,015.11kb (7.53%)\r\n/actionmailbox/test/fixtures/files/avatar2.jpeg -- 12.39kb -> 12.12kb (2.16%)\r\n/guides/assets/images/rails_guides_logo.gif -- 2.65kb -> 2.64kb (0.29%)\r\n\r\nSigned-off-by: ImgBotApp <ImgBotHelp@gmail.com>\r\nSigned-off-by: John Bampton <jbampton@gmail.com>\r\n\r\n\r\n\r\n\r\n\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41628",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41628/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41628/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41628/events",
          "html_url": "https://github.com/rails/rails/pull/41628",
          "id": 823644330,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg2MDYwNDEz",
          "number": 41628,
          "title": "upsert_all fails cleanly for MySQL",
          "user": {
            "login": "coding-chimp",
            "id": 464565,
            "node_id": "MDQ6VXNlcjQ2NDU2NQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/464565?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/coding-chimp",
            "html_url": "https://github.com/coding-chimp",
            "followers_url": "https://api.github.com/users/coding-chimp/followers",
            "following_url": "https://api.github.com/users/coding-chimp/following{/other_user}",
            "gists_url": "https://api.github.com/users/coding-chimp/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/coding-chimp/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/coding-chimp/subscriptions",
            "organizations_url": "https://api.github.com/users/coding-chimp/orgs",
            "repos_url": "https://api.github.com/users/coding-chimp/repos",
            "events_url": "https://api.github.com/users/coding-chimp/events{/privacy}",
            "received_events_url": "https://api.github.com/users/coding-chimp/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107191,
              "node_id": "MDU6TGFiZWwxMDcxOTE=",
              "url": "https://api.github.com/repos/rails/rails/labels/activerecord",
              "name": "activerecord",
              "color": "0b02e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 1,
          "created_at": "2021-03-06T13:09:22Z",
          "updated_at": "2021-03-09T16:58:46Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41628",
            "html_url": "https://github.com/rails/rails/pull/41628",
            "diff_url": "https://github.com/rails/rails/pull/41628.diff",
            "patch_url": "https://github.com/rails/rails/pull/41628.patch"
          },
          "body": "### Summary\r\n\r\nThis makes sure `upsert_all` with `unique_by` is failing cleanly when being used with MySQL.\r\n\r\nIt's currently failing with a not very helpful error:\r\n\r\n```\r\nNoMethodError: undefined method `columns' for :isbn:Symbol\r\n    /Users/codechimp/projects/rails/activerecord/lib/active_record/insert_all.rb:120:in `unique_by_columns'\r\n    /Users/codechimp/projects/rails/activerecord/lib/active_record/insert_all.rb:39:in `updatable_columns'\r\n    /Users/codechimp/projects/rails/activerecord/lib/active_record/insert_all.rb:26:in `initialize'\r\n    /Users/codechimp/projects/rails/activerecord/lib/active_record/persistence.rb:243:in `new'\r\n    /Users/codechimp/projects/rails/activerecord/lib/active_record/persistence.rb:243:in `upsert_all'\r\n    test/cases/insert_all_test.rb:473:in `test_upsert_all_with_unique_by_fails_cleanly_for_adapters_not_supporting_insert_conflict_target'\r\n```\r\n\r\nWhen using `insert_all` the `ensure_valid_options_for_connection!` method would throw a proper exception but for `upset_all` this method is never reached.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41627",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41627/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41627/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41627/events",
          "html_url": "https://github.com/rails/rails/pull/41627",
          "id": 823387835,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg1ODU0MDQ4",
          "number": 41627,
          "title": "Write RichText#body column as plain-text",
          "user": {
            "login": "seanpdoyle",
            "id": 2575027,
            "node_id": "MDQ6VXNlcjI1NzUwMjc=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2575027?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/seanpdoyle",
            "html_url": "https://github.com/seanpdoyle",
            "followers_url": "https://api.github.com/users/seanpdoyle/followers",
            "following_url": "https://api.github.com/users/seanpdoyle/following{/other_user}",
            "gists_url": "https://api.github.com/users/seanpdoyle/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/seanpdoyle/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/seanpdoyle/subscriptions",
            "organizations_url": "https://api.github.com/users/seanpdoyle/orgs",
            "repos_url": "https://api.github.com/users/seanpdoyle/repos",
            "events_url": "https://api.github.com/users/seanpdoyle/events{/privacy}",
            "received_events_url": "https://api.github.com/users/seanpdoyle/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 1180817762,
              "node_id": "MDU6TGFiZWwxMTgwODE3NzYy",
              "url": "https://api.github.com/repos/rails/rails/labels/actiontext",
              "name": "actiontext",
              "color": "3bc667",
              "default": false,
              "description": ""
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-05T20:23:55Z",
          "updated_at": "2021-03-06T14:29:56Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41627",
            "html_url": "https://github.com/rails/rails/pull/41627",
            "diff_url": "https://github.com/rails/rails/pull/41627.diff",
            "patch_url": "https://github.com/rails/rails/pull/41627.patch"
          },
          "body": "\r\n### Summary\r\n\r\nWrite a `RichText`'s content as plain-text to the database to support\r\nfull-text search without HTML debris.\r\n\r\nOnce the column is available, it can be full-text searched. For example,\r\nto add support in Postgres, we can index that column as a [tsvector][]:\r\n\r\n```ruby\r\nclass AddPlainTextBodyIndexToActionTextRichTexts < ActiveRecord::Migration[7.0]\r\n  def change\r\n    change_table :action_text_rich_texts do |t|\r\n      t.index \"to_tsvector('english', plain_text_body)\", using: :gin, name: \"tsvector_plain_text_body_idx\"\r\n    end\r\n  end\r\nend\r\n```\r\n\r\nOnce the column exists, it can be queried through Active Record:\r\n\r\n```ruby\r\nActiveSupport.on_load :action_text_rich_text do\r\n  include(Module.new do\r\n    scope :with_body_containing, ->(query) { where <<~SQL, query: query }\r\n      to_tsvector('english', plain_text_body) @@ websearch_to_tsquery(:query)\r\n    SQL\r\n  end)\r\nend\r\n\r\nclass Message < ApplicationRecord\r\n  has_rich_text :content\r\n\r\n  scope :containing, ->(query) { joins(:rich_text_content).merge(ActionText::RichText.with_body_containing(query)) }\r\nend\r\n```\r\n\r\nWhat I'm not sure about:\r\n---\r\n\r\n* Should this be behind a generator flag?\r\n* Can we Do The Right Thing :tm: at the generator level when detecting\r\n  the Active Record adapter? For example, generate the code above for\r\n  PG, something similar for MySQL (if possible), something for SQLite?\r\n* Does if we proceed, should this be a change to the existing migration,\r\n  or does backward support dictate that we add a new migration for\r\n  upgrading?\r\n* If this is too invasive of a change, would it be better as a PR to the\r\n  Action Text or Active Record guides? Clients would need to add the\r\n  column and a variation of the callback themselves. Is re-opening the\r\n  classes the best way to do that?\r\n\r\n[tsvector]: https://www.postgresql.org/docs/13/textsearch-controls.html\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41626",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41626/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41626/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41626/events",
          "html_url": "https://github.com/rails/rails/pull/41626",
          "id": 823386074,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg1ODUyNTgx",
          "number": 41626,
          "title": "Reiterate the SQL injection warning in find_by_sql API doc",
          "user": {
            "login": "angdraug",
            "id": 829468,
            "node_id": "MDQ6VXNlcjgyOTQ2OA==",
            "avatar_url": "https://avatars.githubusercontent.com/u/829468?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/angdraug",
            "html_url": "https://github.com/angdraug",
            "followers_url": "https://api.github.com/users/angdraug/followers",
            "following_url": "https://api.github.com/users/angdraug/following{/other_user}",
            "gists_url": "https://api.github.com/users/angdraug/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/angdraug/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/angdraug/subscriptions",
            "organizations_url": "https://api.github.com/users/angdraug/orgs",
            "repos_url": "https://api.github.com/users/angdraug/repos",
            "events_url": "https://api.github.com/users/angdraug/events{/privacy}",
            "received_events_url": "https://api.github.com/users/angdraug/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107191,
              "node_id": "MDU6TGFiZWwxMDcxOTE=",
              "url": "https://api.github.com/repos/rails/rails/labels/activerecord",
              "name": "activerecord",
              "color": "0b02e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-05T20:20:42Z",
          "updated_at": "2021-03-05T20:20:45Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41626",
            "html_url": "https://github.com/rails/rails/pull/41626",
            "diff_url": "https://github.com/rails/rails/pull/41626.diff",
            "patch_url": "https://github.com/rails/rails/pull/41626.patch"
          },
          "body": "### Summary\r\n\r\nActiveRecord::Querying.find_by_sql is the method that people new to Rails (who can't be counted on to have read the Rails security guide) are the most likely to reach for when composing or optimizing complex database queries. Having a warning about SQL injection in this method's API doc might discourage unsafe use of this method and remind people that this is a use case where Rails is not going to hold their hand.\r\n\r\n### Other Information\r\n\r\nActiveRecord::QueryMethods.where already includes a similar warning. I am not sure if there's other methods that similarly leave room for SQL injection and should also warn against unsafe string interpolation from user input.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41625",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41625/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41625/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41625/events",
          "html_url": "https://github.com/rails/rails/issues/41625",
          "id": 823297027,
          "node_id": "MDU6SXNzdWU4MjMyOTcwMjc=",
          "number": 41625,
          "title": "StrongParameters#permit has inconsistent behavior with numeric-looking keys",
          "user": {
            "login": "nightpool",
            "id": 233815,
            "node_id": "MDQ6VXNlcjIzMzgxNQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/233815?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/nightpool",
            "html_url": "https://github.com/nightpool",
            "followers_url": "https://api.github.com/users/nightpool/followers",
            "following_url": "https://api.github.com/users/nightpool/following{/other_user}",
            "gists_url": "https://api.github.com/users/nightpool/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/nightpool/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/nightpool/subscriptions",
            "organizations_url": "https://api.github.com/users/nightpool/orgs",
            "repos_url": "https://api.github.com/users/nightpool/repos",
            "events_url": "https://api.github.com/users/nightpool/events{/privacy}",
            "received_events_url": "https://api.github.com/users/nightpool/received_events",
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
          "comments": 4,
          "created_at": "2021-03-05T17:52:02Z",
          "updated_at": "2021-03-09T23:54:12Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\n\r\n```ruby\r\nparams = ActionController::Parameters.new(items: {'1': {x: 2, y: 3}, '2': {x: 3, y: 4}})\r\n\r\nparams.require(:items).permit('1': [:x, :y], '2': [:x])\r\n#  {\"1\"=>{\"x\"=>2, \"y\"=>3}, \"2\"=>{\"x\"=>3}}\r\n\r\nparams.permit(items: {'1': [:x, :y], '2': [:x]})\r\n#  {\"items\"=>{\"1\"=>{}, \"2\"=>{}}}\r\n```\r\n\r\n### Expected behavior\r\n\r\nPermit should behave the same when called on a parent hash as it does when called on a child hash.\r\n\r\n### Actual behavior\r\n\r\nPermit's behavior is inconsistent, and it's very difficult and confusing to permit a nested hash with integer-like keys. More generally, when dealing with JSON parameters, the implicit \"array-like\" handling behavior should be limited to real, actual arrays—not just objects with keys that look like numbers.\r\n\r\n### System configuration\r\n**Rails version**: 6.0.2.2\r\n\r\n**Ruby version**: 2.6.3\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41622",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41622/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41622/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41622/events",
          "html_url": "https://github.com/rails/rails/pull/41622",
          "id": 823031800,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg1NTU2ODYx",
          "number": 41622,
          "title": "Support PostgreSQL DISTINCT ON",
          "user": {
            "login": "aliismayilov",
            "id": 993934,
            "node_id": "MDQ6VXNlcjk5MzkzNA==",
            "avatar_url": "https://avatars.githubusercontent.com/u/993934?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/aliismayilov",
            "html_url": "https://github.com/aliismayilov",
            "followers_url": "https://api.github.com/users/aliismayilov/followers",
            "following_url": "https://api.github.com/users/aliismayilov/following{/other_user}",
            "gists_url": "https://api.github.com/users/aliismayilov/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/aliismayilov/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/aliismayilov/subscriptions",
            "organizations_url": "https://api.github.com/users/aliismayilov/orgs",
            "repos_url": "https://api.github.com/users/aliismayilov/repos",
            "events_url": "https://api.github.com/users/aliismayilov/events{/privacy}",
            "received_events_url": "https://api.github.com/users/aliismayilov/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107191,
              "node_id": "MDU6TGFiZWwxMDcxOTE=",
              "url": "https://api.github.com/repos/rails/rails/labels/activerecord",
              "name": "activerecord",
              "color": "0b02e1",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 1,
          "created_at": "2021-03-05T12:16:16Z",
          "updated_at": "2021-03-08T09:48:01Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41622",
            "html_url": "https://github.com/rails/rails/pull/41622",
            "diff_url": "https://github.com/rails/rails/pull/41622.diff",
            "patch_url": "https://github.com/rails/rails/pull/41622.patch"
          },
          "body": "### Summary\r\n\r\nThis PR adds an interface for ActiveRecord relations to use (already implemented in arel) DISTINCT ON feature.\r\n\r\nfixes https://github.com/rails/rails/issues/17706. Similar issue exists with tables which have `point` data type column.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41619",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41619/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41619/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41619/events",
          "html_url": "https://github.com/rails/rails/issues/41619",
          "id": 822977558,
          "node_id": "MDU6SXNzdWU4MjI5Nzc1NTg=",
          "number": 41619,
          "title": "ActiveRecord incorrectly serializes input for PG's binary arrays",
          "user": {
            "login": "ivan-denysov",
            "id": 4324068,
            "node_id": "MDQ6VXNlcjQzMjQwNjg=",
            "avatar_url": "https://avatars.githubusercontent.com/u/4324068?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ivan-denysov",
            "html_url": "https://github.com/ivan-denysov",
            "followers_url": "https://api.github.com/users/ivan-denysov/followers",
            "following_url": "https://api.github.com/users/ivan-denysov/following{/other_user}",
            "gists_url": "https://api.github.com/users/ivan-denysov/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ivan-denysov/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ivan-denysov/subscriptions",
            "organizations_url": "https://api.github.com/users/ivan-denysov/orgs",
            "repos_url": "https://api.github.com/users/ivan-denysov/repos",
            "events_url": "https://api.github.com/users/ivan-denysov/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ivan-denysov/received_events",
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
          "created_at": "2021-03-05T10:58:07Z",
          "updated_at": "2021-03-05T13:00:26Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\n```ruby\r\n# reproduction.rb\r\n# frozen_string_literal: true\r\n\r\nrequire \"bundler/inline\"\r\n\r\ngemfile(true) do\r\n  source \"https://rubygems.org\"\r\n\r\n  git_source(:github) { |repo| \"https://github.com/#{repo}.git\" }\r\n\r\n  gem \"rails\", github: \"rails/rails\", branch: \"main\"\r\n  gem \"pg\"\r\nend\r\n\r\nrequire \"active_record\"\r\nrequire \"minitest/autorun\"\r\nrequire \"logger\"\r\n\r\nActiveRecord::Base.establish_connection(adapter: \"postgresql\")\r\nActiveRecord::Base.logger = Logger.new(STDOUT)\r\n\r\nActiveRecord::Schema.define do\r\n  create_table :posts, force: true do |t|\r\n    t.binary :signatures, array: true\r\n  end\r\nend\r\n\r\nclass Post < ActiveRecord::Base\r\nend\r\n\r\nclass BugTest < Minitest::Test\r\n  def test_write_value\r\n    signatures = [\"'\\u001F\\\\\"]\r\n    Post.create!(signatures: signatures)\r\n  end\r\nend\r\n```\r\n\r\n```ruby\r\nruby reproduction.rb\r\n```\r\n\r\n### Expected behavior\r\nShould store array of binary data in the database\r\n### Actual behavior\r\nStores array of binary data, but each element is wrapped in a binary representation of a ruby hash: `{ value: \"your value here\", format: 1 }`\r\n\r\n```\r\n...\r\nD, [2021-03-05T13:53:16.803760 #6184] DEBUG -- :   TRANSACTION (0.1ms)  BEGIN\r\nD, [2021-03-05T13:53:16.804880 #6184] DEBUG -- :   Post Create (1.0ms)  INSERT INTO \"posts\" (\"signatures\") VALUES ($1) RETURNING \"id\"  [[\"signatures\", \"{\\\"{:value=>\\\\\\\"'\\\\\\\\u001F\\\\\\\\\\\\\\\\\\\\\\\", :format=>1}\\\"}\"]]\r\nD, [2021-03-05T13:53:16.805052 #6184] DEBUG -- :   TRANSACTION (0.1ms)  ROLLBACK\r\nE\r\n\r\nError:\r\nBugTest#test_write_value:\r\nActiveRecord::StatementInvalid: PG::InvalidTextRepresentation: ERROR:  invalid input syntax for type bytea\r\n\r\n    /Users/ivan/.rbenv/versions/2.7.2/lib/ruby/gems/2.7.0/bundler/gems/rails-2b91f3522edc/activerecord/lib/active_record/connection_adapters/postgresql_adapter.rb:675:in `exec_params'\r\n...\r\n```\r\n### System configuration\r\n**Rails version**: main\r\n**Ruby version**: MRI 2.7.2\r\n**Postgres version**: 12\r\n\r\nHere's the piece of code that wraps binary values in a ruby hash: https://github.com/rails/rails/blob/main/activerecord/lib/active_record/connection_adapters/postgresql/quoting.rb#L150-L154\r\nIt has a link to PG documentation that should explain why we do that. I'm no wiser after reading it 😝 ",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41617",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41617/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41617/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41617/events",
          "html_url": "https://github.com/rails/rails/issues/41617",
          "id": 822708452,
          "node_id": "MDU6SXNzdWU4MjI3MDg0NTI=",
          "number": 41617,
          "title": "change_credentials_in_system_editor breaks with spaces in Windows user name",
          "user": {
            "login": "ariccio",
            "id": 2142308,
            "node_id": "MDQ6VXNlcjIxNDIzMDg=",
            "avatar_url": "https://avatars.githubusercontent.com/u/2142308?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ariccio",
            "html_url": "https://github.com/ariccio",
            "followers_url": "https://api.github.com/users/ariccio/followers",
            "following_url": "https://api.github.com/users/ariccio/following{/other_user}",
            "gists_url": "https://api.github.com/users/ariccio/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ariccio/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ariccio/subscriptions",
            "organizations_url": "https://api.github.com/users/ariccio/orgs",
            "repos_url": "https://api.github.com/users/ariccio/repos",
            "events_url": "https://api.github.com/users/ariccio/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ariccio/received_events",
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
          "comments": 1,
          "created_at": "2021-03-05T03:30:46Z",
          "updated_at": "2021-03-05T03:40:40Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\n<!-- (Guidelines for creating a bug report are [available\r\nhere](https://edgeguides.rubyonrails.org/contributing_to_ruby_on_rails.html#creating-a-bug-report)) -->\r\nRun `rails credentials:edit` while using a windows username that contains spaces. In my case, it's \"Lucius Riccio\" (since this was my dad's laptop a decade ago)\r\n\r\n### Expected behavior\r\n<!-- Tell us what should happen -->\r\nOpen a temporary file with a path like `C:/Users/Lucius Riccio/AppData/Local/Temp/22716.credentials.yml`\r\n### Actual behavior\r\n<!-- Tell us what happens instead -->\r\nOpens two temporary files with vscode, like `Lucius` and a file named  Riccio/AppData/Local/Temp/22716.credentials.yml.\r\n\r\n### System configuration\r\n**Rails version**:\r\n6.1.2.1\r\n**Ruby version**:\r\n3.0.0\r\n\r\n[`change_credentials_in_system_editor`](https://github.com/rails/rails/blob/fdba9304c2652af674fdb9cf3704ff5a64af92d7/railties/lib/rails/commands/credentials/credentials_command.rb#L92) should handle paths with spaces.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41616",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41616/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41616/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41616/events",
          "html_url": "https://github.com/rails/rails/issues/41616",
          "id": 822686627,
          "node_id": "MDU6SXNzdWU4MjI2ODY2Mjc=",
          "number": 41616,
          "title": "Condition to skip cache.fetch saving",
          "user": {
            "login": "bvicenzo",
            "id": 173159,
            "node_id": "MDQ6VXNlcjE3MzE1OQ==",
            "avatar_url": "https://avatars.githubusercontent.com/u/173159?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/bvicenzo",
            "html_url": "https://github.com/bvicenzo",
            "followers_url": "https://api.github.com/users/bvicenzo/followers",
            "following_url": "https://api.github.com/users/bvicenzo/following{/other_user}",
            "gists_url": "https://api.github.com/users/bvicenzo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/bvicenzo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/bvicenzo/subscriptions",
            "organizations_url": "https://api.github.com/users/bvicenzo/orgs",
            "repos_url": "https://api.github.com/users/bvicenzo/repos",
            "events_url": "https://api.github.com/users/bvicenzo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/bvicenzo/received_events",
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
          "created_at": "2021-03-05T02:39:28Z",
          "updated_at": "2021-03-05T02:39:28Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "Nowadays when we use the method [cache.fetch](https://api.rubyonrails.org/classes/ActiveSupport/Cache/Store.html#method-i-fetch) has an option for skipping the result store `skip_nil` where it does not store the result value if it's nil...\r\n\r\nHowever, there are some cases where the block result is not nil and we don't want to store the result.\r\nIs it possible, we have an option, for example, `skip_if` where we can specify a condition to skip the cache storing like the `skip_nil` does?\r\n\r\n### Expected behavior\r\n```rb\r\nis_odd = ->(number) { number.odd? }\r\n\r\ncache.fetch('foo', skip_if: is_odd) { 2 }\r\ncache.exist?('foo') # => true\r\n\r\ncache.fetch('bar', skip_if: is_odd) { 3 }\r\ncache.exist?('bar') # => false\r\n```\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41612",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41612/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41612/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41612/events",
          "html_url": "https://github.com/rails/rails/issues/41612",
          "id": 821719078,
          "node_id": "MDU6SXNzdWU4MjE3MTkwNzg=",
          "number": 41612,
          "title": "Counting has_many associations with extra clauses gives wrong resuls since Rails 6.1",
          "user": {
            "login": "Naturseptime",
            "id": 24992664,
            "node_id": "MDQ6VXNlcjI0OTkyNjY0",
            "avatar_url": "https://avatars.githubusercontent.com/u/24992664?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Naturseptime",
            "html_url": "https://github.com/Naturseptime",
            "followers_url": "https://api.github.com/users/Naturseptime/followers",
            "following_url": "https://api.github.com/users/Naturseptime/following{/other_user}",
            "gists_url": "https://api.github.com/users/Naturseptime/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Naturseptime/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Naturseptime/subscriptions",
            "organizations_url": "https://api.github.com/users/Naturseptime/orgs",
            "repos_url": "https://api.github.com/users/Naturseptime/repos",
            "events_url": "https://api.github.com/users/Naturseptime/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Naturseptime/received_events",
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
          "comments": 3,
          "created_at": "2021-03-04T03:35:16Z",
          "updated_at": "2021-03-10T13:02:44Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\n\r\nSince Rails 6.1 I have some trouble when counting has_many associations in combination with extra clauses.\r\n\r\nIn my setup I have four tables: Event, Registration, Person, Contacts\r\n\r\nAn event has multiple registrations:\r\n\t`has_many :registrations, -> { includes(person: [:contacts]).order('people.last_name') }, dependent: :destroy, inverse_of: :event`\r\n\r\nA registration belongs to an event and a person\r\n\t`belongs_to :event`\r\n\t`belongs_to :person`\r\n\r\nA person has multiple contacts (phone number, mail etc.)\r\n\t`has_many :contacts, dependent: :destroy`\r\n\t\r\nA person registered for an event can have organizer status\r\n\t`has_many :organizers, -> {where(registrations: {organizer: true})},\r\n\t\tsource: :person, through: :registrations`\r\n\r\nI want to query the number of all organizers for an event.\r\n  `Event.find(my_event_id).organizers.count`\r\n  \r\n### Expected behaviour\r\n\r\nI expect that this query should return the number of all organizers.\r\n\r\n### Actual behaviour\r\n\r\nSince rails 6.1 it returns the number of all contacts for all organizers.\r\n\r\nThe problem comes from a wrong SQL-Query in Rails 6.1.3\r\n\r\n`SELECT COUNT(*) FROM \"people\" INNER JOIN \"registrations\" ON \"people\".\"id\" = \"registrations\".\"person_id\" LEFT OUTER JOIN \"people\" \"people_registrations\" ON \"people_registrations\".\"id\" = \"registrations\".\"person_id\" LEFT OUTER JOIN \"contacts\" ON \"contacts\".\"person_id\" = \"people_registrations\".\"id\" WHERE \"registrations\".\"event_id\" = ? AND \"registrations\".\"organizer\" = ?`\r\n\r\nIn Rails 6.0.3.5 the correct SQL query was used:\r\n`SELECT COUNT(*) FROM \"people\" INNER JOIN \"registrations\" ON \"people\".\"id\" = \"registrations\".\"person_id\" WHERE \"registrations\".\"event_id\" = ? AND \"registrations\".\"organizer\" = ?`\r\n\r\nI think the problem comes somehow from the `order('people.last_name')` clause. Removing it gives correct counts.\r\n\r\n### System configuration\r\n\r\n**Rails version**\r\nRails 6.0.3.5 and 6.1.3 tested\r\n\r\n**Ruby version**\r\nMy ruby version is 2.7.2p137",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41611",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41611/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41611/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41611/events",
          "html_url": "https://github.com/rails/rails/pull/41611",
          "id": 821543117,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg0MzEyMzI4",
          "number": 41611,
          "title": "Populate ARGV with Rails::Command.invoke args",
          "user": {
            "login": "jonathanhefner",
            "id": 771968,
            "node_id": "MDQ6VXNlcjc3MTk2OA==",
            "avatar_url": "https://avatars.githubusercontent.com/u/771968?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/jonathanhefner",
            "html_url": "https://github.com/jonathanhefner",
            "followers_url": "https://api.github.com/users/jonathanhefner/followers",
            "following_url": "https://api.github.com/users/jonathanhefner/following{/other_user}",
            "gists_url": "https://api.github.com/users/jonathanhefner/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/jonathanhefner/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/jonathanhefner/subscriptions",
            "organizations_url": "https://api.github.com/users/jonathanhefner/orgs",
            "repos_url": "https://api.github.com/users/jonathanhefner/repos",
            "events_url": "https://api.github.com/users/jonathanhefner/events{/privacy}",
            "received_events_url": "https://api.github.com/users/jonathanhefner/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107195,
              "node_id": "MDU6TGFiZWwxMDcxOTU=",
              "url": "https://api.github.com/repos/rails/rails/labels/railties",
              "name": "railties",
              "color": "8BE06E",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-03T22:32:20Z",
          "updated_at": "2021-03-03T22:32:24Z",
          "closed_at": null,
          "author_association": "MEMBER",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41611",
            "html_url": "https://github.com/rails/rails/pull/41611",
            "diff_url": "https://github.com/rails/rails/pull/41611.diff",
            "patch_url": "https://github.com/rails/rails/pull/41611.patch"
          },
          "body": "Follow-up to #38495.\r\n\r\nSimilar to #40994, but for all Rails commands.  Programmatic and CLI invocations of Rails commands will still behave identically, and `ARGV` will still be isolated between invocations.\r\n\r\n---\r\n\r\nRelying on the contents of `ARGV` can be problematic, but there is code in the wild that does so (e.g. https://github.com/rails/rails/issues/40945#issuecomment-789020443), and we should avoid breaking it if possible.\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41609",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41609/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41609/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41609/events",
          "html_url": "https://github.com/rails/rails/pull/41609",
          "id": 821428938,
          "node_id": "MDExOlB1bGxSZXF1ZXN0NTg0MjIwNjg0",
          "number": 41609,
          "title": "actionpack: Use an infinite sized queue in testing ActionController::Live",
          "user": {
            "login": "dylanahsmith",
            "id": 954402,
            "node_id": "MDQ6VXNlcjk1NDQwMg==",
            "avatar_url": "https://avatars.githubusercontent.com/u/954402?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/dylanahsmith",
            "html_url": "https://github.com/dylanahsmith",
            "followers_url": "https://api.github.com/users/dylanahsmith/followers",
            "following_url": "https://api.github.com/users/dylanahsmith/following{/other_user}",
            "gists_url": "https://api.github.com/users/dylanahsmith/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/dylanahsmith/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/dylanahsmith/subscriptions",
            "organizations_url": "https://api.github.com/users/dylanahsmith/orgs",
            "repos_url": "https://api.github.com/users/dylanahsmith/repos",
            "events_url": "https://api.github.com/users/dylanahsmith/events{/privacy}",
            "received_events_url": "https://api.github.com/users/dylanahsmith/received_events",
            "type": "User",
            "site_admin": false
          },
          "labels": [
            {
              "id": 107189,
              "node_id": "MDU6TGFiZWwxMDcxODk=",
              "url": "https://api.github.com/repos/rails/rails/labels/actionpack",
              "name": "actionpack",
              "color": "FFF700",
              "default": false,
              "description": null
            }
          ],
          "state": "open",
          "locked": false,
          "assignee": null,
          "assignees": [
      
          ],
          "milestone": null,
          "comments": 0,
          "created_at": "2021-03-03T19:47:19Z",
          "updated_at": "2021-03-03T21:41:44Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "pull_request": {
            "url": "https://api.github.com/repos/rails/rails/pulls/41609",
            "html_url": "https://github.com/rails/rails/pull/41609",
            "diff_url": "https://github.com/rails/rails/pull/41609.diff",
            "patch_url": "https://github.com/rails/rails/pull/41609.patch"
          },
          "body": "Fixes #31813\r\n\r\n## Problem Summary\r\n\r\nActionController::Live normally processes the request in another thread, however, a monkey patch in [ActionController::Live monkey patch in action_controller/test_case.rb] forces it to instead get processed in the same thread.  Since the writes go to a `SizedQueue.new(10)` in ActionController::Live::Buffer, a test will deadlock if the controller makes more than 10 writes.\r\n\r\n## Solution\r\n\r\nThe fix is similar to #31938, we use an infinitely sized `Queue.new` for testing.  This PR just does this more cleanly by using an attribute on the class to configure the queue size, which allows both the test and normal behaviour to be tested cleanly.",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41607",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41607/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41607/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41607/events",
          "html_url": "https://github.com/rails/rails/issues/41607",
          "id": 821408713,
          "node_id": "MDU6SXNzdWU4MjE0MDg3MTM=",
          "number": 41607,
          "title": "Should ActionDispatch::Http::UploadedFile#headers be encoded like #original_filename",
          "user": {
            "login": "sjieg",
            "id": 5168683,
            "node_id": "MDQ6VXNlcjUxNjg2ODM=",
            "avatar_url": "https://avatars.githubusercontent.com/u/5168683?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/sjieg",
            "html_url": "https://github.com/sjieg",
            "followers_url": "https://api.github.com/users/sjieg/followers",
            "following_url": "https://api.github.com/users/sjieg/following{/other_user}",
            "gists_url": "https://api.github.com/users/sjieg/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/sjieg/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/sjieg/subscriptions",
            "organizations_url": "https://api.github.com/users/sjieg/orgs",
            "repos_url": "https://api.github.com/users/sjieg/repos",
            "events_url": "https://api.github.com/users/sjieg/events{/privacy}",
            "received_events_url": "https://api.github.com/users/sjieg/received_events",
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
          "created_at": "2021-03-03T19:18:26Z",
          "updated_at": "2021-03-03T19:19:14Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "Hello,\r\n\r\nFirst off, awesome work on Rails, love to use it!\r\n\r\n\r\n**Description**\r\n\r\nI noticed that in the initializer of `ActionDispatch::Http::UploadedFile` the original_filename is being escaped, but this doesn't happen for the headers. (Nor for the content type, but that might be a different case.\r\nhttps://github.com/rails/rails/blob/12613accfdd5665600958c2c291f8377bc1f11e3/actionpack/lib/action_dispatch/http/upload.rb#L27-L45\r\n\r\n**Actual**\r\n\r\nThe headers often also include the original filename, so if the filename included non-utf8 characters, they can still get in your system this way.\r\n\r\n**Expected** (This is more intended as a question)\r\n\r\nPossibly the headers should be escaped too, to prevent unwanted encoding issues later in the system.\r\n\r\nPro: No unwanted issues\r\nCon: You might lose track of what the real original data was in the call. Actually, that can be accessed through `:tempfile`\r\n\r\n**My use case**\r\n\r\nFilename used: `Some screenshot — generated by Greenshot.png`\r\nPretty printed UploadedFile:\r\n```\r\n#<ActionDispatch::Http::UploadedFile:0x000000001d2c7ed8\r\n @content_type=\"image/png\",\r\n @headers=\r\n  \"Content-Disposition: form-data; name=\\\"file[]\\\"; filename=\\\"Some screenshot \\xE2\\x80\\x94 generated by Greenshot.png\\\"; filename*=UTF-8''Some%20screenshot%20%E2%80%94%20generated%20by%20Greenshot.png\\r\\n\" +\r\n  \"Content-Type: image/png\\r\\n\",\r\n @original_filename=\"Some screenshot — generated by Greenshot.png\",\r\n @tempfile=\r\n  #<File:C:/Users/gijs_/AppData/Local/Temp/RackMultipart20210303-27376-1bwovu6.png>>\r\n```\r\n\r\nFor debugging and tracking purposes I store all `params` used and serve this to the user through JSON. `JSON.pretty_generate` then ends up trying to convert the `headers` and throws an `Encoding::UndefinedConversionError`.\r\n\r\nIt's a bit edge case, and I can solve it by force encoding before processing it. But when investigating how come the original filename seemed okay while the headers were wrong, I was a bit confused.\r\n\r\n**I would love to contribute, so please let me know if this should be done and I'll come with a PR.**",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41606",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41606/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41606/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41606/events",
          "html_url": "https://github.com/rails/rails/issues/41606",
          "id": 821329602,
          "node_id": "MDU6SXNzdWU4MjEzMjk2MDI=",
          "number": 41606,
          "title": "ActiveRecord::ConnectionAdapters::PostgreSQLAdapter.new_client raises NoDatabaseError erroneously",
          "user": {
            "login": "ccutrer",
            "id": 191320,
            "node_id": "MDQ6VXNlcjE5MTMyMA==",
            "avatar_url": "https://avatars.githubusercontent.com/u/191320?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ccutrer",
            "html_url": "https://github.com/ccutrer",
            "followers_url": "https://api.github.com/users/ccutrer/followers",
            "following_url": "https://api.github.com/users/ccutrer/following{/other_user}",
            "gists_url": "https://api.github.com/users/ccutrer/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ccutrer/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ccutrer/subscriptions",
            "organizations_url": "https://api.github.com/users/ccutrer/orgs",
            "repos_url": "https://api.github.com/users/ccutrer/repos",
            "events_url": "https://api.github.com/users/ccutrer/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ccutrer/received_events",
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
          "comments": 3,
          "created_at": "2021-03-03T17:33:29Z",
          "updated_at": "2021-03-09T02:00:25Z",
          "closed_at": null,
          "author_association": "CONTRIBUTOR",
          "active_lock_reason": null,
          "body": "### Steps to reproduce\r\nHave a database.yml that includes a database name, and the hostname also includes the database name. The hostname should not be resolveable. Try to connect. \r\n\r\n### Expected behavior\r\nA ActiveRecord::ConnectionNotEstablished error is raised.\r\n\r\n### Actual behavior\r\nA ActiveRecord::NoDatabaseError is raised:\r\n`could not translate host name \"clusterX\" to address: Name or service not known`\r\n\r\nThe problem is you're just checking the exception message for the database name, instead of _also_ checking if it is actually a \"database does not exist\" error. \r\n\r\n### System configuration\r\n**Rails version**: 6.1.3\r\n**Ruby version**: 2.7.2\r\n",
          "performed_via_github_app": null
        },
        {
          "url": "https://api.github.com/repos/rails/rails/issues/41605",
          "repository_url": "https://api.github.com/repos/rails/rails",
          "labels_url": "https://api.github.com/repos/rails/rails/issues/41605/labels{/name}",
          "comments_url": "https://api.github.com/repos/rails/rails/issues/41605/comments",
          "events_url": "https://api.github.com/repos/rails/rails/issues/41605/events",
          "html_url": "https://github.com/rails/rails/issues/41605",
          "id": 821174370,
          "node_id": "MDU6SXNzdWU4MjExNzQzNzA=",
          "number": 41605,
          "title": "Broken routes after installing webpacker",
          "user": {
            "login": "coliveiraluca",
            "id": 31221939,
            "node_id": "MDQ6VXNlcjMxMjIxOTM5",
            "avatar_url": "https://avatars.githubusercontent.com/u/31221939?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/coliveiraluca",
            "html_url": "https://github.com/coliveiraluca",
            "followers_url": "https://api.github.com/users/coliveiraluca/followers",
            "following_url": "https://api.github.com/users/coliveiraluca/following{/other_user}",
            "gists_url": "https://api.github.com/users/coliveiraluca/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/coliveiraluca/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/coliveiraluca/subscriptions",
            "organizations_url": "https://api.github.com/users/coliveiraluca/orgs",
            "repos_url": "https://api.github.com/users/coliveiraluca/repos",
            "events_url": "https://api.github.com/users/coliveiraluca/events{/privacy}",
            "received_events_url": "https://api.github.com/users/coliveiraluca/received_events",
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
          "comments": 1,
          "created_at": "2021-03-03T14:43:24Z",
          "updated_at": "2021-03-09T20:24:56Z",
          "closed_at": null,
          "author_association": "NONE",
          "active_lock_reason": null,
          "body": "Recently I've upgraded an application from rails 5.2 to 6.1.3, following the steps suggested in the rails guides: https://edgeguides.rubyonrails.org/upgrading_ruby_on_rails.html\r\nThe Process went fine the rails project was successfully upgraded.\r\n\r\nTo proceed with the upgrade on the project we chose to add Webpacker to the project, following the same steps described on the guide and also in the Github from Webpacker.\r\n* Adding the gem in the Gemfile\r\n`gem 'webpacker'`\r\n* Running the following in the console\r\n`bundle install`\r\n`bundle exec rails webpacker:install`\r\n\r\n### Expected behavior\r\nWebpacker should be installed with minor impact to the project since the assets are still being loaded properly.\r\n### Actual behavior\r\nMost of the routes were broken, mainly rails don't find the controller either action for a specific endpoint and they are set to `nil` when running `rails routes`.\r\nThe only routes shown in the `rails routes` output are the ones with the `to:` param in the `routes.rb`.\r\n\r\n### Rails routes output - Webpacker NOT Installed\r\n```                                  Prefix Verb   URI Pattern                                                                                       Controller#Action\r\n                                    ...\r\n                      authenticated_root GET    /                                                                                                 transactions#index\r\n                  transaction_invalidate POST   /transactions/:transaction_id/invalidate(.:format)                                                transactions#invalidate {:transaction_id=>/\\d+/}\r\n               transaction_download_slip GET    /transactions/:transaction_id/download_slip(.:format)                                             transactions#download_slip {:transaction_id=>/\\d+/}\r\n                     export_transactions GET    /transactions/export(.:format)                                                                    transactions#export\r\n                            transactions GET    /transactions(.:format)                                                                           transactions#index\r\n                                         POST   /transactions(.:format)                                                                           transactions#create\r\n                         new_transaction GET    /transactions/new(.:format)                                                                       transactions#new\r\n                           slip_download GET    /slips/:slip_id/download(.:format)                                                                slips#download\r\n                                   slips GET    /slips(.:format)                                                                                  slips#index\r\n                                    slip GET    /slips/:id(.:format)                                                                              slips#show\r\n                                    ...\r\n\r\n\r\n```\r\n\r\n\r\n### Rails routes output - Webpacker Installed\r\n```                                  Prefix Verb   URI Pattern                                                                                       Controller#Action\r\n                                    ...\r\n                      authenticated_root GET    /                                                                                                 transactions#index\r\n                confirmable_transactions GET    /confirmable_transactions(.:format)                                                               nil\r\n                  transaction_invalidate POST   /transactions/:transaction_id/invalidate(.:format)                                                nil {:transaction_id=>/\\d+/}\r\n               transaction_download_slip GET    /transactions/:transaction_id/download_slip(.:format)                                             nil {:transaction_id=>/\\d+/}\r\n                     export_transactions GET    /transactions/export(.:format)                                                                    nil\r\n                            transactions GET    /transactions(.:format)                                                                           nil\r\n                                         POST   /transactions(.:format)                                                                           nil\r\n                         new_transaction GET    /transactions/new(.:format)                                                                       nil\r\n                           slip_download GET    /slips/:slip_id/download(.:format)                                                                nil\r\n                                   slips GET    /slips(.:format)                                                                                  nil\r\n                                    slip GET    /slips/:id(.:format)                                                                              nil\r\n                                    ...\r\n```\r\n\r\n### routes.rb\r\n```\r\n# frozen_string_literal: true\r\n\r\nRails.application.routes.draw do\r\n  ...\r\n  devise_scope :user do\r\n    authenticated :user do\r\n      root 'transactions#index', as: :authenticated_root\r\n    end\r\n\r\n  resources :transactions, only: [:index, :new, :create] do\r\n    post :invalidate,    constraints: { transaction_id: /\\d+/ }\r\n    get  :download_slip, constraints: { transaction_id: /\\d+/ }\r\n\r\n    collection do\r\n      get :export\r\n    end\r\n  end\r\n  ...\r\nend\r\n```\r\n\r\n\r\n### Rspec\r\n\r\nDue to that, a series of tests were broken since some routes to controller and action seemed to be not found. Following is the error that shows up in numerous cases\r\n\r\n```\r\n     Failure/Error: get :index\r\n\r\n     ActionController::UrlGenerationError:\r\n       No route matches {:action=>\"index\", :controller=>\"anonymous\"}\r\n     # /usr/local/rvm/gems/ruby-2.6.3/gems/rails-controller-testing-1.0.5/lib/rails/controller/testing/template_assertions.rb:62:in `process'\r\n     # /usr/local/rvm/gems/ruby-2.6.3/gems/devise-4.7.1/lib/devise/test/controller_helpers.rb:35:in `block in process'\r\n     # /usr/local/rvm/gems/ruby-2.6.3/gems/devise-4.7.1/lib/devise/test/controller_helpers.rb:102:in `catch'\r\n     # /usr/local/rvm/gems/ruby-2.6.3/gems/devise-4.7.1/lib/devise/test/controller_helpers.rb:102:in `_catch_warden'\r\n     # /usr/local/rvm/gems/ruby-2.6.3/gems/devise-4.7.1/lib/devise/test/controller_helpers.rb:35:in `process'\r\n     # /usr/local/rvm/gems/ruby-2.6.3/gems/rails-controller-testing-1.0.5/lib/rails/controller/testing/integration.rb:16:in `block (2 levels) in <module:Integration>'\r\n     # ./spec/controllers/application_controller_spec.rb:43:in `block (3 levels) in <top (required)>'\r\n\r\n```\r\n\r\n### System configuration\r\n**Rails version**: `6.1.3`\r\n**Webpacker version**: `5.2.1`\r\n\r\n**Ruby version**: `2.6.3`\r\n",
          "performed_via_github_app": null
        },
    ])
  }

  getComments(id){
    return of([])
  }
}