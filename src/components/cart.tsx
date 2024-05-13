import { CartItem } from "./cartItem";

import { useSearchContext } from "../context/searchValueProvider";
import { formatCurrency } from "../utils/formatCurrency";

export function Cart() {
    const { cartItems, isCartVisible } = useSearchContext();

    return (
        <section className={`
            w-full max-w-[330px] bg-white h-screen
            fixed top-0 right-0 pt-[100px] pr-5 pb-5
            flex flex-col justify-between transform
            ${isCartVisible ? 'translate-x-0' : 'translate-x-[110%]'}
            translate-y-0 transition-all duration-500 ease-in-out
        `}
        >
            <div className="overflow-auto">
                { cartItems.map((product) => {
                   return  <CartItem key={product.id} product={product} />
                }) }
            </div>

            <div className="text-3xl font-medium py-[35px] pb-[15px] border-t-[1px] border-t-[#ddd]">
                Total: {formatCurrency(cartItems.reduce((total, product) => total + 
                parseFloat(product.price), 0).toString(), 'BRL')}
            </div>
        </section>
    );
}