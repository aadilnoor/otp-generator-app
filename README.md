# OTP Generator – Full Stack Application

A full-stack OTP (One Time Password) generator application built using Spring Boot for the backend and Angular for the frontend. The application enables users to generate secure 3-digit or 6-digit OTPs with automatic expiration after 30 seconds.

---

## Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* MySQL
* Maven

### Frontend

* Angular 19
* TypeScript
* Standalone Components
* HTML5 & CSS3

---

## Features

* Generate 3-digit or 6-digit OTPs
* OTP expires automatically after 30 seconds
* Persistent storage using MySQL
* RESTful API architecture
* Clean and responsive user interface
* Action controls disabled while OTP is active
* Visual indication for expired OTP
* No external UI libraries used

---

## Database Setup (MySQL)

Create the database:

```sql
CREATE DATABASE otp_db;
```

Update `application.yml`:

```yaml
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
```

---

## Backend Setup and Execution

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend will be available at:
http://localhost:8090

---

## Frontend Setup and Execution

```bash
cd frontend
npm install
ng serve
```

Frontend will be available at:
http://localhost:4200

---

## API Endpoint

**Generate OTP**

```
GET /api/otp/generate?digits=6
```

**Sample Response**

```json
{
  "otp": "482931",
  "expirySeconds": 30
}
```

---

## Notes

This project was developed as part of an assignment and for learning purposes.

---

## Author

Aadil Noor
Java Full Stack Developer
