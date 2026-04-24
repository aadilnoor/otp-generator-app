package com.otp.controller;

import com.otp.dto.OtpResponse;
import com.otp.entity.OtpEntity;
import com.otp.service.OtpService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/otp")
@CrossOrigin("*")
public class OtpController {

    private final OtpService otpService;

    public OtpController(OtpService otpService) {
        this.otpService = otpService;
    }

    @GetMapping("/generate")
    public OtpResponse generateOtp(@RequestParam int digits) {

        OtpEntity entity = otpService.generateOtp(digits);

        return new OtpResponse(entity.getOtp(),30);
    }
}
