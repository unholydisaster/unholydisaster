import styled, {css} from 'styled-components'
import { FaAngleDown } from "react-icons/fa";
import {mq} from "../styles/Navbar"

export const Listbody=styled.div`
${mq[0,1]}{
    position: absolute;
    width: 95%;
    min-height:400px;
    left: 2.5%;
    top: 120px;
 
    
    background: #FFFFFF;
    border: 1px solid #003566;
    box-sizing: border-box;

}
`
export const Button=styled.button`
${mq[0,1]}{
position: relative;
width: 70%;
height: 40px;
left: 0px;
top: 0px;
color:white;
background-color:#003566;
border: 1px solid #003566;
box-sizing: border-box;
h1{
    font-size:20px;
    position:relative;
    left:-70px;

}

${props=>props.netsalary && css`
width:30%;
background:#FFFFFF;
color:#003566;
h1{
    font-size:20px;
    left:0px;
    
}

`}

}
`
export const Namessalary=styled.div`
${mq[0,1]}{
    position: absolute;
    width: 100%;
    max-height:355px;
    left:0px;
    top: 40px;
    overflow-X:hidden;
    
    background: #FFFFFF;
    border: 1px solid 111111;
    box-sizing: border-box;
    grid-gap:0px;
    div{
       box-sizing:border-box;
       border:1px solid #003566;
       width:100%;
       height:30px;
       left:0px;
   }
    a{
    font-size:14px;
    color:#003566;
    font-weight:550;
    position:relative;
    top:10px;

}
h2{
    position:relative;
    font-size:12px;
    color:#68F445;
    top:-20px;
    left:80%;
 
}
}
`
export const Divsalary=styled.div`
${mq[0,1]}{

    box-sizing:border-box;
    border:1px solid #003566;
    width:30%;
    height:30px;
    left:70%; 
}
`

export const Faangledown=styled(FaAngleDown)`
position:absolute;
left:60%;
top:20px;
color:white;
font-size:20px;
`
export const Detailsdiv=styled.div`
${mq[0,1]}{
    position: absolute;
    width: 100%;
    max-height:355px;
    left:0px;
    top: 40px;
    overflow-X:hidden;
    
    background: white;
    border: 1px solid 111111;
    box-sizing: border-box;
    grid-gap:0px;
    transform:${({open2})=>open2 ? 'translateX(0)':'translateX(-200%)'};
    transition:transform 0.1ms ease-in-out;
    div{
       box-sizing:border-box;
       border:1px solid #003566;
       width:100%;
       height:30px;
       color:white;
       left:0px;
   }
}
a{
    font-size:14px;
    color:#003566;
    font-weight:550;
    position:relative;
    top:10px;

}
h2{
position:relative;
font-size:14px;
color:#68F445;
top:-20px;
left:40%;
}
h3{
position:relative;
font-size:12px;
color:#68F445;
top:-48px;
left:60%;
    }
    h4{
position:relative;
font-size:12px;
color:#68F445;
top:-80px;
left:80%;
        }
}
`