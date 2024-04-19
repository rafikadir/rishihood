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
            <div className="container mx-auto lg:px-10 px-3">
                <div className="grid md:grid-cols-2 md:gap-3 lg:gap-0 grid-cols-1">
                    <div>
                        <img src={program1} alt="program" />
                    </div>
                    <div className="lg:pl-9">
                        <h2 className="font-garamond lg:text-[40px] text-[24px] font-bold lg:mb-6 mb-2">Highlights Of The Program:</h2>

                        <p className="mb-6">Dive into the Bachelor&amp;s Program in Business Analytics at Rishihood University, co-created with KPMG in India, designed to offer a blend of academic excellence and real-world expertise. Here&amp;s why our program stands out</p>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex mb-2 md:flex-row flex-col">
                                <div className="pr-3 lg:border-r lg:w-2/4 w-full">
                                    <h3 className="font-garamond text-[22px] font-bold mb-3 lg:mb-0">
                                        <FontAwesomeIcon icon={faCircleCheck}  className="mr-2 text-darkBlue w-4"/>
                                        International Exposure
                                    </h3>
                                </div>
                                <div className="lg:pl-4 grid lg:w-2/4 w-full mb-3 lg:mb-0">
                                    <img src={unitar} alt="unitar" />
                                </div>
                            </div>

                            <p className="text-[12px]">Gain international exposure through immersive educational visits to foreign universities.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex mb-2 md:flex-row flex-col">
                                <div className="pr-4 lg:border-r lg:w-2/4 w-full">
                                    <h3 className="font-garamond text-[22px] font-bold mb-3 lg:mb-0">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-[#DB541B] w-4"/>
                                        Expert-Led Learning
                                    </h3>
                                </div>
                                <div className="lg:pl-5 grid lg:grid-cols-4 grid-cols-2 items-center lg:w-2/4 w-full gap-x-2">
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

                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-3 lg:gap-0">
                    <div className="lg:pr-9 pr-0">
                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex mb-2 md:flex-row flex-col">
                                <div className="lg:pr-5 pr-0 lg:border-r">
                                    <h3 className="font-garamond lg:text-[24px] text-[22px] font-bold">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-darkBlue w-4"/>
                                        KPMG Experts
                                    </h3>
                                </div>
                                <div className="lg:pl-5 grid lg:grid-cols-4 grid-cols-2 items-center l]md:w-2/4 w-full gap-x-2">
                                    <img src={kpmg} alt="kpmg" />
                                </div>
                            </div>

                            <p className="text-[12px]">Learn from KPMG&amp;s experts in classroom environment with real-world case studies.</p>
                        </div>

                        <div className="shadow-lg p-5 rounded-lg mb-4">
                            <div className="flex lg:items-center items-start md:flex-row flex-col mb-2">
                                <div className="lg:pr-5 lg:border-r">
                                    <h3 className="font-garamond lg:text-[24px] text-[22px] font-bold md:mb-0 mb-3">
                                        <FontAwesomeIcon icon={faCircleCheck} className="mr-2 text-[#DB541B] w-4"/>
                                        Capstone Projects
                                    </h3>
                                </div>
                                <div className="lg:pl-5 pl-0 grid lg:grid-cols-4 grid-cols-2 items-center lg:w-2/4 w-full gap-x-2">
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
                                    <h3 className="font-garamond lg:text-[24px] text-[22px] font-bold mb-3">
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
                                    <h3 className="font-garamond lg:text-[24px] text-[22px] font-bold mb-3 lg:mb-0">
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
                                    <h3 className="font-garamond lg:text-[24px] text-[22px] font-bold mb-3 lg:mb-0">
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
                                <h3 className="lg:text-[30px] text-[24px] font-garamond font-bold mb-3">Free <span className="text-darkBlue">MacBook</span> Laptop!!</h3>
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