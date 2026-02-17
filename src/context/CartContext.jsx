import { createContext, useContext, useState } from "react";
import { getProductsbyID } from "../Data/Products";

const CartContext = createContext(null)

export default function CartProvider({ children }) {

    const [cartitems, setCartitems] = useState([])  //[id: 2 , quantity: 7]



    function AddtoCart(ProductId) {
        const existingproduct = cartitems.find((item) => item.id === ProductId)

        if (existingproduct) {
            const Productquantity = existingproduct.quantity;
            const updatedProduct = cartitems.map((item) => (
                item.id === ProductId ? { id: ProductId, quantity: Productquantity + 1 } : item
            ))
            setCartitems(updatedProduct)
        }
        else {
            setCartitems([...cartitems, { id: ProductId, quantity: 1 }])
        }
    }
    function ProductwithDetails() {
        return cartitems
            .map((item) => ({ ...item, product: getProductsbyID(item.id) })).filter((item) => item.product)
    }
    function removeProduct(ProductId) {
        const RemovedProduct = cartitems.filter((item) => item.id !== ProductId)
        setCartitems(RemovedProduct)
    }
    
    function UpdatedProduct(ProductId, delta) {
        setCartitems((prev) =>
            prev
                .map((item) =>
                    item.id === ProductId ? { ...item, quantity: item.quantity + delta } : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    return <CartContext.Provider value={{ cartitems, AddtoCart, ProductwithDetails, removeProduct , UpdatedProduct }}>{children}</CartContext.Provider>
}

export function UseCart() {
    const context = useContext(CartContext);
    return context
}