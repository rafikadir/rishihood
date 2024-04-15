import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import mentor1 from "../assets/mentors/1.png";
import mentor2 from "../assets/mentors/2.png";
import mentor3 from "../assets/mentors/3.png";
import mentor4 from "../assets/mentors/4.png";
import mentor5 from "../assets/mentors/5.png";


const Mentor = () => {

    return (
        <section className="py-[100px]">
           <div className="container mx-auto lg:px-10">
                <h2 className="text-[40px] font-garamond font-bold text-center mb-3"><span className='text-darkBlue'>Mentors At Rishihood:</span> Illuminating Paths, Igniting Potential</h2>
                <p className="max-w-[650px] m-auto text-center mb-8">At Rishihood University, our mentors represent the pinnacle of excellence, hailing from top industries and renowned institutions worldwide.</p>
                
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={-1}
                    slidesPerView={2}
                    navigation={true}
                    loop={true}
                    autoplay={{ delay: 500, disableOnInteraction: true }}
                    speed={1500}
                    >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor1} alt="mentor"/>
                            <div className='absolute bottom-5 left-12'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Motilal <br/> Oswal</h3>
                                <span className='text-white font-medium'>Founder & Chairman, <br/>Motilal Oswal Co-Founder</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Motilal Oswal is an esteemed Indian entrepreneur known for his role as the founder, chairman, and managing director of Motilal Oswal Financial Services Ltd (MOFSL), a company he co-established alongside Raamdeo Agrawal in 1987.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor2} alt="mentor"/>
                            <div className='absolute bottom-5 left-12'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Suresh<br/> Prabhu</h3>
                                <span className='text-white font-medium'>MP and Former Cabinet Minister,<br/>Chancellor, Rishihood University</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Suresh Prabhakar Prabhu is an Indian politician who served as the Minister of Civil Aviation, Railways, Commerce & Industry in the First Modi ministry. He currently holds the position of Chancellor at Rishihood University.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor3} alt="mentor"/>
                            <div className='absolute bottom-5 left-12'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'> Dr. <br/> Sampadananda Mishra</h3>
                                <span className='text-white font-medium'>Director, Centre for Human Science, Dean-<br/>Culture, Rishihood University</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Sampadananda Mishra is a Sanskrit scholar from Odisha, specializing in grammar. He was awarded the Maharshi Badrayan Vyas Award for Sanskrit in 2012 by the President of India, Pratibha Patil.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor4} alt="mentor"/>
                            <div className='absolute bottom-5 left-12'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Prof. (Dr.)<br/> Anil Kaul </h3>
                                <span className='text-white font-medium'>Professor and Dean.<br/>School of Healthcare</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Dr. Anil Kaul, a seasoned Physician-Dentist, boasts over 30 years of expertise in global public health, healthcare administration, translational research, diagnostics, with a special focus on prevention and diagnosis of emerging/re-emerging Infectious Diseases.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor5} alt="mentor"/>
                            <div className='absolute bottom-5 left-12'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Prof. (Dr.)<br/> Manika Walia </h3>
                                <span className='text-white font-medium'>Dean, School of Creativity</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Manika Walia, a distinguished Professor and Founding Dean at Rishihood Universitys School of Creativity, tirelessly mentors students to conceive innovative, sustainable, and purpose-driven design solutions across various domains.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> 
        </section>
    );
};

export default Mentor;