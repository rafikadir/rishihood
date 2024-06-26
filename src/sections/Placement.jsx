import img from "../assets/placement.png";
import Button from "../components/Button";

const Placement = () => {
    return (
        <section id="placement">
            <div className="container mx-auto lg:px-10 px-3">
                <div className="grid md:grid-cols-2 md:gap-3 lg:gap-0 grid-cols-1 items-center">
                    <div className="mb-3 lg:mb-0">
                        <img src={img} alt="placement" />
                    </div>
                    <div className="lg:px-10">
                        <h2 className="lg:text-[40px] text-[24px] font-garamond font-bold lg:mb-6 mb-3">100% Placement Support</h2>

                        <p className="mb-1">Unlock your analytics career with our dedicated Career Services team,  committed to ensuring every student embarks on a successful professional  journey post-graduation.</p>

                        <p className="mb-5">Our holistic approach to career development  encompasses a range of targeted activities designed to build your skill set, enhance your marketability, and prepare you for the dynamic world of business analytics.</p>

                        <div className="flex gap-2">
                            <Button 
                                text="Know Our Curriculum"
                                link="#curriculum"
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

export default Placement;