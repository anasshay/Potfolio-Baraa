import "./App.css";
import Experiences from "./components/Experience/Experiences";
import Navbar from "./components/NavBar/Navbar";
import Project from "./components/Project/projects";
import AboutMe from "./components/Aboutme/aboutme";
import GetInTouch from "./components/GetinTouch/Getintouch";
import Skill from "./components/skill/skill";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({
    social: [],
    user: "",
    aboutMe: "",
    skills: [],
    experiences: [],
    projects: [],
  });
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const social = await axios.get("/social-media");
    const user = await axios.get("/user");
    const aboutMe = await axios.get("/aboutme");
    const skillsData = await axios.get("/skills");
    const experiencesData = await axios.get("/experiences");
    const projectsData = await axios.get("/projects");
    try {
      setData({
        social: social.data.response,
        user: user.data.response[0],
        aboutMe: aboutMe.data.response[0],
        skills: skillsData.data.response,
        experiences: experiencesData.data.response,
        projects: projectsData.data.response,
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="App">

      {loading && (
        <div id="loading">
          <div className="loader"></div>
        </div>
      )}

      {!loading && (
        <div>
          <header>
            <Navbar navData={[data.user, data.aboutMe, data.social]} />
          </header>
          <div className="main-sections">
            <section>
              <AboutMe aboutMeProp={data.aboutMe} />
            </section>
            <hr />
            <section className="sections">
              <Skill skillsProp={data.skills} />
            </section>
            <hr />
            <section className="sections">
              <Experiences experienceProp={data.experiences} />
            </section>
            <hr />
            <section className="sections">
              <Project projectsProp={data.projects} />
            </section>
            <hr />
            <section className="sections last-section">
              <GetInTouch />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
