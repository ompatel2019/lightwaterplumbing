import React, { useState, useEffect } from 'react'
import Stat from './Stat'
import Section from './Section'

const Stats = ({ stats, bg, text, isHome }) => {
  const py = '2xl:py-12 lg:py-10 md:py-8 py-6'
  
  // Custom hook to track screen width
  const useScreenWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
    
    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResize)
      
      return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    return width
  }

  const width = useScreenWidth()
  const displayedStats = width < 480 ? stats.slice(0, 2) : stats

  let textColour = ''
  isHome ? textColour = 'text-textWhite' : textColour = 'text-textWhite'

  return (
    <Section bg={bg} text={text} py={py}>
      <div className="flex justify-between lg:justify-around">
        {displayedStats.map((stat, index) => (
          <Stat 
            key={index + 1} 
            stat={stat.stat} 
            statDesc={stat.statDesc} 
            statType={stat.statType}
            textColour={textColour}
          />
        ))}
      </div>
    </Section>
  )
}

export default Stats
