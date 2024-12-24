import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from "axios"
function Course() {
  // console.log(list)
  const [book, setBook] = useState([]);
  useEffect(() =>{
     const getBook=async()=>{
      try {
        const res  = await axios.get("http://localhost:4001/book");//Yaha pr localhost:4001/book route se data uthayege or usko res variable ke andr store krege fir yeh data res me store hojayega or setBook(res.data) wali line ki help se yeh data upr jo useState define kra h line 7 pr vaha book me store hojayega yeh data or issi data ko fir apn neeche line number 32 me map krdenge toh yeh jake apne frontend pr show hone lgega
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
     }
     getBook();
  }, [])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-16 items-center justify-center text-center'> 
          <h1 className='text-2xl  md:text-4xl pt-12'>We Are Delighted to have you{" "} <span className='text-amber-600'>Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores repellat cumque voluptatem, illum, voluptas sequi voluptates omnis quisquam aspernatur ipsam. Tenetur labore ratione itaque! Voluptates cum amet corporis reprehenderit nobis vel laborum? Est, cupiditate.</p>
         <Link to= '/'>
         <button  className='bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 duration-100 mt-8'>Back</button>
         </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-col-2  lg:grid-cols-4'>
          {
            book.map((item) => (
              <Cards key={item.id} item={item} />
            ))

          }
        </div>
      </div>
    </>
  )
}

export default Course