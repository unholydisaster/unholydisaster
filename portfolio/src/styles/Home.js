import styled from "styled-components"
import { mq } from "./BurgerStyles"
import Link from 'next/link'


export const Homecontainer=styled.div`
${mq[0,1]}{
position:absolute;
top:90px;
width:84%;
height:80%;
left:8%;

}
`

export const Biglogo=styled.h1`
${mq[0,1]}{
position:relative;
top:0px;
color:#08909e;
font-family:Serif;
font-weight:100;
font-size:35px;
}
`
export const Content=styled.p`
${mq[0,1]}{
position:relative;
top:-15px;
color:black;
font-size:14px;
}
`


export const Linkcontent=styled.ul`
${mq[0,1]}{
    position:absolute;
    top:220px;
    left:30px;
    margin:0;
    padding:0;
}
`
export const Linklii=styled.li`
${mq[0,1]}{
font-family:Helvetica, verdana, sans-serif;
font-size:14px;
margin-bottom: 15px;


}
`
export const Linkaa=styled(Link)`
${mq[0,1]}{
    color:#08909e;
    display:block;
    width:200px;

}
`
export const Linkp=styled.a`
${mq[0,1]}{
    color:#08909e;
    font-size:16px;
}
`
export const Thanks=styled.p`
${mq[0,1]}{
    position:relative;
    color:black;
    top:140px;
    font-size:14px;
}
`
export const Imagecontainer=styled.div`
${mq[0,1]}{
    position:absolute;
    top:460px;
}
`