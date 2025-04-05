import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ heroImg }) => {
  const h1 = "Lightwater Plumbing - Trusted Penrith Plumbers"
  const p = "We fix plumbing issues fast and reliably. Count on our skilled team for expert repairs and installations that keep your water systems running smoothly, day and night."
  const buttonClass = 'border-2 border-transparent w-full max-w-[200px] text-textblack bg-primary 2xl:p-4 p-2 hover:bg-white text-center rounded-md p hover:text-textDark hover:border-white transition-all'

  return (
    <section
      className="relative w-full lg:h-[90vh] md:h-[75vh] h-[65vh] flex items-center justify-center text-white font-supreme"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-dark opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center responsivePad space-y-6 pt-24">
        {/* <p className='p-4 rounded-md bg-dark p text-textblack'>
          Lightwater Plumbing
        </p> */}
        <h1 className='h2 font-supreme-extrabold'>
          {h1}
        </h1>
        <p className='h7 max-w-4xl'>
          {p}
        </p>
        <div className="flex md:space-x-4 w-full gap-2 md:space-y-0 justify-center">
          <Link to='/contact-us' className={buttonClass}>Contact Us</Link>
          <Link to='/projects' className={buttonClass}>Our Recent Work</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
