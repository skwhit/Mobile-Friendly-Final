import React, {useEffect} from "react";
import author from "../../assets/SWhitlow.jpg";
import Icon from "./Icon";
import "./Landing.css";
import Particles from "../particles";


export default function Landing() {
  const icons = [
    { index: 0, id: "a", title: "Github", faClass:"fa-2x fa-brands fa-github", link: "https://github.com/skwhit"},
    { index: 1, id: "b", title: "LinkedIn", faClass:"fa-2x fa-brands fa-linkedin", link: "https://www.linkedin.com/in/spencer-whitlow-424029b7/" },
    { index: 2, id: "c", title: "Email", faClass:"fa-2x fa-solid fa-envelope", link: "mailto:whitlowspencer@gmail.com" },
    { index: 3, id: "d", title: "Certificates", faClass:"fa-2x fa-solid fa-stamp", link: "https://www.freecodecamp.org/fcc81b6486a-c630-4253-9f63-167dc023f2c3" },
    { index: 4, id: "e", title: "Codepen", faClass:"fa-2x fa-brands fa-codepen", link: "https://codepen.io/spencer-whitlow" },
    { index: 5, id: "f", title: "Resume", faClass:"fa-2x fa-solid fa-file", link: "https://drive.google.com/file/d/1JSiqv9WfHZpRUBRttnIQOZfTDlibzai7/view?usp=sharing" },
    { index: 6, id: "g", title: "Projects", faClass:"fa-2x fa-solid fa-list-check", link: "/projects" },
    { index: 7, id: "h", title: "Skills", faClass:"fa-2x fa-solid fa-lightbulb", link: "/skills" },
  ];

  useEffect(() => {
    const nav = document.body.querySelector("nav");
    nav.classList.add("nav-transparent");
    return () => {
      nav.classList.remove("nav-transparent");
    }
  },[])

  return (
    <div className="landing-container">
      <Particles />
      <div className="icons-container">
        {icons.map((item) => (
          <Icon key={`icon${item.id}`} icon={item} />
        ))}
      </div>

      <div className="author-container">
        <img className="author" src={author} alt="" />
      </div>
    </div>
  );
}
