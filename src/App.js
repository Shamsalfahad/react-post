import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* simillar in loop */}
      <LoadPosts></LoadPosts>
   <District name ='Dhaka' special ="Raja Sohob kichur"></District>
   <District name ='Puran Dhaka' special ='kachi'></District>
   <District name = 'Madaripur' special='misty'></District>
    </div>
  );
}
function LoadPosts(){
  const[posts,setPosts]=useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => setPosts(data))

  },[])
  return(
    <div>
      <h1>Posts:{posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post (props){
  return(
    <div style={{backgroundColor:"lightblue", margin:"20px", border:"2px solid blue"}}>
      <h2>Title:{props.title} </h2>
      <p>Body:{props.body} </p>

    </div>
  )
} 
const districtStyle={
  backgroundColor:"green",
  margin: '20px',
  borderRadius:"20px",
  padding:"10px"
}
// district compunent
// jsx
// props
function District(props){
  // power variable
  // setPower function
  const[power, setPower]= useState(1);

  // power update korar function
  const boostPower = ()=>{
    const newPower = power + 1;
    setPower(newPower);
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>power: {power}</h4>
      <button className='button'onClick={boostPower}>Boost The Power</button>
      
    </div>
  )
}

export default App;
