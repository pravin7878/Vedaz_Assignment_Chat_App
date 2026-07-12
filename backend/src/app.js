import express from "express";
import cors from "cors";

import messageRoutes from "./routes/message.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Chat API is running 🚀",
    });
});

app.use("/api/messages", messageRoutes);

app.use(errorHandler);

export default app;