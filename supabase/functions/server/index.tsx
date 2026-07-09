import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import projectsRoutes from "./projects_db.tsx";
import aboutRoutes from "./about_db.tsx";
import landingRoutes from "./landing_db.tsx";
import uploadRoutes from "./upload_handler.tsx";
import authRoutes from "./auth_routes.tsx";
import motionRoutes from "./motion_db.tsx";

const app = new Hono();

app.use('*', logger(console.log));

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

// Figma Make system health
app.get("/make-server-89f52d09/health", (c) => {
  return c.json({ status: "ok" });
});

// Custom app health
app.get("/make-server-4ba1cc9d/health", (c) => {
  return c.json({ status: "ok", message: "Portfolio API ready!" });
});

// Mount all custom routes
app.route("/", projectsRoutes);
app.route("/", aboutRoutes);
app.route("/", landingRoutes);
app.route("/", uploadRoutes);
app.route("/", authRoutes);
app.route("/", motionRoutes);

Deno.serve(app.fetch);
