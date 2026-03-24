import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ static folder serve
app.use("/files", express.static("public"));

// ✅ force download route
app.get("/download", (req, res) => {
  res.download("public/quotation.pdf", "FlashSpace-Quotation.pdf");
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});