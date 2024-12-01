import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';

// Configuration
cloudinary.config({
  cloud_name: 'fuderrpham',
  api_key: '865592985827542',
  api_secret: process.env.CLOUDIARY_SECRET, // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const storageCloud = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images',
  } as any,
});

export default storageCloud;
