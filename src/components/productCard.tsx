import { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { formatCurrency } from "../utils/formatCurrency";

interface ProductCardProps {
    product: {
        id: number;
        title: string;
        price: string;
        thumbnail: string;
    }
}

import { useSearchContext } from "../context/searchValueProvider";

export function ProductCard({ product }: ProductCardProps) {
    const [showButton, setShowButton] = useState(false);

    const { title, price, thumbnail }  = product;

    const { cartItems, setCartItems } = useSearchContext();

    function handleMouseEnter() {
        setShowButton(true);
    }

    function handleMouseLeave () {
        setShowButton(false);
    }

    function handleAddCart() {
       setCartItems([...cartItems, product]); 
    }

    return (
        <div className="w-full max-w-[300px] bg-white flex flex-col relative cursor-pointer hover:shadow-lg"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                className="w-full" 
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} // \w = qualquer caractere antes do jpg, g = global-string inteira, i= nao vai ser case sensitive, w.jpg = vai ser trocado por w.jpg
                alt=""
            />

            <div className="flex flex-col items-center gap-[10px] p-5 border-t-[1px] border-t-[#ddd]">
                <span className="text-[30px] ">
                    {formatCurrency(price, 'BRL')}
                </span>

                <span className="text-[15px] text-black/50 leading-normal">
                    {title}
                </span>
            </div>

            <button
                onClick={handleAddCart}
                className={`
                    absolute top-0 right-0 my-3 mx-[15px] 
                    w-11 h-11 bg-[#ebebeb] rounded-full
                    flex items-center justify-center
                    opacity-0 transition-opacity duration-300
                    ${showButton ? "opacity-100" : ""}
                `}
                type="button"
            >
                <FaCartPlus color="#0c5dd6" />
            </button>
        </div>
    );
}