import banner from '../assets/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faUser, faArrowTrendUp, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Button from "../components/Button";
import bannerLogo from "../assets/banner_logo.png";
import BannerForm from '../components/BannerForm';
import BannerForm2 from '../components/BannerForm2';

const Banner = () => {
    return (
        <section className="bg-cover" style={{backgroundImage: `url(${banner})`}}>
            <div className='container mx-auto py-[100px] lg:px-8'>
                <div className='grid grid-cols-5 items-center'>
                    <div className='col-span-3'>
                        <h2 className="font-garamond text-[44px] text-white leading-[50px] mb-8">
                            Bachelor’s Program in Business <br/> Analytics in Association <br/> with KPMG in India
                        </h2>

                        <ul className='text-white mb-8'>
                            <li className='text-[14px] mb-2'>
                                <FontAwesomeIcon icon={faUser} className='mr-2'/>
                                Mentors from <strong>50+ Top</strong> institutions & Companies like <strong>Amazon, Meta, Adobe</strong></li>
                            <li className='text-[14px] mb-2'>
                                <FontAwesomeIcon icon={faArrowTrendUp}  className='mr-2'/>
                                Unlock boundless career opportunities with our 100% <strong>placement assistance</strong>
                            </li>
                            <li className='text-[14px] mb-2'>
                                <FontAwesomeIcon icon={faPlaneDeparture}  className='mr-2'/>
                                Gain international exposure through visits to foreign universities at <strong>Singapore, London,</strong>etc.
                            </li>
                            <li className='text-[14px] mb-2'>
                                <FontAwesomeIcon icon={faGraduationCap}  className='mr-2'/>
                                Explore an array of clubs including AI, Robotics, Entrepreneurship, Software Development,etc.
                            </li>
                        </ul>

                        <div className="flex gap-2 mb-8">
                            <Button text="Register Now"/>
                            <Button text="Explore the Course" transparent={true}/>
                        </div>

                        <p className='mb-4 text-white text-[14px]'>UGC-approved program at Rishihood University in collaboration with KPMG</p>
                    
                        <img src={bannerLogo} className='max-w-[380px]' alt="banner logo" />
                    </div>

                    <div className='col-span-2'>
                        {/* <BannerForm/> */}
                        <BannerForm2/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;