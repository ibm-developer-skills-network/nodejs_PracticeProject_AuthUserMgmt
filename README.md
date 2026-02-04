# Node.js Authentication & User Management

A Node.js practice project that demonstrates user authentication and friend management using Express.js, JWT (JSON Web Tokens), and session-based authentication.

## Project Overview

This project implements a backend API with the following key features:

- **User Authentication**: Register and login functionality with session management
- **JWT Token Based Access Control**: Secure endpoints using JSON Web Tokens
- **Friend Management**: CRUD operations to manage a list of friends with their details
- **User Validation**: Check for existing users and authenticate credentials

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **JWT (jsonwebtoken)** - Token-based authentication
- **Express Session** - Server-side session management
- **Nodemon** - Development tool for auto-reloading

## API Endpoints

### Authentication Routes

- `POST /register` - Register a new user
- `POST /login` - Login with username and password

### Friends Routes (Protected)

- `GET /friends` - Retrieve all friends
- `GET /friends/:email` - Get a specific friend by email
- `POST /friends` - Add a new friend
- `PUT /friends/:email` - Update friend details
- `DELETE /friends/:email` - Delete a friend

## Getting Started

### Installation

```bash
npm install
```

### Running the Project

```bash
npm start
```

The server will start with nodemon for development with auto-reload enabled.

## License

MIT
