import Link from 'next/link'
import React from 'react'
import {useState} from 'react';
import Image from 'next/image';
import logoPic from "../../public/meru university logo.png"
import { Bugers, Styledburger } from '../styles/Bgst';
import { AngleDown, Facebook, Icons, Image1, Instagram, Linkcontainer, Linkdiv, Links, Links1, Links2, Menu, Navcontainer, Navinformer, Sidebar, Sidebar2, Span, Staff, Student, Twitter } from '../styles/Navmeru'

import { FaAngleDown,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import Studentnav from './Student';
import Staffnav from './Staff';
import Mainnav from './Mainnav';

export default function Navbar (props){
  const [open,setOpen]=useState(false)
  const [open1,setOpen1]=useState(false)
  const [open2,setOpen2]=useState(false)

  function openbar(){
    setOpen1(!open1)
  }
  function closebar1(){
    setOpen2(false)
  
  }

  function openbar1(){
    setOpen2(!open2)
  }

  function closebar(){
    setOpen1(false)
  }
  function openbar2(){
    setOpen(!open)
  }
  function closebar2(){
    setOpen(false)
  }
  
        return(
            <div>
              <Navinformer>
               <Icons>
               <Facebook/>
               <Twitter/>
               <Instagram/>
               </Icons>
               <Menu>
                 <Student  >
                   Student
                 </Student>
                 <AngleDown onClick={()=>{openbar(); closebar1() ; closebar2()} }/>
                 <Staff >
                   Staff
                 </Staff>
                 <AngleDown onClick={()=>{openbar1(); closebar(); closebar2()}}/>
               </Menu>
               <Staffnav primary open2={open2} open1={open1}/>
               <Studentnav  open1={open1}  />
              </Navinformer>
              <Navcontainer open={open}>
                <h1></h1>
                  <Image1>
                    <Image
                    src={logoPic} alt="picture3"
                    />
                  </Image1>
                  <Mainnav open={open} />
                  <Styledburger open={open} onClick={()=>{openbar2(); closebar(); closebar1()}}>
                     <Bugers open={open}  className="path1"/>
                     <Bugers open={open}  className="path2"/>
                     <Bugers open={open}  className="path3"/>
                   </Styledburger>
              </Navcontainer>
            </div>
        )
    }
