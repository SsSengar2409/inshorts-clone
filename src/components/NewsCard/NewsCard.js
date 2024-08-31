import news from "../../images/breaking-news.jpg";
import "./NewsCard.css"

const NewsCard = ({ newsItem }) => {

    const fullDate = new Date(newsItem.publishedAt);
    var date = fullDate.toString().split(" ");
    const hour = parseInt(date[4].substring(0, 2));
    const time = hour > 12 ? true : false;
    //console.log(fullDate);
    return (
        <div className="newsCard">
            <div className="imageContainer">
                <img className="newsImage" alt={newsItem.title}
                    src={newsItem.urlToImage ? newsItem.urlToImage : news}
                />
            </div>
            <div className="newsText">
                <div className="newsHeader">
                    <span className="title">
                        {newsItem.title}
                    </span>
                    <div>
                        <span className="author">
                            <a href={newsItem.url} target="__blank"><b>short </b></a>
                            <span className="muted">
                                by {newsItem.author ? newsItem.author : "unknown"} /{" "}
                                {
                                    time ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                                        : `${hour}:${date[4].substring(3, 5)} am`
                                } on {date[0]}, {date[2]} {date[1]} {date[3]}
                            </span>
                        </span>
                    </div>
                </div>
                <div className="lowerNewsText">
                    <div className="description">
                        {newsItem.description ? newsItem.description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    </div>
                </div>
                <div>
                    <span className="readMore">read more at{" "}
                        <a className="source" href={newsItem.url} target="__blank">{newsItem.source.name}</a>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default NewsCard;