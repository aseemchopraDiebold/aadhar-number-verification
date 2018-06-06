import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VerifyAadharNumberComponent } from './verify-aadhar-number/verify-aadhar-number.component';
xdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VerifyAadharNumberComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
 
});
