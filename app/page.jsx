"use client"
import Image from "next/image";
import React from "react";
import {useState,useEffect} from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (

    <div>
      i am a home page{count}
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  );
}
