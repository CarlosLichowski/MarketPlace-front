import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import remera from '../../assets/remera3.png'
import './ProductCard.css'
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <Link to={"productdetail"}>
    
    <div  className="CardContainer">
      

        <div className='CardContent'>

                <div className='CardContentImg'>
                          <img  src={remera}/>

                </div>




        <div className='cardDescription'>
                 
                <h1>Product name</h1>
                <p>99.99$$$</p>

                <div className='ProductCardBtns'>
                <button className='CardBuyBtn'>comprar</button>
                <div className='ProductCardCart'>

                <ShoppingCartIcon  fontSize="medium"  />
                <h3>
                  +
                  </h3>
        </div>
        </div>
        </div>
        </div>
        
    </div>
    </Link>
  )
}

export default ProductCard