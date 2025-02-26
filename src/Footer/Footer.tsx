import { Link } from 'react-router-dom'
import './Footer.css'

function Footer(){
    return(
        <ul className="FooterContainer">
            
                <li className='link'><Link to={"electronica"}> ©2024 MarketPlace</Link></li>
                <li className='link'><Link to={"electronica"}> Contacto</Link></li>
                <li className='link'><Link to={"electronica"}> Sobre Nosotros</Link></li>
                <li className='link'><Link to={"electronica"}> Privacidad</Link></li>
                <li className='link'><Link to={"electronica"}> Convierte en vendedor</Link></li>
        </ul>
    )
}

export default Footer