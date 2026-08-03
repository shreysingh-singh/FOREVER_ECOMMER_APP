import express from 'express';
import  { listProducts, addProducts, removeProducts, singleProducts} from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuthMiddleware from '../middleware/adminAuth.js';

const productRoute = express.Router();

productRoute.post(
  "/add",
  adminAuthMiddleware,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProducts,
);
productRoute.post("/remove", adminAuthMiddleware, removeProducts);
productRoute.post('/single', singleProducts);
productRoute.get('/list', listProducts);


export default productRoute;