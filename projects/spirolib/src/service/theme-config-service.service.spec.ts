import { TestBed } from '@angular/core/testing';

import { ThemeConfigServiceService } from './theme-config-service.service';

describe('ThemeConfigServiceService', () => {
  let service: ThemeConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update primary color', () => {
    service.updatePrimaryColor('#ff0000');
    expect(service).toBeTruthy();
  });

  it('should update white color', () => {
    service.updateWhiteColor('#ff0000');
    expect(service).toBeTruthy();
  });

  it('should throw error on invalid color format', () => {
    expect(() => service.updatePrimaryColor('ff0000')).toThrowError('Invalid color format: ff0000');
  });

  it('should throw error on invalid color format', () => {
    expect(() => service.updateWhiteColor('ff0000')).toThrowError('Invalid color format: ff0000');
  });

});
