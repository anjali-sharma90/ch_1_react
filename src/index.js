import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card ">
      <Avatar />

      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./profile.jpg" alt="" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1 className="h1">Jonas Schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy.When not coding or
        preparing a course, I like to play board games,to cook(and eat),or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="👌" color="red" />
      <Skill skill="JavaScript" emoji=" 👋" color="green" />
      <Skill skill="Web Design" emoji=" 👍" color="blue" />
      <Skill skill="Git and GitHub" emoji=" 👌" color="pink" />
      <Skill skill="React" emoji=" 👋" color="purple" />
      <Skill skill="Svelte" emoji="👍" color="yellow" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.color };

  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
