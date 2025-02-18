# School Management System

## Overview

This School Management System is designed to keep track of students' results and manage student data efficiently. Built using Node.js and Express, along with MongoDB for data storage, this application provides a simple API for managing student records.

## Features

- **Student Management**: Add, retrieve, and manage student records.
- **Database Connectivity**: Utilizes MongoDB Atlas for data storage and retrieval.
- **RESTful API**: Provides endpoints for creating and retrieving student data.
- **Cross-Origin Resource Sharing (CORS)**: Enables secure cross-origin requests.
- **Static File Serving**: Serves static files and views using EJS.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing student data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **EJS**: Template engine for rendering views.
- **CORS**: Middleware to enable CORS.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or later)
- MongoDB (or access to MongoDB Atlas)

### Steps

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add your MongoDB connection string:

   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/LiveGenericSchoolsDB?retryWrites=true&w=majority
   ```

   Replace `<username>` and `<password>` with your MongoDB credentials.

4. **Run the Application**:

   ```bash
   node app.js
   ```

   The server will start, and you will see the server IP address and port in the console.

## API Endpoints

### 1. Create a New Student

- **Method**: `POST`
- **Endpoint**: `/CreateStudent`
- **Request Body**:

  ```json
  {
      "StudentID": "Test001",
      "FirstName": "Wassanyi",
      "DateOfBirth": "2000-12-31T21:00:00.000Z",
      "Gender": "M",
      "EnrollmentDate": "2001-01-31T21:00:00.000Z",
      "SchoolID": "TstSch001",
      "imgUrl": "",
      "RecordDate": "2001-01-31T21:00:00.000Z",
      "CreatedBy": "",
      "ModifiedAt": "1999-12-31T21:00:00.000Z",
      "ModifiedBy": ""
  }
  ```

### 2. Retrieve All Students

- **Method**: `POST`
- **Endpoint**: `/Students`

### 3. Home Route

- **Method**: `GET`
- **Endpoint**: `/`
- **Response**: Renders the `index` view.

### 4. API Test Route

- **Method**: `GET`
- **Endpoint**: `/api`
- **Response**: Returns a simple JSON message.

## Logging

The application logs the server's IP address and the port it's running on when started. This is useful for identifying where the server is accessible.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to customize this README further based on your project's specific features, setup instructions, or requirements!