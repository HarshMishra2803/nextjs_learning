"use client"
// import Image from "next/image";
// import React from "react";
// import { NextResponse } from "next/server";
import { SubmitAction } from "./actions/form";
import { useRef } from "react";


export default function Home() {
  let ref = useRef()

  // const handleclick=async()=>{
  //   let data = {
  //     name:"harsh",
  //     role:"coder"
  //   }
  //   let a = await fetch("/api/add",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify(data)
  //   })
  //   let res = await a.json()
  //   console.log(res)
  // }

  return (

    <div className="w-2/3 mx-auto my-20">
      <form  ref ={ref} action={SubmitAction}>
        <div>
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" className="text-black mx-4 bg-amber-200 border-red-800"/>
        </div>
        <div>
        <label htmlFor="add">Address</label>
        <input name="add" id="add" type="text" className="text-black mx-4 bg-amber-200 border-red-800"/>
        </div>
        <div>
          <button  className="border border-white px-4">Submit</button>
        </div>
      </form>
    </div>

    // <div>
    //   {/* i am a home page */}
    //   {/* i am a home page{count} */}
    //   {/* <button onClick={()=>setCount(count+1)}>click me</button> */}
    //   <h1 className="text-3xl font-bold "
    //   >Nextjs Api routes Demo </h1>
    //   <button onClick={handleclick}>click me</button>
    // </div>
  );
}
