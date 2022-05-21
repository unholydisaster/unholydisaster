import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Coureselbox, Imagecontainer } from '../styles/Images';
import Image from 'next/image';
import logoPic from "../../public/rollphoto.jpg"
import logoPic2 from "../../public/hero.jpg"
  
export default class Nextcouresel extends Component {
    render() {
        return (
            <Coureselbox>
              <Carousel>
                  <Imagecontainer>
                      <Image src={logoPic} alt="Picture"/>
                  </Imagecontainer>
                  <Imagecontainer>
                      <Image src={logoPic2} alt="Picture2"/>
                  </Imagecontainer>
              </Carousel>
            </Coureselbox>  
        );
    }
};