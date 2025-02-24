module.exports = {
    "/actors": {
      "get": {
        "summary": "Get all actors",
        "tags": ["Actors"],
        "responses": {
          "200": {
            "description": "A list of all actors",
            "content": {
              "application/json": {
                "example": [
                  {
                    "_id": "123456",
                    "firstName": "John",
                    "lastName": "Doe",
                    "title": "Lead Actor",
                    "experience": "10 years",
                    "awards": ["Best Actor"]
                  }
                ]
              }
            }
          }
        }
      },
      "post": {
        "summary": "Create a new actor",
        "tags": ["Actors"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "example": {
                "firstName": "John",
                "lastName": "Doe",
                "middleName": "Michael",
                "title": "Lead Actor",
                "experience": "10 years",
                "awards": ["Best Actor"]
              }
            }
          }
        },
        "responses": {
          "201": { "description": "Actor created successfully" },
          "400": { "description": "Invalid input" }
        }
      }
    },
    "/actors/{id}": {
      "get": {
        "summary": "Get an actor by ID",
        "tags": ["Actors"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "schema": { "type": "string" }
          }
        ],
        "responses": {
          "200": { "description": "Actor found" },
          "404": { "description": "Actor not found" }
        }
      },
      "put": {
        "summary": "Update an actor",
        "tags": ["Actors"],
        "parameters": [{ "name": "id", "in": "path", "required": true }],
        "requestBody": { "required": true },
        "responses": { "200": { "description": "Actor updated" } }
      },
      "delete": {
        "summary": "Delete an actor",
        "tags": ["Actors"],
        "parameters": [{ "name": "id", "in": "path", "required": true }],
        "responses": { "200": { "description": "Actor deleted" } }
      }
    }
  };