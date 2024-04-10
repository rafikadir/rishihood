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
        <section className="py-12 shadow-xl">
            <div className="container mx-auto lg:px-12">
                <div className="flex items-center justify-between">
                    {
                        CourseInfoText.map((singleInfo, index) => (
                            <div key={index} className="border-l-2 px-3 pl-5 border-opacity-10 border-darkBlue">
                                <span className="text-[18px] text-black">
                                    <FontAwesomeIcon icon={faClock} className="mr-1 w-4"/>
                                    {singleInfo.subtitle}
                                </span>
                                <h3 className="text-[26px] font-garamond text-darkBlue font-bold mb-2">{singleInfo.title}</h3>
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