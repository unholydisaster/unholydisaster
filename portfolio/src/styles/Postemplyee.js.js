import styled, {css} from 'styled-components'


const breakpoints=[640,768,1024,1280]
export const mq=breakpoints.map(
    bp=>`@media screen and (max-width:${bp}px)`
)


export const Cardborder=styled.div`   
position: absolute;
width: 881px;
height: 600px;
left: 226px;
top: 150px;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;

${mq[0,1]}{
    left:8px;
    width:95vw;
    top:100px;
    height:600px;
}
`
export const Input=styled.input`
position: absolute;
width: 300px;
height: 34px;
left: 12px;
top: 20px;
font-size:18px;
color:black;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
${mq[0,1]}{
width:80%;
height:30px;
top:20px;


  
${props=>props.nationalId && css`
top:80px;
`}

${props=>props.hoursworked && css`
top:140px;
`}

${props=>props.basicPay && css`
top:200px;
`}

${props=>props.houseallowance && css`
top:260px;
`}

${props=>props.conveyanceallowance && css`
top:320px;
`}

${props=>props.childrenaEducationllowance && css`
top:380px;
`}

${props=>props.fuelReimbusements && css`
top:440px;
`}

${props=>props.driverReimbursements && css`
top:500px;
`}

${props=>props.healthInsurance && css`
top:560px;
`}
${props=>props.taxIncome && css`
top:620px;
`}
}

`
export const Cardinerborder=styled.div`   
position: absolute;
width: 100%;
height: 1px;
left: 0px;
top: 256px;

background: #C4C4C4;
${mq[0,1]}{
    top:255px;
}
`
export const Cardtopborder=styled.div` 
position: absolute;
width: 100%;
height: 0px;
left:0;
top: 220px;
display:none;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
transform: matrix(1, 0, 0, -1, 0, 0);  
${mq[0,1]}{
display:none;

}
`
export const Cardsubmitcontainer=styled.div`
position: absolute;
width: 100%;
height: 45px;
left: 0;
top: 100%;

background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
${mq[0,1]}{
    width:100%;
    height:50px;

}

`
export const Cardsubmit=styled.button`   
position: absolute;
width: 161px;
height: 33px;
left: 80%;
top: 5px;
color:white;

background: rgba(35, 222, 35, 0.7);
border-radius: 10px;
 ${mq[0,1]}{
     left:30%;
     width:120;
     height:30px;
 }
`
export const Cardfooter=styled.div`   
margin-top: 150px;
background: #FFFFFF;
box-sizing: border-box;
${mq[0,1]}{
    margin-top:200px;
}
`