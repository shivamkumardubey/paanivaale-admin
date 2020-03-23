import { TestBed } from '@angular/core/testing';

import { UsersTableService } from './users-table.service';

describe('UsersTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersTableService = TestBed.get(UsersTableService);
    expect(service).toBeTruthy();
  });
});
