import swaggerJSDoc from "swagger-jsdoc";   
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Blog API",
      version: "1.0.0",
      description: "A simple Express Blog API",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the API docs
};

const specs = swaggerJSDoc(options);

export { specs, swaggerUi };