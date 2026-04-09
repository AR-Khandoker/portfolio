import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import projectsRoutes from "./projects_db.tsx";
import aboutRoutes from "./about_db.tsx";
import landingRoutes from "./landing_db.tsx";
import uploadRoutes from "./upload_handler.tsx";
import authRoutes from "./auth_routes.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-4ba1cc9d/health", (c) => {
  return c.json({ status: "ok", message: "KV Store API ready - auto-initialized!" });
});

// Mount routes
app.route("/", projectsRoutes);
app.route("/", aboutRoutes);
app.route("/", landingRoutes);
app.route("/", uploadRoutes);
app.route("/", authRoutes);

Deno.serve(app.fetch);