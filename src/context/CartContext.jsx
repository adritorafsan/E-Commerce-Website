import { createContext, useContext, useState } from "react";

const CartContext = createContext(null)

export default function CartProvider({ children }) {

    const [cartitems, setCartitems] = useState([])  //[id: 2 , quantity: 7]

    function AddtoCart(ProductId) {
        const existingproduct = cartitems.find((item) => item.id === ProductId)

        if (existingproduct) {
            const Productquantity = existingproduct.quantity;
            const updatedProduct = cartitems.map((item)=>(
                item.id === ProductId ? {id:ProductId , quantity : Productquantity +1}:item
            ))
            setCartitems(updatedProduct)
        }
        else {
            setCartitems([...cartitems, { id: ProductId, quantity: 1 }])
        }
    }


return <CartContext.Provider value={{cartitems , AddtoCart}}>{children}</CartContext.Provider>
}

export function UseCart() {
    const context = useContext(CartContext);
    return context
}