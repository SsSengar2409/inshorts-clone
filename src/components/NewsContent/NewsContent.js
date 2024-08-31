import { Container } from "@mui/material";
import React from "react";
import "./NewsContent.css";
import NewsCard from "../NewsCard/NewsCard.js";

const NewsContent = ({ newsResults, totalResults, loadMore, setLoadMore }) => {
    return (
        <Container maxWidth="lg">
            <div className="content">
                <div className="downloadMessage">
                    <div>
                        <span className="downloadText">
                            For the best experience use inshorts app on your smartphone
                        </span>
                    </div>
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
                {
                    newsResults.map((newsItem) => <NewsCard newsItem={newsItem} key={newsItem.title} />)
                }
                {loadMore <= totalResults && (
                    <>
                        <hr />
                        <button className="loadMore" onClick={() => setLoadMore(loadMore + 20)}>Load More</button>
                    </>
                )}

            </div>
        </Container>
    );
}

export default NewsContent;