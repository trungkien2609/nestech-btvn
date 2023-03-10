import React, {Component} from "react";
import Discover_img from "../../Images/discover_blue.jpeg";
class Discover extends React.Component {
    render() {
        return (
            <section className="Discover">
                <div className="content__abso">
                    <h2 className="h2__black">Discover the Wonder</h2>
                    <p className="para__gray">Healing waters. A subterranean spa. Gourmet cuisine. Luxurious suites. Otherworldly vistas.A universe of radiant wellbeing.</p>
                </div>
                <img src={Discover_img} alt="" className="img__right" />
            </section>
        )
    }
}

export default Discover;