import React from "react";
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import { Search } from "@mui/icons-material";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                {/* <TwitterTimelineEmbed
                 sourceType="profile"
                 screenName="cleverqasi"
                 options={{height: 400}}
                /> */}

                {/* new way to access twitter timeline below */}

                <a class="twitter-timeline" href="https://twitter.com/elonmusk?ref_src=twsrc%5Etfw">Tweets by elonmusk</a> 

                <TwitterShareButton
                    url="https://twitter.com/elonmusk?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    options={{text:"hello", via: "lol"}}
                />
            </div>
        </div>
    )
}

export default Widgets