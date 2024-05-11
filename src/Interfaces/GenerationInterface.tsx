import NavigationBar from "./NavigationBar"
import "./GenerationInterface.css"

function Generated(){
  return (
    <div>
      emestergerenar
    </div>
  )
}

function NavigationBox(){
  return (
    <div>
      
    </div>
  )
}

/* generated schedules go here */
function ScheduleBox() {
  return (
    <div className="schedule-box">
      <h2>hola soy german</h2>

    </div>
  )
}




function CarrerDropDown(){
  return (
    <div>
      career
    </div>
  )
}

function SemesterDropDown(){
  return (
    <div>
       <label>Choose a car:</label>

      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> 
    </div>
  )
}

function CourseContainer(){
  return (
    <div className="course-container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam natus consequuntur tenetur minus ea quidem et deserunt omnis, mollitia atque dolorem perspiciatis cum est optio nostrum temporibus voluptas quas.
    </div>
  )
}
function GenerateButton(){
  return (
    <div>
      emestergerenar
    </div>
  )
}


function CourseBox() {
  return (
    <div className="course-box">      
        <CarrerDropDown/>
        <SemesterDropDown/>
        <CourseContainer/>
        <GenerateButton/>
    </div>
  )
}


export default function GenerationInterface() {
  return (
    <div>
      <NavigationBar />
      <div className="main-container">
        <CourseBox />
        <ScheduleBox />
      </div>
    </div>
  )
}