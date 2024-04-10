import icon_growth from "../assets/icons/growth.png";
import icon_rupee from "../assets/icons/rupee.png";
import icon_people from "../assets/icons/people.png";
import icon_id from "../assets/icons/id.png";
import icon_idea from "../assets/icons/idea.png";
import icon_computer from "../assets/icons/computer.png";

const Models = () => {
    return (
        <section className="py-[50px] shadow-xl">
            <div className="container mx-auto lg:px-10">
                <h2 className="text-[35px] font-garamond mb-8"><span className="text-darkBlue">KPMG</span> Pedagogy is based on <span className="text-darkBlue">Contemporary Models</span> and <span className="text-darkBlue">Methodologies</span> such as:</h2>
            
                <div className="grid grid-cols-6 gap-5">
                    <div className="flex items-center border-r-2 border-opacity-10 border-darkBlue">
                        <div className="max-w-7 mr-2">
                            <img src={icon_growth} alt="growth" />
                        </div>
                        <p className="text-[#344054]">Business Performance</p>
                    </div>

                    <div className="flex items-center border-r-2 border-opacity-10 border-darkBlue">
                        <div className="max-w-7 mr-2">
                            <img src={icon_rupee} alt="growth" />
                        </div>
                        <p className="text-[#344054]">Governance & Value</p>
                    </div>

                    <div className="flex items-center border-r-2 border-opacity-10 border-darkBlue">
                        <div className="max-w-7 mr-2">
                            <img src={icon_people} alt="growth" />
                        </div>
                        <p className="text-[#344054]">People Management</p>
                    </div>

                    <div className="flex items-center border-r-2 border-opacity-10 border-darkBlue">
                        <div className="max-w-7 mr-2">
                            <img src={icon_idea} alt="growth" />
                        </div>
                        <p className="text-[#344054]">Lifecycle & Project</p>
                    </div>

                    <div className="flex items-center border-r-2 border-opacity-10 border-darkBlue">
                        <div className="max-w-7 mr-2">
                            <img src={icon_computer} alt="growth" />
                        </div>
                        <p className="text-[#344054]">Software Development</p>
                    </div>

                    <div className="flex items-center">
                        <div className="max-w-7 mr-2">
                            <img src={icon_id} alt="growth" />
                        </div>
                        <p className="text-[#344054]">Service Management</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Models;