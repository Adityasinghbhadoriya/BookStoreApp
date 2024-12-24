import express from "express";
import { getBook } from "../controller/book.controller.js";
//It's an API
const router=express.Router()
//yaha pr routes define honge jisse ki jab bhi yeh routes render ho toh controller ke andr jo function hai vo run hojaye
router.get("/",getBook);

export default router;