import Book from "../model/book.model.js"

export const getBook=async(req,res)=>{
    try {
        const book =await Book.find()
        //agar find krne pr desired data mil jata h toh response me status show krdo 200, 200 is the status code of SUCCESS!
        //jab yeh kam ho raha hota h toh isme time lgta h kyuki yeh asynchronus operation h toh isliye async await lga rhe h taki jab tk response na ajaye tab tk function ka execution pause pr rhe
        res.status(200).json(book)
    } catch (error) {
        console.log("Error: ",error)
        //agar data nahi milta h toh yeh status code dikha denge 500 which is status code for INTERNAL SERVER ERROR!
        res.status(500).json(error)
    }
};