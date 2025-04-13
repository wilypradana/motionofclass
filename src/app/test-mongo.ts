import mongoose from "mongoose";

const uri =
  "mongodb+srv://erbuks:jamankecil1945@kalkoa.6h0cqfq.mongodb.net/?retryWrites=true&w=majority&appName=kalkoa";

async function testMongoConnection() {
  try {
    await mongoose.connect(uri);
    console.log("✅ MongoDB connection successful!");
    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ MongoDB connection failed!");
    console.error(error);
  }
}

testMongoConnection();
