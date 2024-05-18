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
        (<section className="max-w-[1440px] m-auto pt-[120px] pr-[20px] pb-[50px] grid sm:grid-cols-1 md:grid-cols2 grid-cols-4 gap-4">
        {products.map((product: productProps) => {
         return <ProductCard key={product.id} product={product} />
        })}
        </section>)
    );
}