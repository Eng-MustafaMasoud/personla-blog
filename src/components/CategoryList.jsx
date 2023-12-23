import Image from 'next/image'
import React from 'react'

const CategoryList = () => {
  return ( 
    <section className='my-16 flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>Popular categories</h2>
      <div className="cats justify-between w-full  gap-4">
        <div className="flex items-center gap-2 px-16 py-4 bg-[#e7b8b8] rounded-lg">
          <Image width={50} height={50} className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/19562401/pexels-photo-19562401/free-photo-of-marketplace.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="food" />
          <p className='text-lg'>food</p>
        </div>
        <div className="flex items-center gap-2 px-16 py-4 bg-[#dfe47c] rounded-lg">
          <Image width={50} height={50} className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/18040543/pexels-photo-18040543/free-photo-of-antarctica-propeller-aircraft.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="travel" />
          <p className='text-lg'>travel</p>
        </div>
        <div className="flex items-center gap-2 px-16 py-4 bg-[#54a6bd] rounded-lg">
          <Image width={50} height={50}  className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/11118383/pexels-photo-11118383.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="culture" />
          <p className='text-lg'>Culture</p>
        </div>
        <div className="flex items-center gap-2 px-16 py-4 bg-[#c26a6a] rounded-lg">
          <Image width={50} height={50} className="w-12 h-12 rounded-full"src="https://images.pexels.com/photos/19480465/pexels-photo-19480465/free-photo-of-woman-sitting-on-a-stone-bench-on-a-square.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="style" />
          <p className='text-lg'>style</p>
        </div>
        <div className="flex items-center gap-2 px-16 py-4 bg-[#8adcbf] rounded-lg">
          <Image width={50} height={50} className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600" alt="coding" />
          <p className='text-lg'>coding</p>
        </div>
        <div className="flex items-center gap-2 px-16 py-4 bg-[#689cd6] rounded-lg">
          <Image width={50} height={50} className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600" alt="design" />
          <p className='text-lg'> design</p>
        </div>
      </div>
     
    </section>
  )
}

export default CategoryList