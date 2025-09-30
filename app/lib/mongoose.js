
import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise(); 
  } else {
    const uri =
      "mongodb+srv://wambuapeter989_db_user:ZvnN2o22lnZjnMyd@cluster0.mcqezzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    return mongoose.connect(uri);
  }
}
