import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  mcq: {
    type: String,
    required: true,
  },
  checkbox: {
    type: String,
    required: true,
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


const Details= mongoose.models.details || mongoose.model("details", userSchema);
export default Details;