import { FormEvent, ChangeEvent } from 'react';
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { fetchProducts } from '../api/fetchProducts';

import { useSearchContext } from "../context/searchValueProvider";
export function SearchInput() {
    const [searchValue, setSearchValue] = useState('');
    const { setProducts, setLoading } = useSearchContext();
    
    function handleSearch(e: ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    async function handleSearchApi(event: FormEvent) {
        event.preventDefault();

        setLoading(true);

        const products = await fetchProducts(searchValue);

        setSearchValue('');

        setProducts(products);

        setLoading(false);
    }

    return (
        <form 
            onSubmit={handleSearchApi}
            className="
                flex items-center justify-between 
                bg-[#F5F5F5] w-full max-w-[500px] shadow-sm rounded-sm"
            >
            <input
                className="p-[12px] flex-1 font-medium text-sm border-r-[1px] border-r-[#ddd] rounded-sm outline-none" 
                type="text"
                placeholder="Buscar produtos"
                required
                onChange={handleSearch}
                value={searchValue}
            />

            <button
                className="bg-none border-none flex items-center justify-center p-3" 
                type="submit"
            >
                <IoIosSearch size={16} color="#333" /> 
            </button>
        </form>
    );
}