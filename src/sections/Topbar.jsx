import { TfiWorld } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

const Topbar = () => {

    const [display, setDisplay] = useState(true);

    const hideBar = () => {
        setDisplay(false)
    }

    console.log(display);

    return (
        <section className={`bg-darkBlue py-2 relative ${display ? "" : "hidden"}`}>
            <p className="text-white font-garamond flex items-center justify-center">
                <TfiWorld className="mr-2"/>
                Explore Our Global Programme
            </p>

            <button onClick={()=> hideBar()} className="absolute right-3 top-3 text-[20px] text-white rotate-45">
                <FiPlus/>
            </button>
        </section>
    );
};

export default Topbar;