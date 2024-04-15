import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightLong} from "@fortawesome/free-solid-svg-icons";
import demandImg from "../assets/demand.png";

const DemandSkill = () => {
    return (
        <section className="py-[100px]">
            <div className="container mx-auto lg:px-10">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <img src={demandImg} className="max-w-[500px] mx-auto" alt="demand skills image" />
                    </div>
                    <div>
                        <div>
                            <h2 className="font-garamond text-black text-[50px] font-bold mb-9">The 2024 Most In-Demand Skill For Top Career!!</h2>
                            
                            <p className="max-w-[500px] leading-[35px]">According to LinkedIn’s Most In-Demand Skills of 2024, Analytics is one of the top skills employers prioritized when recruiting, posting, and hiring for jobs.</p>

                            <div className="shadow-xl px-7 py-10 rounded-lg grid grid-cols-3 mt-9 mb-3">
                                <div className="border-r-2 border-opacity-10 border-darkBlue">
                                    <p className="font-garamond text-[20px] font-bold mb-2">Market Analyst</p>
                                    <h3 className="text-[#F9BB81] text-[26px] font-bold">7.1-14 LPA</h3>
                                </div>
                                <div className="border-r-2 border-opacity-10 border-darkBlue pl-4 pr-3">
                                    <p className="font-garamond text-[20px] font-bold mb-2">Business Analyst</p>
                                    <h3 className="text-[#F9BB81] text-[26px] font-bold">6.2-16 LPA</h3>
                                </div>
                                <div className="pl-4">
                                    <p className="font-garamond text-[20px] font-bold mb-2">Research Analyst</p>
                                    <h3 className="text-[#F9BB81] text-[26px] font-bold">4-10 LPA</h3>
                                </div>
                            </div>

                            <ul>
                                <li className="flex justify-between items-center bg-[#F6F8FB] p-5 rounded-md mb-3">
                                    <a href="#" className="text-[18px] text-black">
                                        Business Analytics Program Partnered with KPMG
                                    </a>
                                    <FontAwesomeIcon icon={faArrowRightLong} />
                                </li>
                                <li className="flex justify-between items-center bg-[#F6F8FB] p-5 rounded-md">
                                    <a href="#" className="text-[18px]">
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