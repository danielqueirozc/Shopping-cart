import { useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";
import { ProductCard } from "./productCard";
import { Loading } from "./loading";

import { useSearchContext } from "../context/searchValueProvider";

interface productProps {
    id: number;
    title: string;
    thumbnail: string;
    price: string
}

export function Products() {
    const {products, setProducts, loading, setLoading} = useSearchContext();

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response);
            setLoading(false);
        })
    }, [])

    return (
        (loading && <Loading />) ||     
        (<section className="max-w-[1440px] m-auto pt-[120px] pr-[20px] pb-[50px] flex flex-wrap gap-4 justify-center">
        {products.map((product: productProps) => {
         return <ProductCard key={product.id} product={product} />
        })}
        </section>)
    );
}