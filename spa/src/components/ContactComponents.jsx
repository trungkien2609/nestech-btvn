import React, { Component } from "react";
import Fbsvg  from "../Images/social_svg/icons8-facebook.svg"



class ContactComponents extends Component{
    render(){
        return (
            <div className="sticky">
                <a href="https://www.facebook.com/" className="a__contact"><img src={Fbsvg} alt="facebook" /></a>

            </div>
        )
    };
}

export default ContactComponents;