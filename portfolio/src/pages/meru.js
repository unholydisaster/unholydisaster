import Navbar from "../components/Navmeru"

import React from 'react';
import Head from "next/head";
import Nextcouresel from "../components/Couresel";



const Meru =()=>{
  return (
    <>
      <Head>
        <title>
          Home
        </title>
      </Head>
     <Navbar/>
     <Nextcouresel/>
    </>
  )
}


export default Meru


