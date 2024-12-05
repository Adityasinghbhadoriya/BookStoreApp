import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
function Course() {
  // console.log(list)
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'> 
          <h1 className='text-2xl  md:text-4xl'>We Are Delighted to have you{" "} <span className='text-amber-600'>Here! :)</span></h1>
          <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolores repellat cumque voluptatem, illum, voluptas sequi voluptates omnis quisquam aspernatur ipsam. Tenetur labore ratione itaque! Voluptates cum amet corporis reprehenderit nobis vel laborum? Est, cupiditate.</p>
         <Link to= '/'>
         <button  className='bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 duration-100 mt-8'>Back</button>
         </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 sm:grid-col-2  lg:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))

          }
        </div>
      </div>
    </>
  )
}

export default Course