import { useState } from "react"
import Pg from "./Pg"
import Graduate from "./Graduate"
import Ug from "./Ug"
export default function Lol()
{    let[choice,setChoice] =useState("s")

     function Student(e)
    {
        choice =e.target.value
        setChoice(choice)
        


    }
    return<div>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="email"/>
        <br></br>
            <br>
            </br>
        <select onChange={Student} >
            <option>Select</option>
            <option value="i">Pg</option>
            <option value="j">GraduatePG</option>
            <option value="k">UG</option>
           

        </select>
        {choice==="i"?<Pg></Pg>:""}
        {choice==="j"?<Graduate></Graduate>:""}
        {choice==="k"?<Ug></Ug>:""}
    </div>
}