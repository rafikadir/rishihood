import Admission from "../sections/Admission";
import Banner from "../sections/Banner";
import Blogs from "../sections/Blogs";
import CourseInfo from "../sections/CourseInfo";
import Curriculum from "../sections/Curriculum";
import DemandSkill from "../sections/DemandSkill";
import Faculty from "../sections/Faculty";
import Feature from "../sections/Feature";
import Feedback from "../sections/Feedback";
import Location from "../sections/Location";
import Mentor from "../sections/Mentor";
import Models from "../sections/Models";
import Network from "../sections/Network";
import Placement from "../sections/Placement";
import Program from "../sections/Program";
import Topbar from "../components/topbar";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const Home = () => {
    return (
        <>
            <Topbar/>
            <Navbar/>
            <Banner/>
            <CourseInfo/>
            <DemandSkill/>
            <Feature/>
            <Models/>
            <Program/>
            <Placement/>
            <Curriculum/>
            <Mentor/>
            <Faculty/>
            <Feedback/>
            <Location/>
            <Network/>
            <Blogs/>
            <Admission/>
            <Footer/>
        </>
    );
};

export default Home;