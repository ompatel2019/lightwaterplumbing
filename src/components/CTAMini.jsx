import React from 'react'
import { Link } from 'react-router-dom'

const CTAMini = ({text}) => {
  return (
  <div className="">
    <div className="bg-primary p-4 text-textWhite shadow-lg font-supreme-medium flex justify-center items-center">
      <Link to="/contact-us" className='flex w-fit gap-2 hover:gap-0 transition-all'>
        <p className="text-center max-md:text-sm p">
        {text}
        </p>
        <i className="bi bi-arrow-right-circle-fill ml-1 h7"></i>
      </Link>
    </div>
  </div>
  )
}

export default CTAMini