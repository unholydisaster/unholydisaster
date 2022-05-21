import styled from "styled-components"
import Link from 'next/link'

const breakpoints=[640,768,1024,1280]

export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)




export const Linkk=styled.ul`
${mq[0,1]}{
    position:absolute;
    background-color:green;
    list-style-type:none;
    margin:0;
    padding:0;
    width:100%;
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
