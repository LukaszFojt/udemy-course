import React from "react";
import { happy_icon_f, logo, html_icon, css_icon, js_icon, react_icon, tailwind_icon, nodejs_icon } from "../assets";

const Hero = () => {
    return (
        <section id="home">
            <div className="basic_container hero_bg">
                <div>
                    <h1 className="text-3xl">Fullstack React Developer</h1>
                    <p className="text-xl">Hi, I'm Łukasz Fojt. A newbie Fullstack Developer from Poland.</p>
                    <br />
                    <p className="text-xl">If you have any questions(even not in my main subjects),</p>
                    <p className="text-xl">
                        you can go to the contact section.
                        <span>
                            <a href="https://www.flaticon.com/free-icons/happy" title="happy icons">
                                <img alt="flaticon" className="flaticon" src={happy_icon_f}/>
                            </a>
                        </span>
                    </p>
                    <div className="hero_skills">
                        <h1 className="text-3xl">Tech Stack:</h1>
                        <div className="hero_icons">
                            <img alt="html_icon" className="hero_skills_icon" src={html_icon}/>
                            <img alt="css_icon" className="hero_skills_icon" src={css_icon}/>
                            <img alt="js_icon" className="hero_skills_icon" src={js_icon}/>
                            <img alt="react_icon" className="hero_skills_icon" src={react_icon}/>
                            <img alt="tailwind_icon" className="hero_skills_icon" src={tailwind_icon}/>
                            <img alt="nodejs_icon" className="hero_skills_icon" src={nodejs_icon}/>
                        </div>
                    </div>         
                </div> 
                <div>
                    <img className="hero_img" src={logo}></img>
                </div>               
            </div>      
        </section>
    )
}

export default Hero;