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
        <section className="lg:py-[100px] py-[50px]">
           <div className="container mx-auto lg:px-10 px-3">
                <h2 className="lg:text-[40px] text-[22px] font-garamond font-bold text-center mb-3"><span className='text-darkBlue'>Mentors At Rishihood:</span> Illuminating Paths, Igniting Potential</h2>
                <p className="max-w-[650px] lg:text-[16px] text-[14px] m-auto text-center mb-8">At Rishihood University, our mentors represent the pinnacle of excellence, hailing from top industries and renowned institutions worldwide.</p>
                
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={-1}
                    breakpoints={{
                        576: {
                          slidesPerView: 1,
                        },
                        768: {
                          slidesPerView: 2,
                        }
                      }}
                    navigation={true}
                    loop={true}
                    autoplay={{ delay:0, disableOnInteraction: true }}
                    speed={1500}
                    >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor1} alt="mentor"/>
                            <div className='absolute lg:bottom-5 lg:left-12 bottom-4 left-8'>
                                <h3 className='max-w-[150px] text-red font-garamond lg:text-[35px] text-[18px] font-bold'>Motilal Oswal</h3>

                                <span className='text-white font-medium lg:text-[16px] text-[12px] leading-[10px]'>Founder & Chairman, <br/>Motilal Oswal Co-Founder</span>

                                <p className='text-white lg:mt-3 mt-1 max-w-[500px] lg:text-[14px] text-[10px]'>Motilal Oswal is an esteemed Indian entrepreneur known for his role as the founder, chairman, and managing director of Motilal Oswal Financial Services Ltd (MOFSL), a company he co-established alongside Raamdeo Agrawal in 1987.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor2} alt="mentor"/>
                            <div className='absolute lg:bottom-5 lg:left-12 bottom-4 left-8'>
                                <h3 className='max-w-[150px] text-red font-garamond text-[18px] lg:text-[35px] text-[18px] font-bold'>Suresh  Prabhu</h3>

                                <span className='text-white font-medium lg:text-[16px] text-[12px]'>MP and Former Cabinet Minister,<br/>Chancellor, Rishihood University</span>

                                <p className='text-white lg:mt-3 max-w-[500px] lg:text-[14px] text-[10px]'>Suresh Prabhakar Prabhu is an Indian politician who served as the Minister of Civil Aviation, Railways, Commerce & Industry in the First Modi ministry. He currently holds the position of Chancellor at Rishihood University.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor3} alt="mentor"/>
                            <div className='absolute lg:bottom-5 lg:left-12 bottom-1 left-8'>
                                <h3 className='text-red font-garamond lg:text-[35px] text-[18px] font-bold'> Dr. <br/>Sampadananda Mishra</h3>

                                <span className='text-white font-medium lg:text-[16px] text-[12px]'>Director, Centre for Human Science, Dean-<br/>Culture, Rishihood University</span>

                                <p className='text-white lg:mt-3 max-w-[500px] lg:text-[14px] text-[10px]'>Sampadananda Mishra is a Sanskrit scholar from Odisha, specializing in grammar. He was awarded the Maharshi Badrayan Vyas Award for Sanskrit in 2012 by the President of India, Pratibha Patil.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor4} alt="mentor"/>
                            <div className='absolute lg:bottom-5 lg:left-12 bottom-2 left-8'>
                                <h3 className='max-w-[200px] text-red font-garamond lg:text-[35px] text-[18px] font-bold'>Prof. (Dr.) Anil Kaul </h3>

                                <span className='text-white font-medium lg:text-[16px] text-[12px]'>Professor and Dean.<br/>School of Healthcare</span>

                                <p className='text-white lg:mt-3 max-w-[500px] lg:text-[14px] text-[10px]'>Dr. Anil Kaul, a seasoned Physician-Dentist, boasts over 30 years of expertise in global public health, healthcare administration, translational research, diagnostics, with a special focus on prevention and diagnosis of emerging/re-emerging Infectious Diseases.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor5} alt="mentor"/>
                            <div className='absolute lg:bottom-5 lg:left-12 bottom-4 left-8'>
                                <h3 className='max-w-[250px] text-red font-garamond lg:text-[35px] text-[18px] font-bold'>Prof. (Dr.) Manika Walia </h3>

                                <span className='text-white font-medium lg:text-[16px] text-[12px]'>Dean, School of Creativity</span>

                                <p className='text-white mt-3 max-w-[500px] lg:text-[14px] text-[10px]'>Manika Walia, a distinguished Professor and Founding Dean at Rishihood Universitys School of Creativity, tirelessly mentors students to conceive innovative, sustainable, and purpose-driven design solutions across various domains.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> 
        </section>
    );
};

export default Mentor;