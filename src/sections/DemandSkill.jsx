import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import demandImg from "../assets/demand.png";

const DemandSkill = () => {
    return (
        <section className="lg:py-[100px] py-[50px]">
            <div className="container mx-auto lg:px-10 px-3">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                    <div>
                        <img src={demandImg} className="lg:max-w-[500px] md:max-w-[300px] wax-w-full mx-auto mb-4" alt="demand skills image" />
                    </div>
                    <div>
                        <div>
                            <h2 className="font-garamond text-black lg:text-[50px] text-[24px] font-bold lg:mb-9 lg:my-0 my-4">The 2024 Most In-Demand Skill For Top Career!!</h2>
                            
                            <p className="max-w-[500px] lg:leading-[35px] leading-[24px] text-[14px]">According to LinkedIn’s Most In-Demand Skills of 2024, Analytics is one of the top skills employers prioritized when recruiting, posting, and hiring for jobs.</p>

                            <div className="shadow-xl px-7 lg:py-10 py-5 rounded-lg grid lg:grid-cols-3 grid-cols-1 mt-9 mb-3">
                                <div className="lg:border-r-2 border-opacity-10 border-darkBlue lg:mb-0 mb-4">
                                    <p className="font-garamond lg:text-[20px] text-[16px] font-bold lg:mb-2">Market Analyst</p>
                                    <h3 className="text-[#F9BB81] text-[26px] font-bold">7.1-14 LPA</h3>
                                </div>

                                <div className="lg:border-r-2 border-opacity-10 border-darkBlue lg:pl-4 pr-3 lg:mb-0 mb-4">
                                    <p className="font-garamond lg:text-[20px] text-[16px] font-bold lg:mb-2">Business Analyst</p>
                                    <h3 className="text-[#F9BB81] text-[26px] font-bold">6.2-16 LPA</h3>
                                </div>

                                <div className="lg:pl-4">
                                    <p className="font-garamond lg:text-[20px] text-[16px] font-bold lg:mb-2">Research Analyst</p>
                                    <h3 className="text-[#F9BB81] text-[26px] font-bold">4-10 LPA</h3>
                                </div>
                            </div>

                            <ul>
                                <li className="flex justify-between items-center bg-[#F6F8FB] p-5 rounded-md mb-3">
                                    <a href="#" className="lg:text-[18px] text-[12px] text-black">
                                        Business Analytics Program Partnered with KPMG
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </li>
                                <li className="flex justify-between items-center bg-[#F6F8FB] p-5 rounded-md">
                                    <a href="#" className="lg:text-[18px] text-[12px]">
                                        Discover Companies Recruiting in Analytics!
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemandSkill;