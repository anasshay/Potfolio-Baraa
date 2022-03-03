import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import AboutMe from "./Components/AboutMe/aboutme";
import Experiences from "./Components/Experiences/experiences";
import Messages from "./Components/Messages/messages";
import Projects from "./Components/Projects/projects";
import Skills from "./Components/Skills/skills";
import SocialMedia from "./Components/Social Media/social-media";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    social: [],
    user: "",
    aboutMe: "",
    skills: [],
    experiences: [],
    projects: [],
  });

  const getData = async () => {
    const social = await axios.get("/social-media");
    // const user = await axios.get("/user");
    // const aboutMe = await axios.get("/aboutme");
    const skillsData = await axios.get("/skills");
    const experiencesData = await axios.get("/experiences");
    const projectsData = await axios.get("/projects");
    try {
      // console.log(user)
      setData({
        social: social.data.response,
        // user: user.data.response[0],
        // aboutMe: aboutMe.data.response[0],
        skills: skillsData.data.response,
        experiences: experiencesData.data.response,
        projects: projectsData.data.response,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route
            index
            path="/"
            element={<AboutMe />}
          />
          <Route path="/experiences" element={<Experiences experiencesProp ={data.experiences}/>} />
          <Route
            path="/projects"
            element={<Projects project={data.projects} />}
          />
          <Route path="/skills" element={<Skills skillsProps = {data.skills}/>} />
          <Route
            path="/social-media"
            element={<SocialMedia SocialMediaProp={data.social} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
