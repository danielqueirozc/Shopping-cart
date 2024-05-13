
import { HiOutlineShoppingCart } from "react-icons/hi2";

import { useSearchContext } from "../context/searchValueProvider";

export function CartButton() {
    const { isCartVisible, setIsCartVisible, cartItems } = useSearchContext();

    function handleCart() {
        setIsCartVisible(!isCartVisible);
    }

    return (
        <button
            onClick={handleCart}
            className="flex items-center justify-center relative"
            type="button"
        >
            <HiOutlineShoppingCart size={24} color="#333" />
            {cartItems.length > 0  && <span className="
                bg-red-600 w-4 h-4 absolute -top-2 -left-1 
                text-white text-xs font-semibold rounded-full
                flex items-center justify-center
                "
            >
                {cartItems.length}
            </span> }
        </button>
    );
}