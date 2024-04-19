import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";

const CourseInfo = () => {

    const CourseInfoText = [
        {
            "subtitle" : "Duration",
            "title" : "4 Years (Under Graduate)",
            "desc" : "Bachelor’s Program in Business Analytics"
        },
        {
            "subtitle" : "Eligibility",
            "title" : "Class 12th (Any Board)",
            "desc" : "Current Students and Pass-outs"
        },
        {
            "subtitle" : "Format",
            "title" : "On Campus Program",
            "desc" : "Fully residential"
        },
        {
            "subtitle" : "Program Starting Date",
            "title" : "August, 2024",
            "desc" : "Admissions Open"
        }
    ];

    return (
        <section className="py-12 shadow-xl mx-3 lg:mx-0">
            <div className="container mx-auto lg:px-12 px-3">
                <div className="flex md:flex-row flex-col lg:items-center justify-between gap-5">
                    {
                        CourseInfoText.map((singleInfo, index) => (
                            <div key={index} className="lg:border-l-2 lg:px-3 lg:pl-5 lg:border-opacity-10 lg:border-darkBlue">
                                <span className="lg:text-[16px] text-[12px] text-black">
                                    <FontAwesomeIcon icon={faClock} className="mr-2 w-4"/>
                                    {singleInfo.subtitle}
                                </span>

                                <h3 className="lg:text-[24px] text-[20px] font-garamond text-darkBlue font-bold lg:mb-2 mb-0 mt-1">{singleInfo.title}</h3>

                                <p className="text-[14px]">{singleInfo.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default CourseInfo;