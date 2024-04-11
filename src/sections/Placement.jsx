import img from "../assets/placement.png";
import Button from "../components/Button";

const Placement = () => {
    return (
        <section>
            <div className="container mx-auto lg:px-10">
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <img src={img} alt="placement" />
                    </div>
                    <div className="px-10">
                        <h2 className="text-[40px] font-garamond font-bold mb-6">100% Placement Support</h2>
                        <p>Unlock your analytics career with our dedicated Career Services team,  committed to ensuring every student embarks on a successful professional  journey post-graduation.</p>

                        <p className="mb-5">Our holistic approach to career development  encompasses a range of targeted activities designed to build your skill set, enhance your marketability, and prepare you for the dynamic world of business analytics.</p>

                        <div className="flex gap-2">
                            <Button text="Know Our Curriculum" />
                            <Button text="Download Brochure" transparent={true} style2={true}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Placement;