import { Request, Response } from "express";
import { multerRequest } from "./types/types";

const express = require("express");
const multer = require("multer");
const AWS = require("aws-sdk");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload Endpoint
app.post("/upload", upload.single("file"), async (req: multerRequest, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }

    const fileName = `${uuidv4()}-${path.basename(req.file.originalname)}`;

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName, 
      Body: req.file.buffer, 
      ContentType: req.file.mimetype, 
    };

    const uploadResult = await s3.upload(params).promise();
    console.log("File uploaded to S3:", uploadResult.Location);

    res.status(200).json({ message: "File uploaded successfully.", url: uploadResult.Location });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send("Error uploading file.");
  }
});

app.get("/",(req: Request, res: Response)=>{
  res.send("working")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
