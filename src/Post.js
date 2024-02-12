import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from "@mui/icons-material";

function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://i.pinimg.com/736x/48/d4/5a/48d45a364370a42ccab17da7e4b410d2.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Mr Bean <span className="post__headerSpecial"><VerifiedIcon className="post__badge"/>@beantheredonethat</span></h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Make a Twitter Clone with React!</p>
                    </div>
                </div>
                {/* <img src="https://techcrunch.com/wp-content/uploads/2015/02/twitter-balance.gif" alt="twitter bird" /> */}
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post