module.exports = {
    "/auth/signup": {
      post: {
        summary: "User Signup",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "User registered successfully",
          },
          400: {
            description: "Username already taken",
          },
        },
      },
    },
  
    "/auth/login": {
      post: {
        summary: "User Login",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  username: { type: "string" },
                  password: { type: "string" },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login successful, returns JWT token",
          },
          400: {
            description: "Invalid username or password",
          },
        },
      },
    },
  };
  