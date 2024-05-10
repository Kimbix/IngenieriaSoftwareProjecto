import NavigationBar from "./NavigationBar";
import "./LandingInterface.css";

function Description() {
  return (
    <div className="description-container">
      <h1 className="description-header">HorariosPlusPlus</h1>
      <p className="description-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil laudantium fuga quibusdam nisi libero dolore possimus animi! Eaque in quis sunt animi deleniti amet fugit. Nostrum voluptatum laudantium minus soluta.</p>
    </div>
  )
}

interface DeveloperBoxContent {
  name: string;
  description: string;
  github_link: string;
}

function DeveloperBox({ name, description, github_link } : DeveloperBoxContent) {
  return (
    <div className="developer-box">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={github_link}>github</a>
    </div>
  )
}

function Developers() {
  return (
    <div className="developers-container">
      <DeveloperBox name="Humberto Aleman" description="NONE" github_link="https://github.com"/>
      <DeveloperBox name="Cristina Carnevali" description="NONE" github_link="https://github.com"/>
      <DeveloperBox name="Daniel Castellanos" description="NONE" github_link="https://github.com"/>
      <DeveloperBox name="David Hidalgo" description="NONE" github_link="https://github.com"/>
    </div>
  )
}

export default function LandingInterface() {
  return (
    <div>
      <NavigationBar/>
      <div className="screen-container">
        <Description/>
        <Developers/>
      </div>
    </div>
  )
}
