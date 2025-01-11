# Ride Service Documentation

## Endpoints

### Create Ride
- **URL:** `/rides`
- **Method:** `POST`
- **Description:** Create a new ride request.
- **Request Body:**
  ```json
  {
    "pickupLocation": "string",
    "dropoffLocation": "string",
    "passengerId": "string"
  }
  ```
- **Response:**
  ```json
  {
    "rideId": "string",
    "status": "string"
  }
  ```

### Get Ride Status
- **URL:** `/rides/:rideId`
- **Method:** `GET`
- **Description:** Get the status of a ride.
- **Response:**
  ```json
  {
    "rideId": "string",
    "status": "string"
  }
  ```
