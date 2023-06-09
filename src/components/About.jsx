import React from "react";
import { infoDescriptions } from "../constants";
import { logo } from "../assets";

const About = () => {
    return (
        <section id="about">
            <div className="basic_container about grid-cols-2">
                <div>
                    <img alt="about_img" className="about_img" src={logo}></img>
                </div>
                <div className="about_info">
                    <h3 className="text-gradient text-3xl">
                        About Me:
                    </h3>
                    <p className="text-xl">
                        In near future there should be some more information about me and my interests: Web Development, Game Development in Unity and 3D Graphic in Blender.
                        <br />
                        In near future there should be some more information about me and my interests: Web Development, Game Development in Unity and 3D Graphic in Blender.
                        <br />
                        In near future there should be some more information about me and my interests: Web Development, Game Development in Unity and 3D Graphic in Blender.
                    </p>
                </div>  
            </div>
            <hr className="solid"></hr>
        </section>
    )
}

export default About;