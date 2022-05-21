import styled, {css} from 'styled-components'
import { FaAngleDown,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";


const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)

export const Navinformer=styled.div`
position: absolute;
width: 100%;
height:40px;
left: 0px;
top: 0px;
color:white;
background: #FCC62C;
${mq[0,1]}{
width:100vw;
position:relative;
height:50px;
}
`
export const Icons =styled.div`
${mq[0,1]}{
    position:relative;
    display:grid;
    grid-template-columns:repeat( 3, minmax(2px, 1fr) );
    width:20%;
    left:40%;
   
    


}
`
export const Facebook=styled(FaFacebookF)`
${mq[0,1]}{
font-size:16px;
color:white;

`

export const Twitter=styled(FaTwitter)`
${mq[0,1]}{
font-size:16px;
color:white;

`

export const Instagram=styled(FaInstagram)`
${mq[0,1]}{
font-size:16px;
color:white;
}
`
export const Menu=styled.div`
${mq[0,1]}{
    position:relative;
    display:grid;
    grid-template-columns:repeat( 4, minmax(20px, 1fr) );
    width:50%;
    left:30%;
    top:5px;
 
   
}
`
export const Student=styled.button`
${mq[0,1]}{
    font-size:16px;
    color:white;
    width:65px;
    height:20px;
    background:#FCC62C;
    border-style:none;
}
`
export const Staff=styled.button`
${mq[0,1]}{
    font-size:16px;
    color:white;
    width:70px;
    height:20px;
    background:#FCC62C;
    border-style:none;
}
`
export const AngleDown =styled(FaAngleDown)`
${mq[0,1]}{
    font-size:16px;
    color:white;
    left:30px;
    position:relative;
    top:5px;
    }

`

export const Sidebar=styled.div`
${mq[0,1]}{
    left:0px;
    top:50px;
    display:grid;
    background:green;
    position:absolute;
    width:54%;
    padding:20px;
    grid-gap:40px;
    grid-template-columns:repeat( 1, minmax(50px, 1fr) );
    transform:${({open1})=>open1 ? 'translateX(0)':'translateX(-200%)'} ;
    transition-timing-function: ${({open1})=>open1?"ease-out" :"ease-in"} ;
    transition: 0.9ms;
    z-index:30;
    
        
    ${props=>props.primary && css`
    left:25%;
    display:grid;
    width:50%;
    height:80px;
    z-index:40;
    transform:${({open2})=>open2 ? 'translateX(0)':'translateX(-200%)'};
    transition-timing-function: ${({open2})=>open2?"ease-out" :"ease-in"};
    transition: 0.9ms;
    grid-gap:0px;
    `}
    
    }
`

export const Navcontainer=styled.div`
position: absolute;
width: 100%;
height: 110px;
left: 0px;
top: 40px;
background: white;

h1{
    position:absolute;
    color:black;
    font-size:30px;
    left:20px;
    font-family:Maryleen FY;
}
${mq[0,1]}{
    position:fixed;
    width:100vw;
    height:${({open})=>open ? '110px':'110px'};
    transition:transform 0.3s ease-in-out;
    z-index:20;
    top:50px;
    background:${({open})=>open ? 'white':'white'}
    }
`
export const Linkcontainer=styled.div`
position:absolute;
display:grid;
grid-template-columns:repeat( 4, minmax(100px, 1fr) );
width:35vw;
grid-gap:0px;
left:50%;
${mq[0,1]}{
    border-top:2px solid #FCC62C;
    left:10%;
    top:100px;
    display:grid;
    background:white;
    width:80%;
    grid-template-columns:repeat( 1, minmax(10px, 1fr) );
    transform:${({open})=>open ? 'translateY(0)':'translateY(-200%)'} ;
    transition-timing-function: ${({open})=>open?"ease-out" :"ease-in"};
    transition: 0.9ms;

    
    }
`

export const Links=styled.a`
font-family: arial;
font-size:16px;
color:black;
position:relative;
text-align:start;
cursor: pointer;
${mq[0,1]}{
padding:15px 20px;
left:15px;
width:200px;

}

`

export const Links1=styled.a`
font-family: arial;
font-size:16px;
position:relative;
text-align:center;
cursor: pointer;
${mq[0,1]}{
color:24292F;
z-index:100;
text-align:start;
display:grid;
grid-template-columns:repeat( 1, minmax(50px, 1fr) );
}
`
export const Image1=styled.div`
${mq[0,1]}{
    position:absolute;
    top:40px;
    left:10%;
    height:10px;
    width:180px;
}
`




export const Links2=styled.a`
font-family: arial;
font-size:16px;
position:relative;
text-align:center;
cursor: pointer;
${mq[0,1]}{
color:24292F;
z-index:100;
text-align:start;
display:grid;
top:10px;
grid-template-columns:repeat( 1, minmax(50px, 1fr) );
}
`

export const Desktop=styled.div`
${mq[2,3]}
`