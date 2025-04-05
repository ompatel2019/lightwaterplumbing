import React from 'react'
import PageHeadingHeader from './PageHeadingHeader'

const PageHeading = ({ img, route, heading, subheading }) => {
  return (
    <section
      className="relative w-full lg:h-[75vh] md:h-[60vh] sm:h-[50vh] h-[50vh] flex items-center justify-start text-white font-supreme text-left"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 responsivePad pt-24">
        <PageHeadingHeader
          route={route}
          heading={heading}
          subheading={subheading}
        />
      </div>
    </section>
  )
}

export default PageHeading
