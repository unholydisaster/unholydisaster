import Link from 'next/link'
import React from 'react'
import {useState} from 'react';
import Image from 'next/image';
import logoPic from "../../public/meru university logo.png"
import { Bugers, Styledburger } from '../styles/BurgerStyles';
import { AngleDown, Facebook, Icons, Image1, Instagram, Linkcontainer, Linkdiv, Links, Links1, Links2, Menu, Navcontainer, Navinformer, Sidebar, Sidebar2, Span, Staff, Student, Twitter } from '../styles/Navmeru'

import { FaAngleDown,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";

export default function Mainnav (props){
    return(
        <Linkcontainer open={props.open}>
                    
        <Link href="/" passHref>
          
          <Links>
            customizable dropdown menu
          </Links>
        </Link>
       
         <Link href="/postarticle" passHref>
           <Links>create</Links>
         </Link>
         <Link href="/" passHref>
           <Links>categories</Links>
         </Link>
         <Link href="/login" passHref>
           <Links>signup</Links>
         </Link>
     </Linkcontainer>
    )
}