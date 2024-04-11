import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import mentor1 from "../assets/mentors/1.png";
import mentor2 from "../assets/mentors/2.png";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";


const Mentor = () => {

    return (
        <section className="py-[100px]">
           <div className="container mx-auto lg:px-10">
                <h2 className="text-[40px] font-garamond font-bold text-center mb-3"><span>Mentors At Rishihood:</span> Illuminating Paths, Igniting Potential</h2>
                <p className="max-w-[650px] m-auto text-center mb-8">At Rishihood University, our mentors represent the pinnacle of excellence, hailing from top industries and renowned institutions worldwide.</p>

                
                <Swiper
                    spaceBetween={0}
                    slidesPerView={2}
                    navigation={true}
                    >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor1} alt="mentor" className='rounded-l-2xl'/>
                            <div className='absolute bottom-5 left-5'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Motilal <br/> Oswal</h3>
                                <span className='text-white font-medium'>Founder & Chairman, <br/>Motilal Oswal Co-Founder</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Motilal Oswal is an esteemed Indian entrepreneur known for his role as the founder, chairman, and managing director of Motilal Oswal Financial Services Ltd (MOFSL), a company he co-established alongside Raamdeo Agrawal in 1987.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor2} alt="mentor" className='rounded-r-2xl'/>
                            <div className='absolute bottom-5 left-5'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Suresh<br/> Prabhu</h3>
                                <span className='text-white font-medium'>MP and Former Cabinet Minister,<br/>Chancellor, Rishihood University</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Suresh Prabhakar Prabhu is an Indian politician who served as the Minister of Civil Aviation, Railways, Commerce & Industry in the First Modi ministry. He currently holds the position of Chancellor at Rishihood University.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor1} alt="mentor" className='rounded-l-2xl'/>
                            <div className='absolute bottom-5 left-5'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Motilal <br/> Oswal</h3>
                                <span className='text-white font-medium'>Founder & Chairman, <br/>Motilal Oswal Co-Founder</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Motilal Oswal is an esteemed Indian entrepreneur known for his role as the founder, chairman, and managing director of Motilal Oswal Financial Services Ltd (MOFSL), a company he co-established alongside Raamdeo Agrawal in 1987.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src={mentor1} alt="mentor" className='rounded-r-2xl'/>
                            <div className='absolute bottom-5 left-5'>
                                <h3 className='text-red font-garamond text-[35px] font-bold'>Motilal <br/> Oswal</h3>
                                <span className='text-white font-medium'>Founder & Chairman, <br/>Motilal Oswal Co-Founder</span>
                                <p className='text-white mt-3 max-w-[500px] text-[14px]'>Motilal Oswal is an esteemed Indian entrepreneur known for his role as the founder, chairman, and managing director of Motilal Oswal Financial Services Ltd (MOFSL), a company he co-established alongside Raamdeo Agrawal in 1987.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div> 
        </section>
    );
};

export default Mentor;