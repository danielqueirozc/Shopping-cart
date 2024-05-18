import { CartButton } from "./cartButton";
import { SearchInput } from "./searchInput";


export function Header() {
    return (
        <header className="w-full bg-[#fff159] fixed m-auto p-5 z-10">
            <div className="max-w-[1440px] flex justify-between items-center m-auto">
                <SearchInput />
                <CartButton />
            </div>
        </header>
    );
}