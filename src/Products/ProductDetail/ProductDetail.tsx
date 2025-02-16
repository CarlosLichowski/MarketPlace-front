import './ProductDetail.css'
import remera from '../../assets/remera3.png'

const ProductDetail = () => {
  return (
    <div className="ProductDetailContainer">
             
           

              <div className='ProductDetailImages'>

              <div className='ProductDetail'>

              
              
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

              <div className='ProductDetailText'>
                <p>20 Disponibles</p>

                <h2>Nike Remeral asdasd texto a rellenar Ejemplo de producto</h2>

                <p>Precio</p>

                <p>Talle Disponible</p>

                <p>Colores Disponibles</p>

                <p> Descripcion del producto: asfdasdasdsadasdasdasfasdasdasdasfasdf</p>
              </div>
              </div>
            
            </div>

            <div className='Rates'>
                <h2>Valoraciones</h2>

                <p>Comentario1: asfasdsadasdasdasdas</p>
                <p>Comentario2: asfasdsadasdasdasdas</p>
            </div>

    </div>
  )
}

export default ProductDetail