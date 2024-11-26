import React from 'react'
import { SliderData } from './SliderData'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Notice from '../Notice/Notice';
import Partner from '../Partner/LogoCarousel'
import Newsletter from '../Newsletter/Newsletter'
function Home() {
  return (
    <>
    <Splide options={{perPage:1, 
      autoplay: "true",perMove: "1", extensions: { AutoScroll },
      autoScroll: {
        speed: 2,
        pauseOnHover: true,
        pauseOnFocus: false,
      },
      breakpoints: {
        1000: {
          perPage: 1,
        }}}}>
    {SliderData.map((SliderData)=>(
      <SplideSlide key={SliderData.id}>
            <figure >
  <img  src={SliderData.url} alt="" height="500" width="100%"/>
  
</figure>

      </SplideSlide>
    ))}
    </Splide>
    <Notice/>
    <Partner/>
    <Newsletter/> 
    </>
     
  )
}

export default Home
