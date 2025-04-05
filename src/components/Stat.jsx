import React from 'react'
import { NumberTicker } from "@/components/magicui/number-ticker";

const Stat = ({stat, statDesc, statType, textColour}) => {
  return (
    <div>
        <p className='flex text-center items-center justify-center font-supreme-extrabold h2'>
            <NumberTicker
                value={stat}
                className={textColour}
            />
            <p className='text-textWhite'>
                {statType}
            </p>
        </p>

        <h5 className='text-center font-supreme-medium h5 text-textWhite'>
            {statDesc}
        </h5>
    </div>
  )
}

export default Stat