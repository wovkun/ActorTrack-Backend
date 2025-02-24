module.exports = {
    "/performances/getPerformances": {
      get: {
        summary: "Get all performances",
        tags: ["Performances"],
        security: [{ BearerAuth: [] }],
        responses: {
          200: {
            description: "Successfully retrieved all performances",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: { type: "string" },
                      title: { type: "string" },
                      year: { type: "number" },
                      budget: { type: "number" },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  
    "/performances/createPerformance": {
      post: {
        summary: "Create a new performance",
        tags: ["Performances"],
        security: [{ BearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string", example: "Hamlet" },
                  year: { type: "number", example: 2024 },
                  budget: { type: "number", example: 50000 },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Performance created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    title: { type: "string" },
                    year: { type: "number" },
                    budget: { type: "number" },
                  },
                },
              },
            },
          },
          400: {
            description: "Bad request - Missing required fields",
          },
        },
      },
    },
  
    "/performances/getPerformanceById/{id}": {
      get: {
        summary: "Get a performance by ID",
        tags: ["Performances"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "The ID of the performance to retrieve",
          },
        ],
        responses: {
          200: {
            description: "Performance details",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    _id: { type: "string" },
                    title: { type: "string" },
                    year: { type: "number" },
                    budget: { type: "number" },
                  },
                },
              },
            },
          },
          404: {
            description: "Performance not found",
          },
        },
      },
    },
  
    "/performances/updatePerformance/{id}": {
      put: {
        summary: "Update a performance",
        tags: ["Performances"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "The ID of the performance to update",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: { type: "string", example: "Updated Title" },
                  year: { type: "number", example: 2025 },
                  budget: { type: "number", example: 60000 },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Performance updated successfully",
          },
          404: {
            description: "Performance not found",
          },
        },
      },
    },
  
    "/performances/deletePerformance/{id}": {
      delete: {
        summary: "Delete a performance",
        tags: ["Performances"],
        security: [{ BearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "The ID of the performance to delete",
          },
        ],
        responses: {
          200: {
            description: "Performance deleted successfully",
          },
          404: {
            description: "Performance not found",
          },
        },
      },
    },
  };
  