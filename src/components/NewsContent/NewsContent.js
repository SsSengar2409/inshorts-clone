import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css"

const NewsContent = () => {
    return (
        <Container maxWidth="lg">
            <div className="content">
                <div className="downloadMessage">
                    <span className="downloadText">
                        For the best experience use inshorts app on your smartphone
                    </span>
                    <div className="images">
                        <img
                            alt="app store"

                            src="https://assets.inshorts.com/website_assets/images/appstore.png"
                        />
                        <img
                            alt="play store"

                            src="https://assets.inshorts.com/website_assets/images/playstore.png"
                        />
                    </div>
                </div>

            </div>
        </Container>
    );
}

export default NewsContent;