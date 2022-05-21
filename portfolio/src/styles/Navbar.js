import styled from "styled-components"
import Link from 'next/link'

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)



export const Navcontainer=styled.div`
${mq[0,1]}{
    left:0px;
    display:grid;
    background:black;
    position:absolute;
    width:70%;
    height:100vh;
    color:white;
    padding:20px;
    grid-template-columns:repeat( 1, minmax(10px, 1fr) );
    transform:${({open})=>open? 'translateX(0)':'translateX(-200%)'} ;
    transition-timing-function: ${({open})=>open?"ease-out" :"ease-in"} ;
    transition: 0.5s;
    opacity:85%;
    z-index:30;
    
   
}
`

export const Shadow=styled.div`
${mq[0,1]}{
    background:black;
    position:absolute;
    width:100%;
    height:100vh;
    transform:${({open})=>open? 'translateX(0)':'translateX(-400%)'} ;
    transition-timing-function: ${({open})=>open?"ease-out" :"ease-in"} ;
    transition: 0.1ms;
    display:${({open})=>open? 'block':'none'} ;
    opacity:40%;
    z-index:20;
    
   
}
`
export const Links=styled.ul`
${mq[0,1]}{
    position:absolute;
    top:100px;
    left:60px;
    list-style-type:none;
    margin:0;
    padding:0;
    z-index:30;
}
`
export const Linkli=styled.li`
${mq[0,1]}{
font-family:Helvetica, verdana, sans-serif;
font-size:16px;
margin-bottom: 20px;
z-index:30;
}
`
export const Linka=styled(Link)`
${mq[0,1]}{
    text-decoration:none;
    color:#000;
    display:block;
    width:200px;
    z-index:30;
}
`
