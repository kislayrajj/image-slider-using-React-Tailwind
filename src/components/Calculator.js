import React from 'react'
import * as math from 'mathjs';
import { useState } from 'react'


const Calculator = () => {

    const [num, setNum]=useState("")
    const [result, setResult]=useState("")
    const [error, setError]=useState("")
    const [isDarkTheme, setIsDarkTheme]=useState(false)

    const handleDark=()=>{
        setIsDarkTheme(!isDarkTheme)
    }

const handleChange=(e)=>{
setNum(e.target.value)
}

const handleClick=(value)=>{
if(
    (value==="+" ||value==="-" || value==="*" || value==="/" ||value==="." || value==="%")
     &&
(num.endsWith("+") || num.endsWith("*") || num.endsWith("-") || num.endsWith("/") || num.endsWith(".") || num.endsWith("%"))
)
{
    return;
}
setNum( num + value)
}


const handleAllClear=()=>{
    setNum("")
    setResult("")
    setError("")
}

const handleDelete=()=>{
    setNum(num.slice(0,-1)) //num.length-1
}

const calculate=()=>{
    try{
        setResult(math.evaluate(num))
        setError("")
    }

    catch{
        setError("Invalid Expression");
    }

}

const handleKeyDown=(e)=>{
    if(e.key ==="Enter"){
        calculate()
    }

}


  return (
    <div className='h-full flex flex-row-reverse gap-10  justify-center p-5'>
        <div><button onClick={handleDark} className=" bg-red-500 px-2 py-3 text-center rounded-lg">ChangeMode</button></div>
     <div className={`main h-[550px] w-[350px] border-2 border-black/30 bg-blue-300/40 rounded-xl  ${isDarkTheme ? "bg-gray-800" : ""}` }>
<div className=' h-36 p-2 pb-0 relative '>
    <div className='error absolute top-2 p-2 text-red-500 font-semibold'> {error}</div>
        <input value={num} onChange={handleChange} onKeyDown={handleKeyDown} type="type" name="" id="" className={`h-full w-full border-2 border-black/30 text-5xl  text-right ${isDarkTheme ? "bg-gray-950 text-white" : ""}`}/>
    <div className={`result text-3xl absolute bottom-0 text-right w-full p-5 pb-1 font-semibold ${isDarkTheme ? " text-white" : ""}`}>= {result}</div>
    </div>
    <div className=' h-[400px] p-2 flex flex-col justify-between text-3xl'>
    <div className='flex justify-between gap-2 text-center'>
        <div className=' w-1/5 px-4 py-4 bg-red-500/80 rounded-2xl' onClick={()=>handleAllClear()}>AC</div>
        <div className='w-1/5 px-4 py-4  bg-red-400/90 rounded-2xl' onClick={()=>handleDelete()}><i class="fa-solid fa-delete-left text-wh"></i></div>
        <div className='w-1/5 px-6 py-4  bg-blue-400/80 rounded-2xl' onClick={()=>handleClick("%")}>%</div>
        <div className='w-1/5 px-6 py-4  bg-blue-400/80 rounded-2xl' onClick={()=>handleClick("/")}>/</div>
    </div>
    <div className='flex justify-between gap-2 text-center'>
        <div className='w-1/5 px-6 py-4  bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(7)}>7</div>
        <div className='w-1/5 px-6 py-4  bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(8)}>8</div>
        <div className='w-1/5 px-6 py-4  bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(9)}>9</div>
        <div className='w-1/5 px-6 py-4  bg-blue-400/80 rounded-2xl' onClick={()=>handleClick("*")}>X</div>
    </div>
    <div className='flex justify-between gap-2 text-center'>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(4)}>4</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(5)}>5</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(6)}>6</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick("-")}>-</div>
    </div>
    <div className='flex justify-between gap-2 text-center'>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(1)}>1</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(2)}>2</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(3)}>3</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick("+")}>+</div>
    </div> 
    <div className='flex justify-between gap-2 text-center'>
        <div className='w-2/5 px-6 py-4 bg-green-400/80 rounded-2xl' onClick={()=>calculate()}>=</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(0)}>0</div>
        <div className='w-1/5 px-6 py-4 bg-blue-400/80 rounded-2xl' onClick={()=>handleClick(".")}>.</div>
    </div>
    </div>
     </div>
    </div>
  )
}

export default Calculator
