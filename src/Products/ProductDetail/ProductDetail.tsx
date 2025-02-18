import './ProductDetail.css'
import remera from '../../assets/remera3.png'

const ProductDetail = () => {
  return (
    <div className="ProductDetailContainer">
             
           

              <div className='ProductDetailImages'>

              <div className='ProductDetail'>

              
              <div className='ProductDetailColumn1'>

             
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


              <div className='ProductDetailColumn2'>

             

              <div className='ProductDetailText'>
                <p className='ProductDetailStock'>20 Disponibles</p>

                <h2 className='ProductDetailName'>Nike Remeral  Ejemplo de producto</h2>

                <p className='ProductDetailPrice'>US$9.99</p>

                <p className='ProductDetailsize'>
                  <h3> Talle Disponible </h3> 
                  <div className='sizeBox'>
                        <p className='size'>S</p>
                        <p className='size'>M</p>
                        <p className='size'>L</p>
                        <p className='size'>XL</p>
                  </div>
                  </p>

                <p className='ProductDetailColor'>
                  <h3>Colores Disponibles</h3>
                  <div className='ColorsBox'>

                  
                  <div className='whiteColor'></div>
                  <div className='redColor'></div>
                  <div className='blueColor'></div>
                  <div className='greenColor'></div>

                  </div>
                  </p>

                <div className='ProductDetailDescription'> 
                  <h3>Descripcion del producto: </h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  
                  </div>
              
              
            <div className='ProductDetailRates'>
                <h3>Valoraciones</h3>

                <p>Comentario1: asfasdsadasdasdasdas</p>
                <p>Comentario2: asfasdsadasdasdasdas</p>
            </div>
            
            <div className='buyBox'>
              <button className='buybtn'>Comprar</button>
              <button className='cartbtn'>Agregar al carrito</button>
            </div>
              </div>

              
              </div>
            
            </div>


            </div>

    </div>
  )
}

export default ProductDetail