
const Button = ({text,transparent, whiteBorder, center, link, blackBorder}) => {
    return (
        <a href={`${link}`} className={` ${transparent ? "bg-transparent border" : "bg-[#DB541B]"} ${center ? "justify-center" : ""} md:text-[14px] text-[10px] font-semibold lg:leading-6 text-white flex items-center py-3 px-4 rounded-[50px] ${whiteBorder ? "border-white text-white" : ""} ${blackBorder ? "!text-[#3B3A3A] border-[#3B3A3A]" : ""}`}>
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