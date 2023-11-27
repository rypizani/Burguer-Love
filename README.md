Certainly! Below is the updated README.md with the mention of using Docker to access a MongoDB database:

```markdown
# Burger Love

Burger Love is a React TypeScript project that leverages a MongoDB database through Mongoose, all containerized with Docker. This project allows users to interact with a delightful burger-themed application.

## Installation

Before running the application, make sure you have Docker installed on your machine. Follow these steps to set up and run the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/rypizani/Teste-React-Mongo
    cd burger-love
    ```

2. Install dependencies Front:

    ```bash
    yarn 
    ```

3. Start the React application:

    ```bash
    yarn start
    ```

Visit `http://localhost:3000` in your web browser to experience Burger Love.

## Usage

- Explore a variety of burger options.
- Customize your burger with different ingredients.
- Enjoy a visually appealing and interactive user interface.

## Technologies Used

- React
- TypeScript
- Mongoose
- Docker

## Dependencies

- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `@types/jest`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `atropos`
- `axios`
- `hamburger-react`
- `primereact`
- `react`
- `react-dom`
- `react-hot-toast`
- `react-icons`
- `react-router-dom`
- `react-scripts`
- `sass`
- `swiper`
- `typescript`
- `web-vitals`

## Scripts

- **start**: Run the development server.

## Development Tools

- ESLint
- @typescript-eslint/eslint-plugin
- eslint-config-standard-with-typescript
- eslint-plugin-import
- eslint-plugin-n
- eslint-plugin-promise
- eslint-plugin-react

## Contributing

Feel free to contribute to Burger Love by opening issues or creating pull requests. We appreciate your input!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

# API Mongoose

API Mongoose is the backend for the Burger Love project, providing essential functionalities through an Express server and MongoDB database with Mongoose. Below is the information and instructions for setting up and running the API.

# Project Authentication, Security, and CORS

## Overview

This project prioritizes user authentication and security by implementing access tokens and robust password encryption techniques. Access tokens are utilized for user authentication, adding an extra layer of security to protect sensitive information. Additionally, user passwords are securely handled through encryption to ensure confidentiality. To enhance security further, Cross-Origin Resource Sharing (CORS) is implemented to control and secure cross-origin requests.

### Dockerized MongoDB

The MongoDB database for this project is containerized using Docker. Make sure you have Docker installed and running on your machine. You can start the MongoDB Docker container with the following commands:

```bash
npm run build-mongo-image
npm run start-mongo-container
```

This will build the MongoDB Docker image and start a container named `bancomongo-container` on port 27017.

## 1. Generating Access Tokens

To authenticate users and enable secure access to protected routes, access tokens are generated during user registration or login. The generated access token serves as a unique and temporary key that should be included in the headers of authenticated requests.

### Implementation Details

In the source code, the `generateRandomToken` function is responsible for creating secure tokens. This function takes a user object (`User`) as an argument and employs robust algorithms to generate a unique token associated with that user. Ensure that the generated token is included in the headers of your requests, using it as the means of authentication.

## 2. Password Encryption

Securing user passwords is of utmost importance, and this project employs a hash technique to store passwords securely in the database. During the registration process, the user-provided password is converted into an irreversible hash before being stored.

### Implementation Details

The password comparison during login is facilitated by the `comparePassword` function. This function compares the user-provided password with the hash stored in the database, ensuring that passwords remain confidential even in the event of unauthorized access to the database.

## 3. Cross-Origin Resource Sharing (CORS)

To control and secure cross-origin requests, CORS is implemented. This ensures that the web application running at one origin can request and receive resources from a different origin only if the server explicitly allows it. Proper CORS configuration helps prevent unauthorized access to sensitive data.

### Implementation Details

Configure CORS settings in your server to specify which origins are allowed to access the resources. This can be done using middleware or server configuration, depending on the technology stack you are using.

By incorporating these authentication, security, and CORS practices, this project aims to provide a robust and secure environment for user interactions while controlling cross-origin requests to maintain data integrity.

## Installation

Before running the API, make sure you have Node.js and npm installed on your machine. Follow these steps to set up the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/rypizani/Teste-React-Mongo
    cd api_mongoose
    ```

2. Build and run the MongoDB Docker container:

    ```bash
    npm run build-mongo-image
    npm run start-mongo-container
    ```

    This will build the MongoDB Docker image and start a container named `bancomongo-container` on port 27017.

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the API:

    ```bash
    npm start
    ```

## Usage

The API provides endpoints for managing burger data. Here are some of the key features:

- **GET /burgers**: Get a list of all burgers.
- **GET /burgers/:id**: Get details of a specific burger.
- **POST /burgers**: Add a new burger.
- **PUT /burgers/:id**: Update information for a specific burger.
- **DELETE /burgers/:id**: Delete a burger.

Make sure the Burger Love frontend is configured to communicate with this API.

## Technologies Used

- Express
- TypeScript
- Mongoose
- Bcrypt
- CORS
- JSON Web Token (jsonwebtoken)

## Dependencies

### Production Dependencies

- **bcrypt** (^5.1.1)
  - **Description:** A password hashing library that helps protect password information in the database.
  - **Usage:** Used to encrypt passwords before storing them in the database.

- **cors** (^2.8.5)
  - **Description:** Middleware that allows or blocks resource requests on a web page to a domain different from the document being served.
  - **Usage:** Essential for allowing requests from different origins (such as the frontend) to access the API.

- **express** (^4.18.2)
  - **Description:** Fast, minimalist, and flexible web framework for Node.js, used to build web applications and APIs.
  - **Usage:** Facilitates the creation of routes, handling of requests and responses, and overall management of web applications.

- **jsonwebtoken** (^9.0.2)
  - **Description:** Implementation of JSON Web Tokens (JWT) for authentication and authorization between parties, generating secure tokens.
 

 - **Usage:** Generates and verifies JWT tokens for user authentication, especially useful for protecting sensitive routes.

- **mongoose** (^8.0.1)
  - **Description:** Object Data Modeling (ODM) for MongoDB and Node.js, providing an elegant solution for data modeling.
  - **Usage:** Facilitates interaction with the MongoDB database, defines schemas, and provides methods for performing operations on the database.

- **ts-node** (^10.9.1)
  - **Description:** Allows you to run TypeScript files directly, without the need to manually compile to JavaScript.
  - **Usage:** Facilitates development in TypeScript, allowing direct execution of .ts files.

- **typescript** (^5.3.2)
  -

 **Description:** Typed superset of JavaScript that compiles to pure JavaScript. Adds support for static types to JavaScript.
  - **Usage:** Used for TypeScript development, adding static typing to the code to improve robustness and maintainability.

### Type Dependencies

- **@types/mongoose** (^5.11.97)
  - **Description:** TypeScript type package for Mongoose, providing type definitions for safer integration and autocompletion in TypeScript code.
  - **Usage:** Improves the development experience when using Mongoose with TypeScript.

- **@types/node** (^20.9.4)
  - **Description:** TypeScript type package for Node.js, offering type definitions for the core modules and APIs of Node.js.
  - **Usage:** Improves the development experience when using Node.js features in TypeScript code.

## Development Dependencies

- **@types/bcrypt** (^5.0.2)
- **@types/cors** (^2.8.17)
- **@types/express** (^4.17.21)
- **@types/jsonwebtoken** (^9.0.5)

## Contributing

Feel free to contribute to the API Mongoose by opening issues or creating pull requests. Your contributions are welcome!

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

*Note: Ensure that you have MongoDB running locally or update the connection details in the `index.ts` file to point to your MongoDB instance.*
```

Now, users will be aware that Docker is used to containerize the MongoDB database for this project.