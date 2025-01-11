# User Service API Documentation

## Endpoints

### Register a new user
- **URL:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string",
    "email": "string"
  }
  ```
- **Response:**
  - `201 Created` on success
  - `400 Bad Request` on validation error

### Login a user
- **URL:** `/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  - `200 OK` on success
  - `401 Unauthorized` on authentication failure

### Logout a user
- **URL:** `/logout`
- **Method:** `POST`
- **Description:** Logs out a user.
- **Response:**
  - `200 OK` on success

### Get user profile
- **URL:** `/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the authenticated user.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - `200 OK` on success
  - `401 Unauthorized` if not authenticated

### Get accepted ride
- **URL:** `/accepted-ride`
- **Method:** `GET`
- **Description:** Retrieves the accepted ride of the authenticated user.
- **Headers:**
  - `Authorization: Bearer <token>`
- **Response:**
  - `200 OK` on success
  - `401 Unauthorized` if not authenticated
