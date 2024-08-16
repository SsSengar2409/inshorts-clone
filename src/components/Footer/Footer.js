import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-inner">
                <div className="left">
                    <div className="logo">
                        <img
                            alt="inshorts logo"
                            src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
                        />
                    </div>
                    <div className="about">
                        <span>
                            <strong>Inshorts</strong> Pte. Ltd.
                        </span>
                        <span>
                            ©️ COPYRIGHT 2024
                        </span>
                    </div>
                </div>
                <div className="center">
                    <span>Contact Us</span>
                    <span>Terms & Conditions</span>
                    <span>Privacy Policies</span>
                </div>
                <div className="right">
                    <img
                        alt="facebook logo"
                        src="https://assets.inshorts.com/website_assets/images/facebook.png"
                    />
                    <img
                        alt="twitter logo"
                        src="https://assets.inshorts.com/website_assets/images/twitter.png"
                    />
                    <img
                        alt="linkedin logo"
                        src="https://assets.inshorts.com/website_assets/images/linkedin.png"
                    />
                </div>
            </div>

        </div>
    )
}

export default Footer;