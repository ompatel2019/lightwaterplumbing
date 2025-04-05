import React from 'react'
import { NumberTicker } from "@/components/magicui/number-ticker";

const Stat = ({stat, statDesc, statType, textColour}) => {
  return (
    <div>
        <h3 className='flex text-center items-center justify-center font-supreme-extrabold h3'>
            <NumberTicker
                value={stat}
                className={textColour}
            />
            <p className='text-textWhite'>
                {statType}
            </p>
        </h3>

        <h5 className='text-center font-supreme-medium h5 text-textWhite'>
            {statDesc}
        </h5>
    </div>
  )
}

export default Stat