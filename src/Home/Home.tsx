import ProductCards from '../Products/ProductsCards/ProductCards'
import './Home.css'
import OffersCards from './offersCards/OffersCards'

const Home = () => {
  return (
    <div className="HomeContainer">

        <h2 className='banner'>Compra Facil, Vende Rapido, Todo en un solo lugar</h2>


            
            <OffersCards/>
            <ProductCards/>
        
        
        </div>
  )
}

export default Home