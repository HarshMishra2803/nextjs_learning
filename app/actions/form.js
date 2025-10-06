"use server"
import fs from "fs/promises"

export const SubmitAction= async (e)=>{
    
    console.log(e.get("name"),e.get("add"))

    let a  = await fs.writeFile("Harsh.txt","Name is `"+e.get("name")+"` Address is `"+e.get("add")+"`") ;
  

  }

  //126 middlware in nextjs