# Bajaj Finserv Health Dev Challenge API

This project is an implementation of the Bajaj Finserv Health Dev Challenge API, a RESTful service that processes array data and file information.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)

## Features

- POST endpoint to process array data and file information
- GET endpoint to retrieve operation code
- Separates numbers and alphabets from input array
- Identifies the highest lowercase alphabet
- Handles base64 encoded file data
- Determines file MIME type and size

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bajaj-finserv-health-dev-challenge.git
   ```

2. Navigate to the project directory:
   ```
   cd bajaj-finserv-health-dev-challenge
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   node app.js
   ```

2. The server will start running on `http://localhost:3000` (or the port specified in your environment variables).

## API Endpoints

### POST /bfhl

Processes the input data array and file information.

#### Request Body

```json
{
  "data": ["M", "1", "334", "4", "B", "Z", "a"],
  "file_b64": "BASE_64_STRING"
}
```

#### Response

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "numbers": ["1", "334", "4"],
  "alphabets": ["M", "B", "Z", "a"],
  "highest_lowercase_alphabet": ["a"],
  "file_valid": true,
  "file_mime_type": "image/png",
  "file_size_kb": "400"
}
```

### GET /bfhl

Returns the operation code.

#### Response

```json
{
  "operation_code": 1
}
```

## Testing

You can test the API using tools like Postman or curl. Here are some example requests:

1. POST request with mixed data:
   ```
   curl -X POST http://localhost:3000/bfhl \
        -H "Content-Type: application/json" \
        -d '{"data": ["M", "1", "334", "4", "B", "Z", "a"], "file_b64": "BASE_64_STRING"}'
   ```

2. POST request with only numbers:
   ```
   curl -X POST http://localhost:3000/bfhl \
        -H "Content-Type: application/json" \
        -d '{"data": ["2", "4", "5", "92"], "file_b64": "BASE_64_STRING"}'
   ```

3. GET request:
   ```
   curl http://localhost:3000/bfhl
   ```

