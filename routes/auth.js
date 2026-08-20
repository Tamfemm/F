import {Router} from "express";import bcrypt from "bcryptjs";import User from "../models/User.js";import Profile from "../models/Profile.js";
const router=Router();
router.get("/register",(_,res)=>res.render("auth",{mode:"register",error:null}));
router.post("/register",async(req,res)=>{try{const email=String(req.body.email||"").toLowerCase().trim(),password=String(req.body.password||"");if(!/^\S+@\S+\.\S+$/.test(email)||password.length<8)return res.status(400).render("auth",{mode:"register",error:"Use a valid email and a password of at least 8 characters."});if(await User.exists({email}))return res.status(409).render("auth",{mode:"register",error:"That email already has an account."});const user=await User.create({email,passwordHash:await bcrypt.hash(password,12)});req.session.userId=user._id.toString();res.redirect("/dashboard") }catch(e){res.status(500).render("auth",{mode:"register",error:"Could not create the account. Please try again."})}});
router.get("/login",(_,res)=>res.render("auth",{mode:"login",error:null}));
router.post("/login",async(req,res)=>{const user=await User.findOne({email:String(req.body.email||"").toLowerCase().trim()});if(!user||!await bcrypt.compare(String(req.body.password||""),user.passwordHash))return res.status(401).render("auth",{mode:"login",error:"Incorrect email or password."});req.session.userId=user._id.toString();res.redirect("/dashboard")});
router.post("/logout",(req,res)=>req.session.destroy(()=>res.redirect("/")));
router.get("/dashboard",async(req,res)=>{if(!req.session.userId)return res.redirect("/login");const profile=await Profile.findOne({owner:req.session.userId}).lean();res.render("dashboard",{profile})});
export default router;
