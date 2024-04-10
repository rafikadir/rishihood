import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import Button from "../components/Button";

const Feature = () => {
    return (
        <section className="bg-darkBlue">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 py-[70px]">
                    <div>
                        <img src={feature1} alt="features" />
                    </div>
                    <div className="pl-10 pr-5">
                        <h2 className="text-white text-[45px] font-garamond font-bold mb-8">Rishihood University: Empowering Innovators, Shaping Futures</h2>
                        <p className="text-white mb-8">At Rishihood we nurture passionate learners of today to solve the big questions of tomorrow.</p>

                        <ul className="text-white mb-10">
                            <li className="mb-2">• India&apos;s first and only Impact University nurturing future leaders.</li>
                            <li className="mb-2">• Embracing a legacy of impactful pioneers like Jamshedji Tata and Elon Musk.</li>
                            <li className="mb-2">• Experience learning that&apos;s rooted in Indian values, yet global and forward-looking </li>
                            <li className="mb-2">• Empowering students to create lasting change and transform themselves.</li>
                        </ul>

                        <div className="flex gap-3">
                            <Button text="Know About Our Faculties"/>
                            <Button text="Explore the Course" transparent={true}/>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 pb-[70px]">
                    <div className="pl-10 pr-5">
                        <h2 className="text-white text-[45px] font-garamond font-bold mb-8">Empowering Change, Driving Innovation: KPMG</h2>
                        <p className="text-white mb-8">As part of one of the Big Four professional services firms, KPMG in India has expertise in:</p>

                        <ul className="text-white mb-10">
                            <li className="mb-2">• Risk, Financial & Business Advisory </li>
                            <li className="mb-2">• Tax & Regulatory Services </li>
                            <li className="mb-2">• Internal Audit </li>
                            <li className="mb-2">• Corporate Governance Services</li>
                        </ul>

                        <p className="text-white mb-8">Additionally, KPMG in India provides integrated model-based software process improvement and assessment services to help organizations achieve business excellence.</p>

                        <div className="flex gap-3">
                            <Button text="Know About Our Faculties"/>
                            <Button text="Explore the Course" transparent={true}/>
                        </div>
                    </div>
                    <div>
                        <img src={feature2} alt="features" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;