import feedback1 from "../assets/feedback/1.png";
import feedback2 from "../assets/feedback/2.png";
import feedback3 from "../assets/feedback/3.png";
import { FaStar } from "react-icons/fa";

const Feedback = () => {

    const feedbackText = [
        {
            "img" : feedback1,
            "name" : "Janhvi Yadav",
            "title" : "B.Tech, 2023-2027",
            "desc" : "There is a good learner-faculty balance and with  this there is immense support compared to  other universities. Have been able to develop  myself a lot!!"
        },
        {
            "img" : feedback2,
            "name" : "Khushi K",
            "title" : "B. Design, 2022-2025",
            "desc" : "There is a good learner-faculty balance and with  this there is immense support compared to  other universities. Have been able to develop  myself a lot!!"
        },
        {
            "img" : feedback3,
            "name" : "Amit Gupta",
            "title" : "Parent",
            "desc" : "The hostel services are very good and I'm  happy with the amenities provided to the  students. I also am very happy for the warden  and the security."
        }
    ]

    return (
        <section className="bg-[#F2F4FB] py-[50px]">
            <div className="container mx-auto lg:px-10 px-3">
                <h2 className="lg:text-[38px] text-[20px] text-center font-garamond font-bold mb-2"><span className="text-darkBlue">Student</span> and <span className="text-darkBlue">Parent</span> Voices: Stories of <span className="text-darkBlue">Success</span> and <span className="text-darkBlue">Satisfaction</span>
                </h2>

                <p className="mx-auto max-w-[950px] text-center lg:text-[16px] text-[14px]">Explore the authentic experiences and triumphs of our students through their heartfelt testimonials, shedding light on how Rishihood University has shaped their academic journey and propelled them towards success.</p>

                <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-3 mb-3">
                    {
                        feedbackText.map((singleFeedback, index)=>(
                            <div className="bg-white p-4 rounded-2xl" key={index}>
                            <div className="bg-[#F2F4FB] rounded-2xl flex items-center gap-5 p-2">
                                <img src={singleFeedback.img} alt="student" className="max-w-[70px]" />
                                <div>
                                    <h2 className="font-garamond text-[22px] font-bold">{singleFeedback.name}</h2>
                                    <p className="text-[#8E8E8E] text-[14px] mb-1">{singleFeedback.title}</p>
                                    <ul>
                                        <li className="text-[#FFE600] inline-block mr-1 text-[14px]"><FaStar/></li>
                                        <li className="text-[#FFE600] inline-block mr-1 text-[14px]"><FaStar/></li>
                                        <li className="text-[#FFE600] inline-block mr-1 text-[14px]"><FaStar/></li>
                                        <li className="text-[#FFE600] inline-block mr-1 text-[14px]"><FaStar/></li>
                                        <li className="text-[#FFE600] inline-block mr-1 text-[14px]"><FaStar/></li>
                                    </ul>
                                </div>
                            </div>
    
                            <p className="text-[#656D77] text-[13px] pt-7 pb-4 leading-7">{singleFeedback.desc}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;