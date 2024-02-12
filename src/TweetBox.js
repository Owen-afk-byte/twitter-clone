import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://helios-i.mashable.com/imagery/articles/05SzGlYqpD4cUlIaQ8DHdVF/hero-image.fill.size_1200x1200.v1666999270.jpg" />
                    <input placeholder="What's happening?" type="text"/>
                </div>
            <input className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text"/>
            <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox