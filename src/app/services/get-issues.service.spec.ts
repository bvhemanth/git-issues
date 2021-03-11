import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetIssuesService } from './get-issues.service';

fdescribe('GetIssuesService', () => {
  let service: GetIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(GetIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
