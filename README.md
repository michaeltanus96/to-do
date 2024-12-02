
# To-Do List Application

A simple, user-friendly **To-Do List Application** that allows users to manage their tasks efficiently. This project consists of a front-end built with modern web technologies and a back-end server for managing to-do items.

## Features

- Add new to-do items
- View a list of all to-do items
- Delete completed tasks
- Responsive and intuitive UI

## Live Demo

You can try the live version of the application here:  
[**To-Do List Application**](https://main--luxury-raindrop-43167f.netlify.app/)

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- Axios (for API calls)

### Backend
- Node.js
- Express.js

### Testing
- Cypress (for end-to-end testing)

---

## Getting Started

Follow these steps to set up the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/michaeltanus96/to-do.git
cd to-do
```

### 2. Install Dependencies
Navigate to the front-end directory and install dependencies:
```bash
npm install
```

### 3. Run the Backend Server
The back-end server needs to be run locally. From the project root, navigate to the server directory and start the server:
```bash
node backend/server.js
```
By default, the server runs on `http://localhost:3000`.

### 4. Run the Frontend
Deploy the front-end locally by running the following command:
```bash
npm start
```
The front-end application will be available at `http://localhost:8080`.

---

## API Endpoints

The application communicates with the back-end server via the following RESTful API endpoints:

### 1. **GET /api/todos**
- Retrieves all to-do items.

### 2. **POST /api/todos**
- Adds a new to-do item.
- **Request Body**:
  ```json
  {
    "name": "Sample To-Do Item"
  }
  ```

### 3. **DELETE /api/todos/:id**
- Deletes a to-do item by its ID.

---

## Running Tests

This project includes end-to-end tests using Cypress. To run the tests:

1. Ensure the back-end server is running.
2. Start the Cypress test runner:
   ```bash
   npx cypress open
   ```
3. Select the test suite to execute and view results.

---

## Project Structure

```plaintext
to-do/
├── backend/
│   ├── server.js        # Backend server script
│   ├── routes/          # API routes
│   └── models/          # Data models (if applicable)
├── public/
│   └── index.html       # Front-end entry point
├── src/
│   ├── index.js         # Main JavaScript for the front-end
│   └── styles.css       # Application styling
├── cypress/
│   └── e2e/             # Cypress test suites
└── README.md            # Project documentation
```

---

## Contribution Guidelines

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your forked repository.
4. Open a pull request to the main branch.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute this project as per the license terms.

---

## Author

**Michael Tanus**  
[GitHub Profile](https://github.com/michaeltanus96)

---

Enjoy using the To-Do List Application! 🎉
