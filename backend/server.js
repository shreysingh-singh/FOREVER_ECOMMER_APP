import express from 'express' 
import cros from 'cors' 
import 'dotenv/config'
import connectedDb from "./config/mongoDb.js"
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import productRoute from './routes/productRoust.js';


// => App Config 
const app = express();
const port = process.env.PORT || 4000
connectedDb();
connectCloudinary();

// => MiddleWare 
app.use(express.json());
app.use(cros());


// => Api endpoint 
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRoute);


app.listen(port, () => console.log('YOUR SERVER IS RUNNING AT: '+ port));