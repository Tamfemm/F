import mongoose from "mongoose";

const imageSchema=new mongoose.Schema({url:String,publicId:String},{_id:false});
const aboutPageSchema=new mongoose.Schema({
  singletonKey:{type:String,default:"tamara",unique:true},
  pageTitle:{type:String,trim:true,maxlength:120,default:"About Me"},
  displayName:{type:String,trim:true,maxlength:120,default:"Tamara"},
  tagline:{type:String,trim:true,maxlength:300},
  bio:{type:String,trim:true,maxlength:12000},
  contactHeading:{type:String,trim:true,maxlength:180,default:"If you have any questions, contact me here:"},
  contactText:{type:String,trim:true,maxlength:500},
  contactEmail:{type:String,trim:true,maxlength:200},
  mainImage:imageSchema,
  gallery:{type:[imageSchema],validate:[value=>value.length<=12,"Maximum 12 gallery images"]},
  updatedAt:{type:Date,default:Date.now}
},{versionKey:false});

aboutPageSchema.pre("save",function(){this.updatedAt=new Date()});
export default mongoose.model("AboutPage",aboutPageSchema);
