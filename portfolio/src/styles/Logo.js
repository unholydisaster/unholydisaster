import styled from "styled-components"
import { mq } from "./BurgerStyles"

export const Logoname=styled.p`
${mq[0,1]}{
    position:absolute;
    top:5px;
    left:60px;
    font-size:20px;
    z-index:40;
    font-family:Serif;
    color:${({open})=>open ? 'white':'black' };
}
`