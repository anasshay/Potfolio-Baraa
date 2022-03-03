// import React, { Component } from "react";
// import AddImg from "../Skills/addImg";
// import Button from "../Skills/button";
// import "./project.css";
// import axios from "axios";
// export class Projects extends Component {
//   updateContent = async (e) => {
//     e.preventDefault();
//     let projectLink = document.getElementById("projectLink");
//     let projectTitle = document.getElementById("projectTitle");
//     let projectDescription = document.getElementById("projectDescription");
//     console.log(
//       projectDescription.value,
//       projectLink.value,
//       projectTitle.value
//     );
//     let data = {
//       imageLink: "./icon.png",
//       title: projectLink.value,
//       link: projectTitle.value,
//       description: projectDescription.value,
//     };
//     const res = await axios.post("/projects", data);
//     try {
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   edit = (index) => {
//     let button = document.querySelector(".C" + index);
//     let inputs = document.querySelector(`.proj-container${index}`);
//     button.style.display = "block";
//     console.log(
//       inputs.querySelectorAll("input").forEach((item) => {
        
//       })
//     );
//   };
//   delete = (id) => {};
//   save = async (id, index) => {
//     let button = document.querySelector(".C" + index);
//     let inputs = document.querySelector(`.proj-container${index}`);
//     console.log(
//       inputs.querySelectorAll("input").forEach((item) => {
//         item.disabled = true;
//       })
//     );
//     // console.log(id);
//     button.style.display = "none";

//     let dataToSend = {};
//     const res = await axios.put(`/projects/${id}`, dataToSend);
//     try {
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   render() {
//     // console.log(this.props.project);
//     return (
//       <>
//         <div className="projects">
//           <h1 className="project-title">Projects</h1>
//           <form method="POST" action="/" className="project-img">
//             <div className="porject-image"></div>

//             <div className="project-button">
//               {this.props.project.map((item, index) => {
//                 return (
//                   <div className={`proj-container${index}`}>
//                     <input
//                       type="text"
//                       placeholder="Link"
//                       disabled
//                       value={item.title}
//                     ></input>
//                     <input
//                       type="text"
//                       placeholder="Link"
//                       disabled
//                       value={item.description}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Link"
//                       disabled
//                       value={item.link}
//                     />
//                     <input
//                       type="text"
//                       placeholder="Link"
//                       disabled
//                       value={item.imageLink}
//                     />
//                     <Button text="Edit" click={() => this.edit(index)} />
//                     <Button text="Delete" click={() => this.delete(item._id)} />
//                     <div style={{ display: "none" }} className={`C${index}`}>
//                       <Button
//                         text="Save"
//                         click={() => this.save(item._id, index)}
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </form>
//           <form method="POST" action="/" className="project-link">
//             <input id="projectLink" type="text" placeholder="Link" required />
//             <input id="projectTitle" type="text" placeholder="Title" required />
//             <input
//               id="projectDescription"
//               type="text"
//               placeholder="Description"
//               required
//             />
//             <AddImg />
//             <Button text="Add Project" click={this.updateContent} />
//           </form>
//         </div>
//       </>
//     );
//   }
// }

// export default Projects;
