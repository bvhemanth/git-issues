import { TestBed } from '@angular/core/testing';

import { GetIssuesService } from './get-issues.service';

describe('GetIssuesService', () => {
  let service: GetIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
