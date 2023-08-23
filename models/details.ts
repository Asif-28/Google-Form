import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  mcq: {
    type: String,
    required: true,
    unique: true,
  },
  checkbox: {
    type: String,
    required: true,
    unique: true,
  },
  shortAnswer: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
  dropdown:{
    type: String,
    required: true,
  },
  linerScale:{
    type: String,
    required: true,
  },
  multiGrid:{
    type: String,
    required: true,
  },
  tickBoxGrid:{
    type: String,
    required: true,
  }
 
});


export default mongoose.models.details || mongoose.model("details", userSchema);