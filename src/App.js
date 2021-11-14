import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import LineChart from "./LineGraph";

function Stud(props) {
  return (
  <>
    <Router>
      <div>
        <Link to={props.name}><li> { props.name }</li></Link>
      </div>
      <Routes>
        <Route path={props.name} element={<Display />}/>
      </Routes>
    </Router>
  
  </>
  ); 
}

const Display = () =>{
  return (
    <div className="main">
      <LineChart/>
    </div>
  );
}

function App() {
  const students = ['Anil', 'Bob' , 'Clara', 'Dew', 'John', 'Ravi', 'Ram'];
  return (
    <>
     <ul>
        {students.map((student) => <Stud name={student} />)}
      </ul>
    </>
  );
}

export default App;
