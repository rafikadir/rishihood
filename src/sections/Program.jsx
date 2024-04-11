import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import program1 from "../assets/program.png";
import mac from "../assets/mac.png";
import unitar from "../assets/program/unitar.png";
import iima from "../assets/program/iima.png";
import icon1 from "../assets/program/icon1.png";
import amazon from "../assets/program/amazon.png";
import meta from "../assets/program/meta.png";
import kpmg from "../assets/program/kpmg.png";
import netflix from "../assets/program/netflix.png";
import olympic from "../assets/program/olympic.png";
import flipcart from "../assets/program/flipcart.png";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";

const Program = () => {
    return (
        <section className="py-[70px]">
            <div className="container mx-auto lg:px-10">
                <div className="grid grid-cols-2">
                    <div>
                        <img src={program1} alt="program" />
                    </div>
                    <div className="pl-9">
                        <h2 className="font-garamond text-[40px] font-bold mb-6">Highlights Of The Program:</h2>
                        <p className="mb-6">Dive into the Bachelor&amp;s Program in Business Analytics at Rishihood University, co-created with KPMG in India, designed to offer a blend of academic excellence and real-world expertise. Here&amp;s why our program stands out</p>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex mb-2">
                                <div className="pr-3 border-r w-2/4">
                                    <h3 className="font-garamond text-[22px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck}  className="mr-2 text-darkBlue w-4"/>
                                        International Exposure
                                    </h3>
                                </div>
                                <div className="pl-4 grid w-2/4">
                                    <img src={unitar} alt="unitar" />
                                </div>
                            </div>

                            <p className="text-[12px]">Gain international exposure through immersive educational visits to foreign universities.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex mb-2">
                                <div className="pr-4 border-r w-2/4">
                                    <h3 className="font-garamond text-[22px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-[#DB541B] w-4"/>
                                        Expert-Led Learning
                                    </h3>
                                </div>
                                <div className="pl-5 grid grid-cols-4 items-center w-2/4 gap-x-2">
                                    <img src={iima} alt="iima" />
                                    <img src={icon1} alt="icon" />
                                    <img src={amazon} alt="amazon" />
                                    <img src={meta} alt="meta" />
                                </div>
                            </div>

                            <p className="text-[12px]">Learn directly from  experts specializing in analytics and business communication.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div className="pr-9">
                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex mb-2">
                                <div className="pr-5 border-r">
                                    <h3 className="font-garamond text-[24px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-darkBlue w-4"/>
                                        KPMG Experts
                                    </h3>
                                </div>
                                <div className="pl-5 grid grid-cols-4 items-center w-2/4 gap-x-2">
                                    <img src={kpmg} alt="kpmg" />
                                </div>
                            </div>

                            <p className="text-[12px]">Learn from KPMG&amp;s experts in classroom environment with real-world case studies.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex items-center mb-2">
                                <div className="pr-5 border-r">
                                    <h3 className="font-garamond text-[24px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-[#DB541B] w-4"/>
                                        Capstone Projects
                                    </h3>
                                </div>
                                <div className="pl-5 grid grid-cols-4 items-center w-2/4 gap-x-2">
                                    <img src={netflix} alt="netflix" />
                                    <img src={olympic} alt="olympic" />
                                    <img src={flipcart} alt="flipcart" />
                                </div>
                            </div>

                            <p className="text-[12px]">Dive into real business challenges with our Capstone Projects for hands-on learning.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div>
                                <div>
                                    <h3 className="font-garamond text-[24px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-[#DB541B] w-4"/>
                                        One-On-One Mentorship
                                    </h3>
                                </div>
                            </div>

                            <p className="text-[12px]">Enjoy a close-knit learning environment with one-on-one mentor interactions.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div>
                                <div>
                                    <h3 className="font-garamond text-[24px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-[#DB541B] w-4"/>
                                        Industry internships with our partner
                                    </h3>
                                </div>
                            </div>

                            <p className="text-[12px]">Industry internships with our partner organizations to set a solid foundation for you.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div>
                                <div>
                                    <h3 className="font-garamond text-[24px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck}  className="mr-2 text-[#DB541B] w-4"/>
                                        Tailored Research
                                    </h3>
                                </div>
                            </div>

                            <p className="text-[12px]">Unlock unique opportunities for applied research with our specially curated training modules.</p>
                        </div>
                    </div>
                    <div>
                        <div className="shadow-lg rounded-lg">
                            <img src={mac} alt="program" />
                            <div className="text-center pb-5 px-5">
                                <h3 className="text-[30px] font-garamond font-bold mb-3">Free <span className="text-darkBlue">MacBook</span> Laptop!!</h3>
                                <p>Each student to receive an Apple MacBook Air at no extra cost, ensuring access to the latest technology.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;