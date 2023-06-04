# User Authentication and Management System

This project implements a secure and scalable User Authentication and Management System using Node.js, MongoDB, bcrypt, and JWT. It provides a comprehensive set of features for user registration, login, password management, and account deletion.

## Features

- **Signup**: Users can create a new account by providing their name, email, and password. Existing email addresses are checked to prevent duplication.
- **Login**: Registered users can securely log into their accounts using their email and password. Invalid email or password is handled with appropriate error messages.
- **Password Update**: Users can update their passwords by providing their current password along with the new password. The system validates the current password and securely stores the new password.
- **Account Deletion**: Users can delete their accounts by providing their email and password. The system verifies the credentials and permanently removes the user's data from the system.

## Installation

1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Install the dependencies: `npm install`
3. Set up the environment variables:
   - Create a `.env` file in the root directory
   - Define the following variables in the `.env` file:
     - `SECRET`: Secret key used for JWT token generation
     - Other necessary variables for MongoDB connection, etc. (refer to `.env.example`)

## Running the Application

1. Make sure MongoDB is running on your system.
2. Start the application: `npm start`
3. The application will be running on `http://localhost:3000`.

## API Endpoints

The following API endpoints are available:

- **POST /users/signup**:

  - Description: Creates a new user account.
  - Request body: `{ "name": "John Doe", "email": "johndoe@example.com", "password": "password123" }`
  - Response body: `{ "message": "User account created successfully", "data": { "user": { /* User object */ }, "token": "jwt_token" } }`

- **POST /users/login**:

  - Description: Logs in with existing credentials.
  - Request body: `{ "email": "johndoe@example.com", "password": "password123" }`
  - Response body: `{ "message": "User logged in successfully", "data": { "user": { /* User object */ }, "token": "jwt_token" } }`

- **POST /users/delete**:

  - Description: Deletes a user account.
  - Request body: `{ "email": "johndoe@example.com", "password": "password123" }`
  - Response body: `{ "message": "User account deleted successfully" }`

- **POST /users/updatePass**:
  - Description: Updates the user password.
  - Request body: `{ "email": "johndoe@example.com", "password": "password123", "newPassword": "newpassword456" }`
  - Response body: `{ "message": "Password updated successfully" }`

Refer to the API documentation for detailed information on request payloads and responses.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
