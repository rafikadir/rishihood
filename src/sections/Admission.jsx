import admissionImg from "../assets/admission.png";
import Button from "../components/Button";
import logo from "../assets/logo2.png";
import icon from "../assets/youtube.png";

const Admission = () => {
    return (
        <section className="pt-[50px] pb-[50px]">
            <div className="container mx-auto lg:px-10">
                <div className="grid grid-cols-2 items-center gap-[60px]">
                    <div className="relative">
                        <img src={admissionImg} alt="admission" />

                        <div className="absolute max-w-[80px] left-0 right-0 top-[40%] m-auto">
                            <img src={icon} alt="youtube" />
                        </div>

                        <div className="absolute flex items-center justify-center bottom-3 right-0 left-0">
                            <img src={logo} alt="logo" className=" max-w-[40px] mr-5"/>
                            <p className="text-white">Rishihood University: A Peek Into the Campus</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-[40px] font-bold font-garamond max-w-[480px]">We are <span className="text-darkBlue">Looking</span> for the <span className="text-darkBlue">Next Generation</span> of <span className="text-darkBlue">Leaders</span></h2>

                        <p className="text-[24px] my-[30px]">Admissions Open for 2024 Session. <br/>Register Today!!</p>

                        <div className="flex gap-3">
                            <Button text="Register Now"/>
                            <Button text="Download Brochure" transparent={true} style2={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;