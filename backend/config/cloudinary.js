import { v2 as cloudinary } from "cloudinary";
import "dotenv/config.js";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAM,
    cloud_api: process.env.CLOUDINARY_API_KEY,
    cloud_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};

export default connectCloudinary;
