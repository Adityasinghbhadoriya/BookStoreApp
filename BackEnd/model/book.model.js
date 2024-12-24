import mongoose from "mongoose";
//yeh hi schema udhr mongodb me show hoga jo jo likha h vo toh ensure krna ki sari details jo list me h vo yaha pass kro
const  bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})
//fir yaha ek variable me store krna pdega taki jab bhi data aaye toh vo mongoDB me jaa ske jo bhi nam doge jaise ki Book toh Book's nam se store hoga , Aditya nam doge toh Adityas nam se 
const Book=mongoose.model("Book", bookSchema);
//fir export krdo
export default Book;