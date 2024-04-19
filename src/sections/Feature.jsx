import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import Button from "../components/Button";

const Feature = () => {
    return (
        <section className="bg-darkBlue" id="feature">
            <div className="container mx-auto px-3 lg:px-0">
                <div className="grid md:grid-cols-2 grid-cols-1 lg:py-[70px] py-[50px] md:gap-3 lg:gap-0">
                    <div className="mb-4 md:mb-0">
                        <img src={feature1} alt="features" />
                    </div>
                    <div className="lg:pl-10 pl-0 lg:pr-5 pr-0">
                        <h2 className="text-white lg:text-[45px] text-[24px] font-garamond font-bold lg:mb-8 mb-4">Rishihood University: Empowering Innovators, Shaping Futures</h2>

                        <p className="text-white mb-8 lg:text-[16px] text-[14px]">At Rishihood we nurture passionate learners of today to solve the big questions of tomorrow.</p>

                        <ul className="text-white mb-10 text-[14px]">
                            <li className="mb-2">• India&apos;s first and only Impact University nurturing future leaders.</li>
                            <li className="mb-2">• Embracing a legacy of impactful pioneers like Jamshedji Tata and Elon Musk.</li>
                            <li className="mb-2">• Experience learning that&apos;s rooted in Indian values, yet global and forward-looking </li>
                            <li className="mb-2">• Empowering students to create lasting change and transform themselves.</li>
                        </ul>

                        <div className="flex gap-3">
                            <Button 
                                text="Know About Our Faculties"
                                link="#faculty"
                            />

                            <Button 
                                text="Explore the Course" 
                                transparent={true}
                                link="#curriculum"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 pb-[70px]">
                    <div className="lg:pl-10 pl-0 lg:pr-5 pr-0">
                        <h2 className="text-white lg:text-[45px] text-[24px] font-garamond font-bold lg:mb-8 mb-4">Empowering Change, Driving Innovation: KPMG</h2>

                        <p className="text-white lg:mb-8 mb-4 lg:text-[16px] text-[14px]">As part of one of the Big Four professional services firms, KPMG in India has expertise in:</p>

                        <ul className="text-white lg:mb-10 mb-4 lg:text-[16px] text-[14px] md:ml-3 ml-0">
                            <li className="mb-2">• Risk, Financial & Business Advisory </li>
                            <li className="mb-2">• Tax & Regulatory Services </li>
                            <li className="mb-2">• Internal Audit </li>
                            <li className="mb-2">• Corporate Governance Services</li>
                        </ul>

                        <p className="text-white lg:mb-8 mb-4 text-[14px] lg:text-[16px]">Additionally, KPMG in India provides integrated model-based software process improvement and assessment services to help organizations achieve business excellence.</p>

                        <div className="flex gap-3">
                            <Button text="Know About Our Faculties" link="#faculty"/>
                            <Button 
                                text="Explore the Course" 
                                transparent={true}
                                link="#curriculum"
                            />
                        </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <img src={feature2} alt="features" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;