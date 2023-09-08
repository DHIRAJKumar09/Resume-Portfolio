import React from 'react'
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import  Aboutbox  from './Aboutbox';

const About=()=>{
    return (
        <section className="about container section ">
            <div className="h2 section_title">About Me</div>
            <div className="about_container grid">
                <img src={Image} alt='' className='about_img'></img>
            </div>

            <div className="about_data grid">
                <div className="about_info">
                    <p className="about_discription">
                        I AM  DHIRAJ KUMAR  , WEB DEVELOPER  FORM INDIA . I HAVE RICH EXPERIENCE  IN WEB SITE DESIGN AND BUILDING AND CUSTOMIZATION , ALSO  I AM GOOD AT WORDPRESS .
                        
                    </p>
                    <a href="" className="btn">DOWNLOAD...</a>
                </div>
                <div className="about_skills grid">
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">Dovelopment </h3>
                                <span className="skills_numbers">90%

                                </span>
                            
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage development">

                            </span>
                        </div>
                    </div>


                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">UI/UX design </h3>
                                <span className="skills_numbers">80%

                                </span>
                            
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage ui_design">

                            </span>
                        </div>
                    </div>


                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">PHOTOGRAPHY  </h3>
                                <span className="skills_numbers">70%

                                </span>
                            
                        </div>
                        <div className="skills_bar">
                            <span className="skills_percentage photography">

                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Aboutbox></Aboutbox>
        </section>
    )
}
export default About 
