import './ShoppingCart.css'
import OrderSummary from './OrderSummary/OrderSummary'
import ShoppingCartCard from './ShoppingCartCard/ShoppingCartCard'
import { useState } from 'react'



function ShoppingCart() {
    // Example state - replace with your actual cart data
    const [cartItems] = useState([
        { id: 1, name: "Product 1", price: 50, quantity: 2 },
        { id: 2, name: "Product 2", price: 30, quantity: 1 }
    ]);

    // Calculate total from cart items
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    return(
        <div className='ShoppingCartContainer'>
            {/* List of cart items */}
            {cartItems.map(item => (
                <ShoppingCartCard 
                    key={item.id}
                    item={item}
                />
            ))}
            
            {/* Pass total to OrderSummary */}
            <OrderSummary total={calculateTotal()} />
        </div>
    )
}

export default ShoppingCart