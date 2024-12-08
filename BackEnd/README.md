# Backend Setup Guide

This guide will walk you through setting up the backend of your application, installing dependencies, and configuring the environment for MongoDB.

## Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org) (preferably the latest LTS version)

- MongoDB (either local or an online service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

## Step 1: Navigate to the Backend Folder

If you already have the repository cloned, navigate to the backend directory:

```bash
cd <path_to_your_project>/BackEnd
```

If you're not sure of the path, make sure you're inside the project folder where the backend code is located.

## Step 2: Install Node.js Dependencies

Once you're in the backend folder, install all the necessary dependencies by running:

```bash
npm install
```

This will install all the required dependencies defined in the `package.json` file.

## Step 3: Create `.env` File

Create a `.env` file in the root of the backend directory. This file will hold sensitive information, such as your MongoDB connection string.

To create a `.env` file, follow these steps:

1. In the root of your project, create a new file called `.env`.
2. Open the `.env` file and add the following content:

```env
# MongoDB Connection URI
MONGO_URI=<Your_MongoDB_Connection_URL>
```

### Local MongoDB URL

If you're running MongoDB locally (default port is `27017`), your `MONGO_URI` will look something like this:

```env
MONGO_URI=mongodb://localhost:27017/your_database_name
```

### MongoDB Atlas (Online) URL

If you're using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), you will get a connection string from the Atlas dashboard. Your `MONGO_URI` will look like this:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your_database_name>?retryWrites=true&w=majority
```

Make sure to replace the following:

- `<username>`: Your MongoDB Atlas username.
- `<password>`: Your MongoDB Atlas password.
- `<your_database_name>`: The name of your database in MongoDB Atlas.

## Step 4: Run the Backend Server

Once you've installed the dependencies and configured the environment, you can start the backend server by running:

```bash
npm start
```

Your server should now be up and running, connected to MongoDB (local or Atlas).

## Troubleshooting

- **"MongoDB connection error"**: Ensure your MongoDB URI is correct in the `.env` file and that your MongoDB server (local or Atlas) is running.
- **Environment variable not loading**: Ensure the `.env` file is located in the root of your backend directory and that your server is correctly configured to load it.

---

This concludes the setup for the backend. If you have any other questions or issues, feel free to reach out!
