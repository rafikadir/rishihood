import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import blogBg from '../assets/blogBg.png';
import Button from "../components/Button";
import Navbar from "../shared/Navbar";
import { CiSearch } from "react-icons/ci";
import blog1 from "../assets/blogs/1.png";
import blog2 from "../assets/blogs/2.png";
import blog3 from "../assets/blogs/3.png";
import blog4 from "../assets/blogs/4.png";
import blog5 from "../assets/blogs/5.png";
import blog6 from "../assets/blogs/6.png";
import author from "../assets/blogs/author.png";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import Footer from "../shared/Footer";

const Blog = () => {

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
            "tag2" : "Career Guideline",
            "link" : "https://edept.co/exploring-unique-career-paths-after-12th-grade-in-india/"
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
            "tag3" : "Technology",
            "link" : "https://edept.co/leveraging-your-tech-skills-building-a-rewarding-career-after-12th-grade/"
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
            "tag2" : "Career Guideline",
            "link" : "https://edept.co/top-10-in-demand-careers-for-indian-students-after-12th-grade/"
        },
        {
            "img" : blog4,
            "author" : author,
            "authorName" : "Jhanvi Yadav",
            "date" : "05 April 2024",
            "read" : "3 Min. Read",
            "title" : "Top 10 In-Demand Careers for Indian Students After 12th Grade",
            "desc" : "Explore the top 10 in-demand career paths for Indian students post-12th grade.",
            "tag1" : "Education",
            "tag2" : "Career Guideline",
            "link" : "https://edept.co/top-10-in-demand-careers-for-indian-students-after-12th-grade/"
        },
        {
            "img" : blog5,
            "author" : author,
            "authorName" : "Jhanvi Yadav",
            "date" : "05 April 2024",
            "read" : "3 Min. Read",
            "title" : "Top 10 In-Demand Careers for Indian Students After 12th Grade",
            "desc" : "Explore the top 10 in-demand career paths for Indian students post-12th grade.",
            "tag1" : "Education",
            "tag2" : "Career Guideline",
            "link" : "https://edept.co/top-10-in-demand-careers-for-indian-students-after-12th-grade/"
        },
        {
            "img" : blog6,
            "author" : author,
            "authorName" : "Jhanvi Yadav",
            "date" : "05 April 2024",
            "read" : "3 Min. Read",
            "title" : "Top 10 In-Demand Careers for Indian Students After 12th Grade",
            "desc" : "Explore the top 10 in-demand career paths for Indian students post-12th grade.",
            "tag1" : "Education",
            "tag2" : "Career Guideline",
            "link" : "https://edept.co/top-10-in-demand-careers-for-indian-students-after-12th-grade/"
        }
    ];

    return (
        <>  
            <Navbar/>
            <section className="container relative mx-auto bg-cover bg-center rounded-[50px] pt-[50px] pb-[100px]" style={{backgroundImage: `url(${blogBg})`}} >
                <div className='text-center md:px-5 px-5'>
                    <h2 className='text-white md:text-[45px] text-[22px] font-semibold mb-5'>Welcome to Rishihood&apos;s Blog Page!</h2>
                    <p className='text-white md:text-[15px] text-[12px] max-w-[850px] mx-auto mb-8'>Here, we curate a diverse range of articles, insights, and stories that explore various aspects of education, innovation, and personal development.</p>

                    <div className='max-w-[200px] mx-auto'>
                        <Button text="Start Exploring" link="#" center={true}/>
                    </div>
                </div>

                <div className='absolute -bottom-7 left-0 right-0'>
                    <form action="">
                        <div className="bg-white flex md:max-w-[500px] max-w-[300px] p-5 mx-auto rounded-xl  shadow-xl">
                            <CiSearch className='text-[25px] mr-2 text-[#6D737A]'/>
                            <input 
                                type="text" 
                                placeholder="Search"
                                className="text-[#6D737A] w-full focus:outline-none"
                            />
                        </div>
                    </form>
                </div>
            </section>

            <section className='py-[100px] blogs-section'>
                <div className="container mx-auto">
                    <Tabs>
                        <TabList>
                            <Tab>Education</Tab>
                            <Tab>Career</Tab>
                            <Tab>Business</Tab>
                            <Tab>Inovation</Tab>
                            <Tab>Leadership</Tab>
                            <Tab>Technology</Tab>
                            <Tab>Entrepreneurship</Tab>
                        </TabList>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>

                        <TabPanel>
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
                                                <a href={singleBlog.link} target="_blank">
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
                        </TabPanel>
                    </Tabs>
                </div>
            </section>

            <Footer/>
        </>
    );
};

export default Blog;