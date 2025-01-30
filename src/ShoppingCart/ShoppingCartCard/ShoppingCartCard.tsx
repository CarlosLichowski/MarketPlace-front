import './ShoppingCartCard.css'
import image from '../../assets/remera3.png'

interface ShoppingCartCardProps {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
    };
}

function ShoppingCartCard({ item }: ShoppingCartCardProps) {
    return(
        <div className="ShoppingCartCardContainer">
            <img src={image}/>

            <div className='ShoppingCartCardproductInfo'>
                <h2>ProductName</h2>
                <p>info product name</p>

                <button> 1</button>
            </div>

            <div className='ShoppingCartCardproductPrice'> 
                <button>Delete</button>
                <p>Price: ${item.price}</p>
                <h2>450$</h2>
            </div>
        </div>
    )
}

export default ShoppingCartCard