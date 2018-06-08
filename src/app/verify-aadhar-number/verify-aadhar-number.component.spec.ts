import { fakeAsync, tick, ComponentFixture, TestBed, async } from '@angular/core/testing';

import { VerifyAadharNumberComponent } from './verify-aadhar-number.component';
import { AadharNumberInfoFetchService } from '../aadhar-number-info-fetch.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ValidAadharInterface } from '../interface/validAadharInterface';

describe('VerifyAadharNumberComponent', () => {
  let component: VerifyAadharNumberComponent;
  let fixture: ComponentFixture<VerifyAadharNumberComponent>;
  let service: AadharNumberInfoFetchService;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ VerifyAadharNumberComponent ],
      providers: [AadharNumberInfoFetchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyAadharNumberComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AadharNumberInfoFetchService);
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  afterEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the aadhar number is valid', fakeAsync(() => {
    const validAadhar: ValidAadharInterface = {
      isValid: true
    };
    spyOn(service, 'isValidAadharNumber').and.returnValue(of(validAadhar));
    fixture.detectChanges();
    expect(el.query(By.css('.aadhar-number-match-error')).nativeElement.innerText).toBe('is Invalid');
    component.validateAadharNumber(999999999);
    tick();
    console.log(component);
    expect(component.isValid).toBeTruthy();
    fixture.detectChanges();
    expect(el.query(By.css('.aadhar-number-match-success')).nativeElement.innerText).toMatch('is Valid');

  }));
});
