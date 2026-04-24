# OTP Generator – Full Stack Application

This is a full stack OTP (One Time Password) generator application built using
Spring Boot for backend and Angular for frontend.

The application allows users to generate 3-digit or 6-digit OTPs which expire
automatically after 30 seconds.

---

## 🛠 Tech Stack

### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend
- Angular 19
- TypeScript
- Standalone Components
- HTML5 & CSS3

---

## ✨ Features

- Generate 3 or 6 digit OTP
- OTP validity of 30 seconds
- OTP data stored in MySQL
- REST API based backend
- Clean and responsive frontend UI
- Disabled actions while OTP is active
- Expired OTP animation
- No external UI libraries used


```

 🗄 Database Setup (MySQL)
 Create database:
CREATE DATABASE otp_db;


Update application.yml:

properties
spring:
  application:
    name: assignment-otp

  datasource:
    url: jdbc:mysql://localhost:3306/otp_db
    username: root
    password: MYSQL

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true

server:
  port: 8090

🚀 Backend Setup & Run

cd backend
mvn clean install
mvn spring-boot:run
Backend URL:
http://localhost:8090

🚀 Frontend Setup & Run

cd frontend
npm install
ng serve
Frontend URL:
http://localhost:4200

🔗 API Endpoint
Generate OTP:
GET /api/otp/generate?digits=6

Sample Response:
json
{
  "otp": "482931",
  "expirySeconds": 30
}

📸 Application Screenshots
OTP Generator – Initial Screen
<img width="398" height="176" alt="image" src="https://github.com/user-attachments/assets/7d971a3b-151d-4b6e-8afb-2ef836fdc3a5" />
<img width="398" height="176" alt="image" src="https://github.com/user-attachments/assets/84e41208-2c1a-4c3d-b9d7-2e29dc91d141" />

OTP Generated with Timer
<img width="386" height="251" alt="image" src="https://github.com/user-attachments/assets/31150faa-a528-48c6-98a4-cc5321a8a2a3" />


📌 Notes

Project created for assignment submission and learning purpose

👤 Author
AADIL NOOR
Java Full Stack Developer
