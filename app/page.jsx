"use client"
import Image from "next/image";
import React from "react";
import {useState,useEffect} from "react"
import { NextResponse } from "next/server";

export default function Home() {
  const [count, setCount] = useState(0)
  const handleclick=async()=>{
    let data = {
      name:"harsh",
      role:"coder"
    }
    let a = await fetch("/api/add",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    })
    let res = await a.json()
    console.log(res)
  }

  return (

    <div>
      {/* i am a home page */}
      {/* i am a home page{count} */}
      {/* <button onClick={()=>setCount(count+1)}>click me</button> */}
      <h1 className="text-3xl font-bold "
      >Nextjs Api routes Demo </h1>
      <button onClick={handleclick}>click me</button>
    </div>
  );
}
