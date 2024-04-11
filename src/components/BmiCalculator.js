import React, { useEffect } from 'react'
import { useState } from 'react';
const BmiCalculator = () => {

    const [height, setHeight]=useState("");
    const [weight, setWeight]=useState("");
    const [result, setResult]=useState("0")
    const [remark, setRemaks]=useState("");
    const [isRain, setIsRain]=useState(false);



const handleHeightChange=(e)=>{
setHeight(e.target.value);
console.log(e.target.value)
}

const handleWeightChange=(e)=>{
setWeight(e.target.value);
console.log(e.target.value)
}

const calculate=()=>{
    if( height !=="" && weight !==""){
        const bmi=(weight/(height*height)).toFixed(2);
        setResult(bmi);
    }else{
        alert("Please enter both the height and weight to get your BMI")
        setResult("0"); 
    }
 
}

const reset =()=>{
    setHeight("");
    setWeight("");
    setResult("0");
}

const handleEnter=(e)=>{
if(e.key==="Enter"){
    calculate();
}
}

const handleRain =()=>{
    setIsRain(!isRain);

}


useEffect(() => {
    // This code will only run when the 'result' value changes
    if (result !== "0") {
      if (result <= 18.5) {
        setRemaks(" You are Underweight, risk of being malnourished. 🥲");
      } else if (18.6 <= result && result <= 24.9) {
        setRemaks(" You are within a healthy range. 💚");
      } else {
        setRemaks(" You are Overweight. 🏃‍♂️🏃");
      }
    } else {
      setRemaks("");
    }
  }, [result]);




  return (
    <div className='h-screen w-full  flex justify-center  '>
 <div className={` mt-12  border-2 border-blue-400 h-3/4 rounded-xl bg-blue-50 relative  w-[360px] md:w-auto  ${isRain ? "bmi_calculator-rain" : ""}`}>
    <div className={`h-1/4 p-2 flex justify-center items-center text-xl  bg-blue-500 rounded-t-lg ${isRain ? "bg-blue-500/20 text-white" : "text-black"}`}>Body-Mass-Index(BMI) Calculator
    </div>
    <div className="absolute top-2 right-2" onClick={handleRain}>{isRain ? <i class="fa-solid fa-cloud-sun"></i> :<i className="fa-solid fa-cloud-sun-rain fa-fade"></i>}</div>


 <div className="inputs w-full flex justify-center gap-2 pt-10 text-center">
        <div className="h w-1/3">
            <input value={height} onChange={handleHeightChange} onKeyDown={handleEnter} type="text" placeholder="Height" className='border-2 border-b-4 border-blue-400 w-3/4 text-center bg-white/10 '/>
            <div className='text-sm pt-2'>Height (m)</div>
        </div>
        <div className="w w-1/3">
            <input value={weight} onChange={handleWeightChange} onKeyDown={handleEnter} type="text" placeholder="Weight" className='border-2 border-b-4 border-blue-400 w-3/4 text-center bg-white/10 ' />
            <div  className='text-sm pt-2'>Weight (kg)</div>
    
        </div>
    </div>
    <div className="btns flex gap-16 justify-center pt-12 items-center">
        <button className=' px-4 py-2 h-10 w-20 rounded-lg bg-red-300' onClick={reset}>Reset</button>
        <button className=' px-4 py-2 h-12 w-24 rounded-lg bg-green-300' onClick={calculate}>Calculate</button>
    </div>
    <div className="result flex flex-col justify-center items-center mt-12">
        <div className='text-2xl'>{result} <span className='text-sm text-gray-400'>bmi</span></div>
       {/* <div>
       <div>{height}</div>
            <div>{weight}</div>
        </div> */}
         <div className='mt-5'>Remark 👇</div>
        <div className="remark text-xs mt-2">{remark}</div>
        
    </div>
 </div>
    </div>
  )
}

export default BmiCalculator
