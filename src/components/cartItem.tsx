import { BsFillCartXFill } from "react-icons/bs";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductProps {
    product: {
        id: number;
        title: string;
        thumbnail: string;
        price: string;
    }
}

import { useSearchContext } from "../context/searchValueProvider";

export function CartItem({ product }: ProductProps) {
    const { id, title, price, thumbnail } = product;

    const { cartItems, setCartItems } = useSearchContext();

    function handleDeleteCart() {
        setCartItems(cartItems.filter((item) => item.id !== id));
    }

    return (
        <div className="flex items-start border-b-[1px] border-b-[#ddd] last:border-none pb-5 mb-5 relative">
            <img 
                className="w-[70px]"
                src={thumbnail} 
                alt=""
            />
            
            <div className="flex flex-col pt-0 pr-[35px] pb-0 pl-[10px]">
                <span className="text-sm font-medium text-black/50">
                    {title}
                </span>
                <span className="text-[25px] font-medium">
                    {formatCurrency(price, 'BRL')}
                </span>

                <button
                    onClick={handleDeleteCart}
                    title="remover do carrinho"
                    className="text-[20px] text-red-600 absolute top-0 right-0"
                    type="button"
                >
                    <BsFillCartXFill />
                </button>
            </div>
        </div>
    );
}