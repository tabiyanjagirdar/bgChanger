import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color,setColor] = useState("red")


  return (
    <>
   <div className='w-full h-screen duration-200 ' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ' >
  <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-1 rounded-3xl'>
    <button onClick={()=>setColor("red")} className=' px-4 outline-none rounded-full py-3 font-medium text-white shadow-lg' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setColor("green")} className=' px-4 outline-none rounded-full py-3 font-medium text-white shadow-lg' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setColor("purple")} className=' px-4 outline-none rounded-full py-3 font-medium text-white shadow-lg' style={{backgroundColor:"purple"}}>Purple</button>
    <button onClick={()=>setColor("blue")} className=' px-4 outline-none rounded-full py-3 font-medium text-white shadow-lg' style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>setColor("orange")} className=' px-4 outline-none rounded-full py-3 font-medium text-white shadow-lg' style={{backgroundColor:"orange"}}>Orange</button>
    <button onClick={()=>setColor("brown")} className=' px-4 outline-none rounded-full py-3 font-medium text-white shadow-lg' style={{backgroundColor:"brown"}}>Brown</button>
  </div>
</div>
   </div>
    </>
  )
}

export default App
