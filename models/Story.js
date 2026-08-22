import mongoose from "mongoose";

const imageSchema=new mongoose.Schema({url:String,publicId:String},{_id:false});
const storySchema=new mongoose.Schema({
  title:{type:String,required:true,trim:true,maxlength:160},
  slug:{type:String,unique:true,sparse:true},
  excerpt:{type:String,trim:true,maxlength:350},
  body:{type:String,trim:true,maxlength:12000},
  images:{type:[imageSchema],validate:[value=>value.length<=12,"Maximum 12 story images"]},
  status:{type:String,enum:["draft","published"],default:"draft",index:true},
  publishedAt:Date,
  createdAt:{type:Date,default:Date.now},
  updatedAt:{type:Date,default:Date.now}
},{versionKey:false});

storySchema.pre("save",function(){this.updatedAt=new Date();if(this.status==="published"&&!this.publishedAt)this.publishedAt=new Date();if(!this.slug&&this.title)this.slug=`${this.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}-${this._id.toString().slice(-6)}`});
export default mongoose.model("Story",storySchema);
