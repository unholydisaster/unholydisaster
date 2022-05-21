import React from 'react'
import Navbar from '../components/Navbar1'
import { Author, Cardborder, Cardfooter, Cardinerborder, Cardpreview, Cardsubmit, Cardsubmitcontainer, Cardtitle, Cardtopborder, Cardwrite, Description, Input, Reviewarea, Topic, Writearea } from '../styles/Postemplyee.js.js'
import {useState,useEffect} from 'react';
import fetch from 'isomorphic-fetch'
import {useRouter} from "next/router"

export default function Postarticle (){
    const [form,setForm]=useState({author:'', title:'', description:'', topic:'', markdown:''});
    const router=useRouter();
    

    const handleChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const postArticle=async event=>{
        event.preventDefault();
        const res=await fetch('/api/hello',{
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            },
            method:'POST'

        })
        const result=await res.json()
        router.push("/");
    }
    

    return(
        <div>
          <Navbar/>

          <Cardtopborder/>

          <Cardborder >
              <form onSubmit={postArticle}>
                 <Input  name="fullname" type="text" placeholder="fullname"  onChange={handleChange} ></Input>
                 <Input nationalId name="nationalId" type="number" placeholder="nationalId"  onChange={handleChange} ></Input>
                 <Input hoursworked name="hoursworked" type="number" placeholder="hoursworked"  onChange={handleChange} ></Input>
                 <Input basicPay name="basicpay" type="number" placeholder="basicpay"  onChange={handleChange} ></Input>
                 <Input houseallowance name="houseallowance" type="number" placeholder="houseallowance"   onChange={handleChange} ></Input>
                 <Input conveyanceallowance name="conveyanceallowance" type="number" placeholder="conveyanceallowance"  onChange={handleChange} ></Input>
                 <Input childrenaEducationllowance name="Childreneducation" type="number" placeholder="Childreneducation"  onChange={handleChange} ></Input>
                 <Input fuelReimbusements name="FuelReimbursements" type="number" placeholder="FuelReimbursements"  onChange={handleChange} ></Input>
                 <Input driverReimbursements name="DriverReimbursements" type="number" placeholder="DriverReimbursements"  onChange={handleChange} ></Input>
                 <Input healthInsurance name="healthinsurance" type="number" placeholder="healthinsurance"  onChange={handleChange} ></Input>
                 <Input taxIncome name="taxdeductable" type="number" placeholder="taxdeductable"  onChange={handleChange} ></Input>
                  <Cardsubmitcontainer>
                  <Cardsubmit type="submit">
                      submit new user
                  </Cardsubmit>
                  </Cardsubmitcontainer>
              </form>
          </Cardborder>
          <Cardfooter>

          </Cardfooter>
        </div>
    )
}
