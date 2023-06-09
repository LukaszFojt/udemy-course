import React from "react";
import { youtube_icon, github_icon, mail_icon } from "../assets";

const Contact = () => {
    return (
        <section id="contact">
            <div className="footer">
                <div id="github">
                    <a href="https://github.com/LukaszFojt">Github
                        <img alt="flaticon" className="flaticon" src={github_icon}/>
                    </a>
                </div>
                <div id="youtube">
                    <a href="https://www.youtube.com/channel/UCUmLAQnoHfzyGXkDjJckz-g">Youtube
                        <img alt="flaticon" className="flaticon" src={youtube_icon}/>
                    </a>
                </div>
                <div id="mail">
                    <a href="https://www.google.com/intl/pl/gmail/about/">Mail
                        <img alt="flaticon" className="flaticon" src={mail_icon}/>
                    </a>
                </div>
                <div>
                    <p>Copyright © 2023. All rights are reserved</p>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;