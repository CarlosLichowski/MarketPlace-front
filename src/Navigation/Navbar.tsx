import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="navBar">

            <ul  className="links">
                <li className='link'><Link to={"electronica"}>electronica</Link></li>
                <li className='link'><Link to={"ropa"}>ropa </Link></li>
                <li className='link'><Link to={"hogar"}>hogar </Link></li>
                <li className='link'><Link to={"deportes"}>Deportes </Link></li>
            </ul>

            <button className='navinfo'>informacion</button>
    

    </div>
  )
}

export default Navbar