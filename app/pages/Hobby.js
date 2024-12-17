import React from 'react'
import Hobbycard from '../components/Hobbycard'

const Hobby = () => {
  return (
    <div>
        <div className="text-center mt-32 pt-8 bg-gray-100">
              <span className="font-cursive text-3xl">
                My
              </span>
              <span className="text-coolgrey font-semibold font-cursive text-3xl ml-4">
                Hobbies
              </span>
            </div>
        <div><Hobbycard/></div>
      
    </div>
  )
}

export default Hobby
