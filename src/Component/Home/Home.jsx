import React from 'react'
import  "./home.css";
import Shapes from './Shapes';
import Me from "../../assets/avatar-1.svg";
import HeaderSocial from './HeaderSocial';
import ScrollDown from "./ScrollDown";
const Home=()=>{
    return (
        <section className='home container' id='home'>
            <div className='intro'>
                <img src={Me} alt='' className='home_img'/>
                <h1 className='home_name'> DHiraj Singhania  </h1>
                <span className='home_education'> I'M  A FRONT- END DEVELOPER </span>
                <HeaderSocial></HeaderSocial>
                <a href='#contact' className='btn'>HIre Me</a>

                <ScrollDown></ScrollDown>
                <Shapes></Shapes>
            </div>
        </section>
    )
}
export default Home