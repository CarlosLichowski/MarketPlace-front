// import { Link } from 'react-router-dom'
// import image1 from '../../assets/shorts1.png'
import './SobreNosotros.css'

const Navbar = () => {
  return (
    <div className="SobreNosotrosContainer">
        <h2>Sobre Nosotros</h2>

        <p>Somos un equipo de desarrolladores en formación, apasionados por la tecnología y el aprendizaje continuo. A través de proyectos como este, buscamos fortalecer nuestras habilidades y adquirir experiencia práctica en el mundo de la programación. Nuestro objetivo es convertirnos en profesionales preparados y versátiles, capaces de aportar valor en cada reto que asumimos.</p>

        <div className='CardSobreNosotros'>
                <h3>Nombre</h3>
                <h4>Rol</h4>
                <p>Descripcion: asfasdasdasfas fasf asferegg dfsg dfsg dfsgdfsg</p>

                {/* <Link to={}> <img className='CardImg'   src={image1}/></Link> */}

            </div>    

    </div>
  )
}

export default Navbar