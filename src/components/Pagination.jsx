import React from 'react'

const Pagination = ({nextPage,prevPage,currPage,lastPage}) => {
  return (
    <div className='flex justify-center w-full  text-light items-center gap-4 h-full'>
      <button onClick={prevPage}className={currPage<=1?"cursor-not-allowed bg-red-500 py-2 px-4":"cursor-pointer bg-red-500 py-2 px-4"}>Previous</button>
      <button onClick={nextPage} className={currPage>= lastPage?"cursor-not-allowed bg-red-500 py-2  px-6":"cursor-pointer bg-red-500 py-2 px-6"}>Next</button>
      
    </div>
  )
}

export default Pagination