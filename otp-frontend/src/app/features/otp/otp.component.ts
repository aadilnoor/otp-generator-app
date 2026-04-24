import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OtpService } from '../../core/services/otp.service';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ⭐ ngModel fix
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {

  otp = '';
  selectedDigits = 6;
  timeLeft = 30;
  timer: any;

  constructor(private otpService: OtpService) {}

  generateOtp() {
    this.otpService.generateOtp(this.selectedDigits)
      .subscribe({
        next: res => {
          this.otp = res.otp;
          this.startTimer();
        },
        error: err => {
          console.error('OTP API failed', err);
        }
      });
  }

  startTimer() {
    clearInterval(this.timer);
    this.timeLeft = 30;

    this.timer = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft === 0) {
        this.generateOtp();
      }
    }, 1000);
  }
}
