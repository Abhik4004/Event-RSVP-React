# Collaborative Task Manager

## Overview

The Collaborative Task Manager is a web application designed to help teams manage tasks and collaborate effectively. Users can create projects, add tasks, assign team members, and track task progress with real-time updates.

## Features

- **Create Projects**: Easily create and manage projects.
- **Add Tasks**: Add tasks with details such as description, due date, and assignee.
- **Task Status Tracking**: Track task progress with statuses such as Pending, In Progress, and Completed.
- **User Management**: Assign tasks to team members and view their RSVP status.

## Technologies Used

- **Frontend**: React.js
<!-- - **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.IO -->
- **Styling**: CSS

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setup the Backend**

   - Navigate to the `server` directory and install dependencies:

     ```bash
     cd server
     npm install
     ```

   - Start the server:

     ```bash
     node server.js
     ```

4. **Setup the Frontend**

   - Navigate to the `client` directory:

     ```bash
     cd ../client
     npm start
     ```

### Configuration

- Update the MongoDB connection string in `server/config.js`.
- Set up any necessary environment variables in `.env`.

## Usage

1. **Create a New Project**

   - Navigate to the Projects section and click "Create Project".

2. **Add Tasks**

   - Select a project and click "Add Task" to create a new task with details.

3. **Assign Tasks**

   - Assign tasks to team members and set the status.

4. **Track Progress**
   - Use the task list to view and update task statuses in real-time.

## Future Work :

Backe-end will be added using nodejs as soon as front-end is done.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and add tests for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
