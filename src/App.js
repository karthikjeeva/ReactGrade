import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function Stud(props) {
  return (
  <>
    <Router>
      <div>
        <Link to={props.name}><li> { props.name }</li></Link>
      </div>
      <Routes>
        <Route path={props.name} element={<Display name={props.name}/>}/>
      </Routes>
    </Router>
  
  </>
  ); 
}

const Display = (props) =>{
  return (
    <div className="main">
      <h1>Hello {props.name}</h1>
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
