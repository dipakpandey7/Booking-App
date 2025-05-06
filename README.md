# Activity Booking App

A Node.js backend application for managing and booking activities, built with Express.js, TypeScript, and MongoDB.

## Features

- User Authentication (Register/Login)
- Activity Management (Create/List)
- Activity Booking System
- Booking History

## Tech Stack

- Node.js
- TypeScript
- Express.js
- MongoDB
- JWT Authentication
- Joi Validation

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

## API Documentation

### User Routes

#### Register User

```http
POST /api/users/register
Content-Type: application/json

{
    "name": "Dipak",
    "email": "dipak@gmail.com",
    "phone": "9876543210",
    "password": "password123"
}
```

#### Login User

```http
POST /api/users/login
Content-Type: application/json

{
    "email": "dipak@gmail.com",
    "password": "password123"
}
```

### Activity Routes

#### List All Activities

```http
GET /api/activities
```

#### Create Activity (Auth Required)

```http
POST /api/activities
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
    "title": "Morning Yoga Session",
    "description": "Start your day with an energizing yoga session",
    "location": "Wellness Studio",
    "dateTime": "2025-05-07T06:30:00+05:30"
}
```

#### Book Activity (Auth Required)

```http
POST /api/activities/book
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
    "activityId": "ACTIVITY_ID_FROM_DATABASE"
}
```

#### Get My Bookings (Auth Required)

```http
GET /api/activities/my-bookings
Authorization: Bearer YOUR_JWT_TOKEN
```

## Validation Rules

### User Registration

- Name: 2-50 characters
- Email: Valid email format
- Phone: Valid phone number format (+1234567890)
- Password: 6-30 characters

### Activity Creation

- Title: 3-100 characters
- Description: 10-500 characters
- Location: 3-100 characters
- DateTime: ISO date string, must be in the future

## Error Handling

The API returns appropriate HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Security Features

- Password Hashing
- JWT Authentication
- Input Validation
- CORS Enabled
