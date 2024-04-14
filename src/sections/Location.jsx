import location1 from "../assets/location/1.png";
import location2 from "../assets/location/2.png";
import location3 from "../assets/location/3.png";
import location4 from "../assets/location/4.png";
import { LuMapPin } from "react-icons/lu";

const Location = () => {
    return (
        <section className="py-[70px]">
            <div className="container mx-auto lg:px-10">
                <h2 className="text-[30px] text-center font-garamond font-bold mb-2">Expand Your Horizons, <span className="text-darkBlue">Learn Globally</span>: Rishihood University 
                Leads the Way</h2>
                <p className="mx-auto max-w-[950px] text-center text-[14px] leading-[25px] mb-10">Embark on a transformative journey with Rishihood University&amp;s global study abroad program. Experience immersive learning opportunities at renowned universities worldwide, expanding your horizons and gaining invaluable international perspectives.</p>
            
                <div className="grid grid-cols-3 gap-1 mb-1">
                    <div className="relative col-span-1 bg-cover h-[300px]" style={{backgroundImage: `url(${location1})`}}>

                        <div className="absolute bottom-5 left-5 bg-white/20 rounded-[30px] px-4 py-2 backdrop-blur-md">
                            <span className="flex items-center text-white font-medium">
                                London
                                <LuMapPin className="ml-1"/>
                            </span>
                        </div>
                    </div>

                    <div className="relative col-span-2 bg-cover h-[300px]" style={{backgroundImage: `url(${location2})`}}>
                        <div className="absolute bottom-5 left-5 bg-white/20 rounded-[30px] px-4 py-2 backdrop-blur-md">
                            <span className="flex items-center text-white font-medium">
                                Singapore
                                <LuMapPin className="ml-1"/>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-3 gap-1">
                    <div className="relative col-span-2 bg-cover h-[300px]" style={{backgroundImage: `url(${location3})`}}>

                    <div className="absolute bottom-5 left-5 bg-white/20 rounded-[30px] px-4 py-2 backdrop-blur-md">
                        <span className="flex items-center text-white font-medium">
                            London
                            <LuMapPin className="ml-1"/>
                        </span>
                    </div>
                    </div>

                    <div className="relative col-span-1 bg-cover h-[300px]" style={{backgroundImage: `url(${location4})`}}>
                <div className="absolute bottom-5 left-5 bg-white/20 rounded-[30px] px-4 py-2 backdrop-blur-md">
                    <span className="flex items-center text-white font-medium">
                        Singapore
                        <LuMapPin className="ml-1"/>
                    </span>
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;