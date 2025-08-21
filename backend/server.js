import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import newsRoutes from "./routes/newsRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import "./services/schedulerService.js"; // <-- Import scheduler

dotenv.config();
connectDB();

const app = express();

// CORS Configuration - Allow specific origins
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [
      "http://127.0.0.1:3000",
      "https://news24hrs.com",
      "http://localhost:3000"
    ];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS blocked request from origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,PUT,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

// Test Route (Useful for testing the server is running)
app.get("/", (req, res) => {
  console.log("Root route accessed");
  res.send("🚀 API is live and running smoothly!");
});

// API Routes
app.use("/api/news", newsRoutes);
app.use("/api/contacts", contactRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
});
