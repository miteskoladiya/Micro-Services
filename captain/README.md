# Micro-Services Documentation

## Captain Service

### Endpoints

#### Register Captain
- **URL:** `/register`
- **Method:** `POST`
- **Description:** Register a new captain.
- **Request Body:**
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string",
    "newCaptain": {
      "name": "string",
      "email": "string",
      "isAvailable": "boolean"
    }
  }
  ```

#### Login Captain
- **URL:** `/login`
- **Method:** `POST`
- **Description:** Login an existing captain.
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string",
    "captain": {
      "name": "string",
      "email": "string",
      "isAvailable": "boolean"
    }
  }
  ```

#### Logout Captain
- **URL:** `/logout`
- **Method:** `POST`
- **Description:** Logout the current captain.
- **Response:**
  ```json
  {
    "message": "Captain logged out successfully"
  }
  ```

#### Captain Profile
- **URL:** `/profile`
- **Method:** `GET`
- **Description:** Get the profile of the current captain.
- **Response:**
  ```json
  {
    "name": "string",
    "email": "string",
    "isAvailable": "boolean"
  }
  ```

#### Toggle Availability
- **URL:** `/toggle-availability`
- **Method:** `POST`
- **Description:** Toggle the availability status of the current captain.
- **Response:**
  ```json
  {
    "name": "string",
    "email": "string",
    "isAvailable": "boolean"
  }
  ```

#### Wait for New Ride
- **URL:** `/wait-for-new-ride`
- **Method:** `GET`
- **Description:** Wait for a new ride request.
- **Response:**
  ```json
  {
    "rideData": "object"
  }
  ```

