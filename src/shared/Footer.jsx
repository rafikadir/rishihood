import footerlogo from "../assets/logoWhite.png";
import { LuArrowUpRight } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaFacebookF, 
        FaInstagram, 
        FaLinkedinIn, 
        FaTwitter, 
        FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="bg-gradient-to-r from-[#221D39] to-[#51729F] pt-[100px]">
            <div className="container mx-auto pb-[100px] lg:px-10">
                <div className="grid grid-cols-6">
                    <div className="col-span-2">
                        <img src={footerlogo} alt="logo" className="max-w-[150px] mb-5"/>
                        <p className="text-[14px] text-white mb-7 max-w-[350px]">Rishihood University is a dynamic institution dedicated to fostering holistic development and nurturing future-ready leaders.</p>
                        <a href="#" className="px-5 py-4 rounded-[30px] border border-white text-white flex items-center max-w-[200px] justify-center">
                            Register Now
                            <LuArrowUpRight/>
                        </a>
                    </div>

                    <div className="col-auto">
                        <h3 className="text-white font-garamond text-[22px] font-bold mb-6">Company</h3>
                        <ul>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Home</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">About Rishihood</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">About KPMG</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Highlights</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Curriculum</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto">
                        <h3 className="text-white font-garamond text-[22px] font-bold mb-6">Sitemap</h3>
                        <ul>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Faculties</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Mentors</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Global Partnership</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Registration Form</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-[15px]">Student Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col-auto">
                        <h3 className="text-white font-garamond text-[22px] font-bold mb-6">Address</h3>
                        <p className="text-white text-[15px] mb-3">Rishihood University, NH-44 (
                        GT Road), Near Bahalgarh 
                        Chowk, Delhi NCR, Sonipat, 
                        Haryana, India 131021</p>

                        <ul>
                            <li>
                                <a href="callto:+917004136280" className="text-white mb-3 inline-flex items-center text-[15px]">
                                    <IoIosCall className="mr-2 text-[20px]"/>
                                    +91 70041 36280
                                </a>
                            </li>
                            <li>
                                <a href="mailto:bizanalytics@rishihood.edu.in" className="text-white underline inline-flex items-center text-[15px]">
                                    <HiOutlineEnvelope className="mr-2 text-[20px]"/>
                                    bizanalytics@rishihood.edu.in
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-auto pl-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6980.322958333857!2d77.08456878697716!3d28.98258559077373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db1e3451de103%3A0xf3b49ff0baac646f!2sRishihood%20University!5e0!3m2!1sen!2sbd!4v1713082467757!5m2!1sen!2sbd" width="100%" height="150" className="rounded-2xl"></iframe>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 items-center">
                <div className="rounded-tr-[100px] col-span-2 bg-gradient-to-r from-[#221D39] to-[#51729F] h-[60px]"></div>
                <div>
                    <ul className="flex justify-center items-center gap-4 text-white text-[18px]">
                        <li><a href="#"><FaFacebookF/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                        <li><a href="#"><FaLinkedinIn/></a></li>
                        <li><a href="#"><FaTwitter/></a></li>
                        <li><a href="#"><FaYoutube/></a></li>
                    </ul>
                </div>
                <div className="rounded-tl-[100px] col-span-2 bg-gradient-to-l from-[#221D39] to-[#51729F] h-[60px]"></div>
            </div>
        </section>
    );
};

export default Footer;