import blog1 from "../assets/blogs/1.png";
import blog2 from "../assets/blogs/2.png";
import blog3 from "../assets/blogs/3.png";
import author from "../assets/blogs/author.png";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";

const Blogs = () => {

    const blogsText = [
        {
            "img" : blog1,
            "author" : author,
            "authorName" : "Jhanvi Yadav",
            "date" : "05 April 2024",
            "read" : "3 Min. Read",
            "title" : "Exploring Unique Career Paths After 12th Grade in India",
            "desc" : "Explore unconventional career paths beyond traditional choices like engineering and medicine.",
            "tag1" : "Education",
            "tag2" : "Career Guideline"
        },
        {
            "img" : blog2,
            "author" : author,
            "authorName" : "Jhanvi Yadav",
            "date" : "05 April 2024",
            "read" : "3 Min. Read",
            "title" : "Leveraging Your Tech Skills: Building a Rewarding Career",
            "desc" : "Explore how tech passion leads to a successful future in our blog.",
            "tag1" : "Business Analytics",
            "tag2" : "Career",
            "tag3" : "Technology"
        },
        {
            "img" : blog3,
            "author" : author,
            "authorName" : "Jhanvi Yadav",
            "date" : "05 April 2024",
            "read" : "3 Min. Read",
            "title" : "Top 10 In-Demand Careers for Indian Students After 12th Grade",
            "desc" : "Explore the top 10 in-demand career paths for Indian students post-12th grade.",
            "tag1" : "Education",
            "tag2" : "Career Guideline"
        }
    ];

    return (
        <section className="lg:py-[70px] py-[50px]">
            <div className="container mx-auto lg:px-10 px-3">
                <h2 className="lg:text-[38px] text-[22px] text-center font-garamond font-bold mb-2"><span className="text-darkBlue">Blogs</span> for Building Your <span className="text-darkBlue">Path</span> to a <span className="text-darkBlue">Successful Career</span></h2>

                <p className="mx-auto max-w-[900px] text-center text-[14px] leading-[25px] mb-10">Explore our collection of insightful blogs packed with tips, advice, and guidance to help you navigate your journey towards a successful and fulfilling career.</p>


                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                    {
                        blogsText.map((singleBlog, index)=>(
                            <div className="p-4 rounded-3xl shadow-2xl" key={index}>
                                <img src={singleBlog.img} alt="blog" />
                                <div>
                                    <ul className="flex items-center justify-between text-[#777777] py-4">
                                        <li className="flex items-center text-[12px]">
                                            <img src={singleBlog.author} alt="author" className="mr-1 max-w-[20px]"/>
                                            {singleBlog.authorName}
                                        </li>
                                        <li className="flex items-center text-[12px]">
                                            <CiCalendar className="text-[18px] mr-1"/>
                                            {singleBlog.date}
                                        </li>
                                        <li className="flex items-center text-[12px]">
                                            <GoClock className="text-[18px] mr-1"/>
                                            {singleBlog.read}
                                        </li>
                                    </ul>
                                </div>
    
                                <h2 className="lg:text-[18px] text-[14px] flex font-bold underline mb-3">
                                    <a href="#">
                                        {singleBlog.title}
                                    </a>
        
                                    <MdArrowOutward className="text-[30px]"/>
                                </h2>
    
                                <p className="text-[13px] text-[#667085] mb-4"> {singleBlog.desc}</p>
    
                                <ul className="pb-5">
                                    <li className="text-[12px] text-[#EF476F] shadow-lg px-3 rounded-2xl inline-block mr-2 font-medium">{singleBlog.tag1}</li>
                                    <li className="text-[12px] text-[#FF6700] shadow-lg px-3 rounded-2xl inline-block font-medium mr-2">{
                                    singleBlog.tag2}</li>
                                    <li className="text-[12px] text-[#1A659E] shadow-lg px-3 rounded-2xl inline-block font-medium">{
                                    singleBlog.tag3}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>

                <div className="text-center flex justify-center md:flex-row flex-col gap-3 mt-[65px]">
                    <a href="#" className="bg-red text-white md:px-5 px-3 md:py-4 py-2 flex items-center rounded-[30px] md:text-[16px] text-[14px] justify-center">
                        Explore All Blogs
                        <GoArrowUpRight className="ml-1"/>
                    </a>

                    <a href="#" className="md:px-5 px-3 md:py-4 py-2 flex items-center rounded-[30px] border md:text-[16px] text-[14px] justify-center">
                        Register Now At Rishihood
                        <GoArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;