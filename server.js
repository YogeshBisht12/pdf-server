import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 10000;

// __dirname fix (ES module ke liye)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static folder serve karna
app.use(express.static("public"));

// ✅ DOWNLOAD ROUTE (important)
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "Quotation.pdf");
  res.download(filePath, "FlashSpace-Quotation.pdf");
});

// test route
app.get("/", (req, res) => {
  res.send("Server running ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});