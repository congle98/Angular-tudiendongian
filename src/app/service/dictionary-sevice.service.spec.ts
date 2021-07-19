import { TestBed } from '@angular/core/testing';

import { DictionarySeviceService } from './dictionary-sevice.service';

describe('DictionarySeviceService', () => {
  let service: DictionarySeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionarySeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
