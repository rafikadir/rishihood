import { GoArrowUpRight } from "react-icons/go";
import faculty1 from "../assets/faculty/1.png";
import faculty2 from "../assets/faculty/2.png";
import faculty3 from "../assets/faculty/3.png";
import faculty4 from "../assets/faculty/4.png";
import faculty5 from "../assets/faculty/5.png";
import faculty6 from "../assets/faculty/6.png";
import faculty7 from "../assets/faculty/7.png";
import faculty8 from "../assets/faculty/8.png";


const Faculty = () => {

    const facultyData = [
        {
            "img": faculty8,
            "faculty": "RISHIHOOD FACULTY",
            "name": "Ravinder Pal Singh",
            "desc": "CXO, Vistara Alumnus Harvard Business SchooL"
        },
    ]

    return (
        <section className="pb-[70px]" id="faculty">
            <div className="container mx-auto lg:px-10 px-3">
                <h2 className="lg:text-[40px] text-[20px] font-garamond font-bold text-center mb-3">Unlocking Potential: <span className="text-darkBlue">Rishihood</span> & <span className="text-darkBlue">KPMG</span> Faculty Shaping Futures</h2>

                <p className="max-w-[850px] m-auto text-center mb-8 lg-[16px] text-[14px]">With a blend of academic excellence and real-world insights, our faculty members from both Rishihood and KPMG enrich the learning experience, preparing students for success in today&apos;s dynamic world.</p>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-[#DB541B]`}>
                        <div className="relative">
                            <img src={faculty1} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    RISHIHOOD FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Dr. Kirti Dutta
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Dean, Research Cell & School of Entrepreneurship, Author, Founding Editor IJESV
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-darkBlue`}>
                        <div className="relative">
                            <img src={faculty2} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    KPMG FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Lijin
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Senior Consultant, KPMG in India
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-[#DB541B]`}>
                        <div className="relative">
                            <img src={faculty3} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    RISHIHOOD FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Dr. Kavita Gupta
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Associate Professor, School of Entrepreneurship Rishihood University
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-darkBlue`}>
                        <div className="relative">
                            <img src={faculty4} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    KPMG FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Varsha Pai K
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Senior Consultant, KPMG in India
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-darkBlue`}>
                        <div className="relative">
                            <img src={faculty5} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    KPMG FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Kaushik Swaroop
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Consultant, KPMG in India
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-[#DB541B]`}>
                        <div className="relative">
                            <img src={faculty6} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    RISHIHOOD FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Dr. M. Chitra
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Associate Professor, School of Entrepreneurship Rishihood University                        
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-darkBlue`}>
                        <div className="relative">
                            <img src={faculty7} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    KPMG FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Bharat Sharma
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            Consultant, KPMG in India
                        </p>
                    </div>

                    <div className={`p-3 shadow-2xl lg:mb-10 mb-4 text-center rounded-2xl mx-2 bg-white group hover:bg-[#DB541B]`}>
                        <div className="relative">
                            <img src={faculty8} alt="faculty" />

                            <div className="absolute bottom-0 backdrop-blur-lg p-2 px-3 rounded-tr-xl">
                                <p className="text-white font-garamond font-bold">
                                    RISHIHOOD FACULTY
                                </p>
                            </div>
                        </div>
                        <h3 className="font-garamond text-[18px] font-bold mt-5 mb-2 group-hover:text-white">
                            Ravinder Pal Singh
                        </h3>
                        <p className="lg:text-[16px] text-[14px] mb-5 text-[#6D737A] group-hover:text-white">
                            CXO, Vistara Alumnus Harvard Business School                     
                        </p>
                    </div>
                </div>

                <div className="text-center flex md:flex-row flex-col justify-center gap-3 md:mt-8 mt-5">
                    <a href="#faculty" className="bg-red text-white md:px-5 px-2 md:py-4 py-2 flex items-center rounded-[30px] lg:text-[16px] text-[14px] justify-center">
                        View All Faculties
                        <GoArrowUpRight className="ml-1"/>
                    </a>

                    <a href="#curriculum" className="md:px-5 px-2 md:py-4 py-2 flex items-center justify-center rounded-[30px] border lg:text-[16px] text-[14px]">
                        Know What You Will Be Taught By Them
                        <GoArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Faculty;