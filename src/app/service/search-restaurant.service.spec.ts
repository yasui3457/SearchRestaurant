import { TestBed } from '@angular/core/testing';

import { SearchRestaurantService } from './search-restaurant.service';

describe('SearchRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchRestaurantService = TestBed.get(SearchRestaurantService);
    expect(service).toBeTruthy();
  });
});
