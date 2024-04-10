
const Button = ({text,transparent, style2, center}) => {
    return (
        <a href="#" className={` ${transparent && style2 ? "bg-transparent border border-2 !text-black border-black" : "bg-[#DB541B]"} ${center ? "justify-center" : ""} text-sm font-semibold leading-6 text-white flex items-center py-3 px-5 rounded-[50px]`}>
            {text}

            {
                transparent ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>

                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            }

        </a>
    );
};

export default Button;