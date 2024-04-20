import Button from "../components/Button";
import YouTube from 'react-youtube';

const Admission = () => {
    const opts = {
        height: '300',
        width: '100%',
    }
    return (
        <section className="lg:pt-[20px] md:pt-0 pb-[50px]">
            <div className="container mx-auto lg:px-10 px-3">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="relative max-w-full">
                        <YouTube videoId="81f_YEzdsq8" opts={opts}/>
                    </div>

                    <div>
                        <h2 className="lg:text-[40px] text-[22px] font-bold font-garamond max-w-[470px]">We are <span className="text-darkBlue">Looking</span> for the <span className="text-darkBlue">Next Generation</span> of <span className="text-darkBlue">Leaders</span>
                        </h2>

                        <p className="lg:text-[20px] text-[14px] lg:my-[20px] lg:mb-0 mb-2">Admissions Open for 2024 Session. <br/>Register Today!!</p>

                        <div className="flex gap-3">
                            <Button 
                                text="Register Now"
                                link="#home"
                            />

                            <Button text="Download Brochure" 
                                transparent={true} 
                                blackBorder={true}
                                link="#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Admission;