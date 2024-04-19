import admissionImg from "../assets/admission.png";
import Button from "../components/Button";
import logo from "../assets/logo2.png";
import icon from "../assets/youtube.png";

const Admission = () => {
    return (
        <section className="lg:pt-[20px] md:pt-0 pb-[50px]">
            <div className="container mx-auto lg:px-10 px-3">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative">
                        <img src={admissionImg} alt="admission" />

                        <div className="absolute lg:max-w-[80px] max-w-[50px] left-0 right-0 lg:top-[40%] top-[30%] m-auto">
                            <img src={icon} alt="youtube" />
                        </div>

                        <div className="absolute flex items-center justify-center bottom-3 right-0 left-0 md:left-3">
                            <img src={logo} alt="logo" className=" max-w-[40px] lg:mr-5 md:mr-3"/>
                            <p className="text-white lg:text-[16px] md:text-[14px]">Rishihood University: A Peek Into the Campus</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="lg:text-[40px] text-[22px] font-bold font-garamond max-w-[470px]">We are <span className="text-darkBlue">Looking</span> for the <span className="text-darkBlue">Next Generation</span> of <span className="text-darkBlue">Leaders</span>
                        </h2>

                        <p className="lg:text-[20px] text-[16px] lg:my-[20px] ">Admissions Open for 2024 Session. <br/>Register Today!!</p>

                        <div className="flex gap-3">
                            <Button 
                                text="Register Now"
                                link="#"
                            />

                            <Button text="Download Brochure" 
                                transparent={true} 
                                blackBorder={true}
                                link="#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;