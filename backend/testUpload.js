import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

console.log("Config:", cloudinary.config());

console.log(
  "File exists:",
  fs.existsSync("/Users/shreykantsingh/Desktop/test.png"),
);

try {
  const result = await cloudinary.uploader.upload(
    "/Users/shreykantsingh/Desktop/test.png",
    {
      resource_type: "image",
    },
  );

  console.log(result);
} catch (err) {
  console.dir(err, { depth: null });
}

