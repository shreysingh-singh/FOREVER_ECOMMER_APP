import mongoose from "mongoose";


const connectedDb = async() => {
    mongoose.connection.on('connected', () => {
        console.log('DB is Connceted');
        
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
}

export default connectedDb;