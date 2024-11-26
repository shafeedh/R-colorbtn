
import { useState } from 'react';
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  const colorGreen = () => {
    setColor("green");
  };

  const colorRed = () => {
    setColor("red");
  };

  const colorOrange = () => {
    setColor("orange");
  };

  return (
    <>
      <div style={{  height: "100vh",background:color,width:'100%'}} >
      
        <div className='bg-dark d-flex align-items-center justify-content-center '>
          <button onClick={colorGreen} style={{ borderRadius:'10px',width:"130px",height:"50px"}} type="button" className="btn btn-success m-4">Button1</button>
          <button onClick={colorRed} style={{borderRadius:'10px',width:"130px",height:"50px"}} type="button" className="btn btn-danger m-4">Button2</button>
          <button onClick={colorOrange} style={{borderRadius:'10px',width:"130px",height:"50px"}} type="button" className="btn btn-warning m-4">Button3</button>
        </div>
      </div>
    
        
      
    </>
  )
}

export default App
