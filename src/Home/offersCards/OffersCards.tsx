import FiftyPercentOff from './FiftyPercentOff/FiftyPercentOff'
import FreeShipping from './FreeShipping.tsx/FreeShipping'
import TwoForOne from './TwoForOne/TwoForOne'
import './OffersCards.css'


const OffersCards = () => {
  return (
    <div className='ofertas'>
            <FiftyPercentOff/>
            <FreeShipping/>
            <TwoForOne/>

                        


        </div>
  )
}

export default OffersCards