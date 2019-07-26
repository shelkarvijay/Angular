import { TestBed, inject } from '@angular/core/testing';

import { ListService } from './list.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ 
      HttpClientModule,
      HttpClientTestingModule ],
    providers: [ ListService ]
  }));

  it('should be created', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service).toBeTruthy();
  });

  it('should be created', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));

  it('should have getList function', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service.getList).toBeTruthy();
  });

  it('should have getUserName function', () => {
    const service: ListService = TestBed.get(ListService);
    expect(service.getUserName).toBeTruthy();
  });
});
