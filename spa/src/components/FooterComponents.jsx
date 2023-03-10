import React, {Component} from "react";


class FooterComponents extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__contact">
                    Contact Address
                </div>
                <div className="footer__about">
                    <div className="footer__about--all">
                        <div className="footer__about--col">
                            Col 1
                        </div>
                        <div className="footer__about--col">
                            Col 2
                        </div>
                        <div className="footer__about--col">
                            Col 3
                        </div>
                    </div>
                    <div className="footer__about--selec">
                        Select
                    </div>
                </div>
            </footer>
        )
    };
}

export default FooterComponents;
