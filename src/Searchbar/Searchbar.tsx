import { Link } from 'react-router-dom'
import './Searchbar.css'
import SearchUser from './SearchUser/SearchUser'




const Searchbar = () => {
  return (
    <div className="Searchbar">
      
                
    <h1 className='h1'> <Link to={"Home"}> MarketPlace</Link></h1>

    <input type="search" placeholder="Buscar productos..." className='Searchinput'>
    </input>

    <SearchUser/>
    



   

    

      </div>
    
  )
}

export default Searchbar