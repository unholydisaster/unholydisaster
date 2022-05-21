import Navbar from '../components/Navbar1';
import React from 'react'
import {useState} from 'react';
import { Button, Detailsdiv, Divsalary, Employeelogged, Faangledown, List, Listbody, Listcontainer, Menu, MenuList, Menulistitem, Namessalary, Section } from '../styles/List';
import Link from "next/link";
import apiUrl from "next-api-url"
import fetch from "isomorphic-unfetch"

const  Payroll=({employees})=>{
    const [open2,setOpen2]=useState(false)
    function openbar2(){
      setOpen2(!open2)
    }

    return(
        <>
        <Navbar/>
         <Listbody>
          <Button>
           <h1>Full Name</h1>
         
          </Button>
          <Faangledown onClick={()=>{openbar2()}}/>
          <Button netsalary>
           <h1>Netsalary</h1>
          </Button>
          <Namessalary>
      {employees.map(Employees=> {
       const Basicpay=Employees.Hoursworked*Employees.Basicpay
       const Totalallowance= Employees.Houseallowance + Employees.Conveyanceallowance + Employees.Childreneducationallowance
     
       const TotalReimbursement=Employees.FuelReimbursements +Employees.DriverReimbursements
       const Totaldeduction=Employees.HealthInsurance +Employees.Taxincome
     
       const Grosspay=Basicpay + Totalallowance + TotalReimbursement
       const Netpay=Grosspay-Totaldeduction
                      return(
                     <>
                     <div key={Employees.Fullname}>
                     <Link href={`/${Employees._Fullname}`} passHref>
                     <a>{Employees.Fullname}</a>
                     </Link>
                     <h2>${Netpay}</h2>
                     </div>
                      
                     </>
                      )
                   })}
                   
           </Namessalary>
           <Detailsdiv open2={open2}>
           {employees.map(Details=> {
             const Basicpay1=Details.Hoursworked*Details.Basicpay
             const Totalallowance1= Details.Houseallowance + Details.Conveyanceallowance + Details.Childreneducationallowance
     
             const TotalReimbursement1=Details.FuelReimbursements +Details.DriverReimbursements
             const Totaldeduction1=Details.HealthInsurance +Details.Taxincome
     
              const Grosspay1=Basicpay1 + Totalallowance1 + TotalReimbursement1
              const Netpay1=Grosspay1-Totaldeduction1
             return(
               <div key={Details.Fullname}>
                 <Link href={`/${Details._Fullname}`} passHref>
               <a>{Details.Fullname}</a>
               </Link>
               <h2>{Details.Hoursworked}hrs</h2>
               <h3>${Details.Basicpay}</h3>
               <h4>${Netpay1}</h4>
               </div>
             )
           })}
           </Detailsdiv>
         </Listbody>
         </>
    )
}

export async function getServerSideProps(context){

    const data = await (await fetch(`${apiUrl(context)}/hello`)).json();
  

    if(!data){
        return {
            notFound:true
        }
    }
    return{
        props:{
            employees:data
        }
    }
}

export default Payroll