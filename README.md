# Node-Express-Challenge

A simple REST API built with Express.js that performs basic CRUD operations on a list of actors.

## Features

* Get all actors
* Get actor by ID
* Create a new actor
* Update an existing actor
* Delete an actor

## Technologies Used

* Node.js
* Express.js
* CORS

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/IS5416-creator/node-express-challenge.git
```

2. Install dependencies:

```
npm install
```

3. Start the server:

```
npm run dev
```

Server will run on:

```
http://localhost:3001
```

## API Endpoints

### GET all actors

```
GET /actors
```

### GET actor by ID

```
GET /actors/:id
```

### Create a new actor

```
POST /actors
```

Body:

```
{
  "name": "Actor Name",
  "height": 180,
  "birth_year": 1990
}
```

### Update an actor

```
PUT /actors/:id
```

Body (partial updates allowed):

```
{
  "name": "Updated Name"
}
```

### Delete an actor

```
DELETE /actors/:id
```

## Note

This project uses in-memory storage. Changes are not persisted to the JSON file and will reset when the server restarts.

## Author

Israel Alazar
