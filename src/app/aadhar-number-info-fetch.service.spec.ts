import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AadharNumberInfoFetchService } from './aadhar-number-info-fetch.service';
import { ValidAadharInterface } from './interface/validAadharInterface';

describe('AadharNumberInfoFetchService', () => {

  let service: AadharNumberInfoFetchService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AadharNumberInfoFetchService]
    });

    service = TestBed.get(AadharNumberInfoFetchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', async(() => {
    expect(service).toBeTruthy();
  }));
  it('aadhar number is valid', async(() => {
    const aadharNumberValid: ValidAadharInterface = {
      isValid: true
    };
    const aadharNumber = 9999999999;
    service.isValidAadharNumber(aadharNumber).subscribe((valid) => {
      expect(valid).toEqual(aadharNumberValid);
      expect(valid.isValid).toBeTruthy();
    });
    const request = httpMock.expectOne(service.getUrl() + `${aadharNumber}`);
    expect(request.request.method).toBe('GET');
    request.flush(aadharNumberValid);
  }));

  it('aadhar number is invalid', async(() => {
    const aadharNumberValid: ValidAadharInterface = {
      isValid: false
    };
    const aadharNumber = 9999999999;
    service.isValidAadharNumber(aadharNumber).subscribe((valid) => {
      expect(valid).toEqual(aadharNumberValid);
      expect(valid.isValid).toBeFalsy();
    });
    const request = httpMock.expectOne(service.getUrl() + `${aadharNumber}`);
    expect(request.request.method).toBe('GET');
    request.flush(aadharNumberValid);
  }));
});
