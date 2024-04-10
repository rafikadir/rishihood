import Banner from "./sections/Banner";
import CourseInfo from "./sections/CourseInfo";
import DemandSkill from "./sections/DemandSkill";
import Feature from "./sections/Feature";
import Models from "./sections/Models";
import Placement from "./sections/Placement";
import Program from "./sections/Program";
import Navbar from "./shared/Navbar";

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <CourseInfo/>
      <DemandSkill/>
      <Feature/>
      <Models/>
      <Program/>
      <Placement/>
    </>
  )
}

export default App
