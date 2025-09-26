import mongoose from "mongoose";



const db_Connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ Error connecting to DB:", err.message);
    process.exit(1);
  }
};

export default db_Connect;
