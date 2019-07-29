import { TestBed } from '@angular/core/testing';

import { ReporterService } from './reporter.service';

describe('ReporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReporterService = TestBed.get(ReporterService);
    expect(service).toBeTruthy();
  });
});
