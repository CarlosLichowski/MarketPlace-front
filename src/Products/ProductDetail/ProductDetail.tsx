import './ProductDetail.css'
import remera from '../../assets/remera3.png'

const ProductDetail = () => {
  return (
    <div className="ProductDetailContainer">

            <div className='ProductDetail'>

              <div className='ProductDetailImages'>

              
              <div className="main-image">
            <img className='img1'  src={remera}/>
              </div>

              <div className="MoreImages">
                  <img className='img2' src={remera}/>

                  <img className='img3' src={remera}/>

                  <img className='img4' src={remera}/>
              <div>

              </div>
              </div>
              </div>
            </div>

            <div className='Rates'>

            </div>

    </div>
  )
}

export default ProductDetail