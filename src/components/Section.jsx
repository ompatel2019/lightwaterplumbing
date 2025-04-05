import React from 'react'

const Section = ({bg, text, py, children}) => {
    py ? '' : py = '2xl:py-32 xl:py-24 md:py-16 py-12'
  return (
    <section className={`${bg} ${text} ${py} responsivePad space-y-8 `}>
        {children}
    </section>
  )
}

export default Section