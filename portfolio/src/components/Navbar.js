import React from "react"
import Link from 'next/link'
import { useState } from "react"
import { Styledburger, Bugers } from "../styles/BurgerStyles";
import { Linka, Linkli, Links, Links1, Navcontainer, Navwrapper, Shadow } from "../styles/Navbar";
import { Logoname } from "../styles/Logo";

export default function Navbar(){
    const[open, setOpen]=useState(false)


    function openbar(){
        setOpen(!open)
      }

    
    return(
        <>
         
                   <Styledburger open={open} onClick={()=>{openbar()}}>
                     <Bugers open={open}  className="path1"/>
                     <Bugers open={open}  className="path2"/>
                     <Bugers open={open}  className="path3"/>
                   </Styledburger>
                   <Logoname open={open}>Eli Musa</Logoname>
                   <Navcontainer open={open}>
                    <Links>
                       <Linkli><Linka href="/" passHref>Home</Linka></Linkli>
                       <Linkli><Linka href="/" passHref>Essays</Linka></Linkli>
                       <Linkli><Linka href="/" passHref>Projects</Linka></Linkli>
                       <Linkli><Linka href="/" passHref>Bio</Linka></Linkli>
                       <Linkli><Linka href="/" passHref>Investments</Linka></Linkli>
                     </Links>
                   </Navcontainer>
                   <Shadow open={open}/>
      
        </>
    )
}