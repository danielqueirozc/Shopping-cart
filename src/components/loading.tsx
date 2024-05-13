import { AiOutlineLoading3Quarters } from "react-icons/ai";


export function Loading() {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <AiOutlineLoading3Quarters
                className='animate-spin'
                size={32}
            />
        </div>
    );
}