import React from 'react'
import PageHeadingHeader from './PageHeadingHeader'

const PageHeading = ({ placeholderImg, route, heading, subheading }) => {
  return (
    <section
      className="relative w-full h-[60vh] flex items-center justify-start text-white font-supreme text-left"
      style={{
        backgroundImage: `url(${placeholderImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 responsivePad">
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
