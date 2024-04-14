import Admission from "./sections/Admission";
import Banner from "./sections/Banner";
import Blogs from "./sections/Blogs";
import CourseInfo from "./sections/CourseInfo";
import DemandSkill from "./sections/DemandSkill";
import Faculty from "./sections/Faculty";
import Feature from "./sections/Feature";
import Feedback from "./sections/Feedback";
import Location from "./sections/Location";
import Mentor from "./sections/Mentor";
import Models from "./sections/Models";
import Network from "./sections/Network";
import Placement from "./sections/Placement";
import Program from "./sections/Program";
import Topbar from "./sections/Topbar";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {

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
      <Mentor/>
      <Faculty/>
      <Feedback/>
      <Location/>
      <Network/>
      <Blogs/>
      <Admission/>
      <Footer/>
    </>
  )
}

export default App
