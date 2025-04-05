import React from 'react'

const PageHeadingHeader = ({route, heading, subheading}) => {
  return (
    <header className='lg:space-y-8 md:space-y-6 space-y-4 text-left'>
        <p className='p font-supreme'>
            {route}
        </p>

        <h1 className='h2 font-supreme-extrabold'>
            {heading}
        </h1>

        <h3 className='h7 font-supreme-medium'>
            {subheading}
        </h3>
    </header>
  )
}

export default PageHeadingHeader