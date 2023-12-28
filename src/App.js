
import { useState } from 'react';
import './App.css';


function App() {

  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [status,setStatus]=useState(null);
  

  let calculate=()=>{

    let bmi_val=Number(weight/(height/100)**2).toFixed(2);
    setBmi(bmi_val );

    let bmi_style=document.getElementById("bmi_status");
    
    if(bmi_val<18.5){
      bmi_style.style.color="red";
      setStatus("You are Under Weight");
      
    }
    else if(18.5<=bmi_val && bmi_val<25){
      bmi_style.style.color="#3CB371";
      setStatus(" You are Healthy");
      
    }
    else if(25<=bmi_val && bmi_val<30){
      bmi_style.style.color="#FFD700";
      setStatus("You are Over Weight");
    }
    else{
      bmi_style.style.color="red";
      setStatus("You are Obesity");
    }

    
  }
  
  const reload=()=>{
    window.location.reload();
  }


  return (
    <div className='app'>
      <div className='container'>
        <h1>BMI CACULATOR</h1>
    <div className='sec'>
          <label className='age'>Age:</label>
          <input type="text"  ></input>
      </div>
      <div className='sec'>
          <label>Height(cm):</label>
          <input  type="text" placeholder='Height in cms'  value={height} onChange={(e)=>setHeight(e.target.value)}/>
      </div>
      <div className='sec'>
          <label>Weight(Kg):</label>
          <input type="text" placeholder='Weight in Kgs' className='weight' value={weight}  onChange={(event)=>setWeight(event.target.value)}/>
      </div>

      <div className='btns'>
        <button onClick={reload} type='reset' id='reset' >Reset</button>
        <button onClick={calculate}  type='submit' id='submit'>Submit</button>
      </div>
      

      <div className='bmi-values'>
        <p>BMI value= {" "}<span id="bmi_val">{bmi} Kg/m<sup>2</sup></span></p>
        <p><span id="bmi_status" >{status}</span></p>
      </div>    
        
   </div>
    </div>
   
  );
}


export default App;
