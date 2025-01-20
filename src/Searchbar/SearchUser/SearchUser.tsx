import './SearchUser.css'
import { Notifications, Person } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const SearchUser = () => {
  return (
    <div className='SearchUser'>

    <div className='SearchShopContainer'>
    <button className='btn'>Vender</button>
    <ShoppingCartIcon />
    <Notifications/>
    </div>

    <div className='SearchUserIcon'>
    <Link to={'login'}>Ingresar/Registrarse</Link>
    <Person/>
    </div>

    </div>
  )
}

export default SearchUser