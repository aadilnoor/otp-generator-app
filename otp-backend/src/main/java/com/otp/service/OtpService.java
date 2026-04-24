package com.otp.service;

import com.otp.entity.OtpEntity;
import com.otp.repository.OtpRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Random;

@Service
public class OtpService {

    private final OtpRepository otpRepository;

    public OtpService(OtpRepository otpRepository) {
        this.otpRepository = otpRepository;
    }

    public OtpEntity generateOtp(int digits) {

        int min = (int) Math.pow(10, digits - 1);
        int max = (int) Math.pow(10, digits) - 1;

        String otp = String.valueOf(
                new Random().nextInt(max - min + 1) + min
        );

        OtpEntity entity = new OtpEntity();
        entity.setOtp(otp);
        entity.setDigits(digits);
        entity.setCreatedAt(LocalDateTime.now());
        entity.setExpiryTime(LocalDateTime.now().plusSeconds(30));

        return otpRepository.save(entity);
    }
}

