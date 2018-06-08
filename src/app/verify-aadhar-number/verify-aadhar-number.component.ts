import { Component, OnInit } from '@angular/core';
import { AadharNumberInfoFetchService } from '../aadhar-number-info-fetch.service';

@Component({
  selector: 'app-verify-aadhar-number',
  templateUrl: './verify-aadhar-number.component.html',
  styleUrls: ['./verify-aadhar-number.component.css']
})
export class VerifyAadharNumberComponent implements OnInit {
  public isValid: boolean;
  public errorMessage: string;

  public validationAadharNumberClasses = {
    'aadhar-number-match-success': this.isValid,
    'aadhar-number-match-error': !this.isValid
  };

  constructor(private _aadharNumberInfoFetchService: AadharNumberInfoFetchService) { }

  ngOnInit() {
    this.errorMessage = '';
  }

  validateAadharNumber(aadharNumber: number) {
    this._aadharNumberInfoFetchService.isValidAadharNumber(aadharNumber)
    .subscribe((data) => {
      this.errorMessage = '';
      this.isValid = data.isValid;
      if ( this.isValid) {
        this.validationAadharNumberClasses['aadhar-number-match-success'] = this.isValid;
        this.validationAadharNumberClasses['aadhar-number-match-error'] = !this.isValid;
      }
    },
    (error) => this.errorMessage = error);

  }

}
