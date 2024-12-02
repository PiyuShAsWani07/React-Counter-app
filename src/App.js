import  {useState, useEffect} from 'react';
import './App.css';
//React props
// const Person =(props)=>
//   {
//     return(
//       <>
//       <h2>Name: {props.name}</h2>
//       <h2>Last Name: {props.lastName}</h2>
//       <h2>Age: {props.age}</h2>
//       </>
//     )
//   }
const App= () =>{
  const [counter , setCounter] = useState(0); // Whenever we can a function and it starts with use that mean in react it is an hook
  // This code happens as soon as this component renders
  
  // Changing the initial state from 0 to 100
  // useEffect(() => {
  //   setCounter(100);
  // },[]);

  //  useEffect(() => {
  //    alert('you changed the count to '+counter);
  //  },[counter])

  return (
    <div className="App">
      {/* <Person name='John' lastName ='Doe' age='30'/>
      <Person name='Jack' lastName ='Dark' age='48'/>
      <Person name='Jonny' lastName ='Depp' age='29'/>
      <Person name='Robert' lastName ='jr.' age='58'/> */}

      <button onClick={() => setCounter((prevCount)=> prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount)=> prevCount+1)}>+</button>
    </div>
  );

  //React State = state in a react is a plain javascript object used by react to represent a piece of information about the components current situation it is comepletly managed by the components itself.
}

export default App;
