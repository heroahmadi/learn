import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/post/${id}`).then((resp) => {
             setPostObject(resp.data); 
        })
    });

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div className="title">Title: {postObject.title}</div>
                    <div className="body">Text: {postObject.text}</div>
                    <div className="footer">Username: {postObject.username}</div>
                </div>
            </div>

            <div className="rightSide">
                Comment section 
            </div>
        </div>
    )
}

export default Post
