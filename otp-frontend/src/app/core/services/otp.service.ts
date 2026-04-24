import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtpResponse } from '../models/otp-response.model';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  private baseUrl = 'http://localhost:8090/api/otp';

  constructor(private http: HttpClient) {}

  generateOtp(digits: number) {
    return this.http.get<OtpResponse>(
      `${this.baseUrl}/generate?digits=${digits}`
    );
  }
}
