import { serve } from "bun";
import { Database } from "bun:sqlite";
import index from "./index.html";

const db = new Database("data.sqlite");

const server = serve({
  routes: {
    "/*": index,
    "/api/products": {
      async GET(req) {
        const products = db.query("SELECT * FROM products").all();
        return Response.json(products);
      }
    }
  },

  development: true,
});

console.log(`🚀 Server running at ${server.url}`);