import './App.css';

function clickhandle (props) {
  alert("you clicked on" + props.name)
}

function Stud(props) {
  return <li onClick={() => clickhandle(props)}> { props.name }</li>;
  
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
