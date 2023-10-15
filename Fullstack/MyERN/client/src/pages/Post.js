import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(""); 

    useEffect(() => {
        axios.get(`http://localhost:3001/post/${id}`).then((resp) => {
             setPostObject(resp.data); 
        });

        axios.get(`http://localhost:3001/comment/${id}`).then((resp) => {
             setComments(resp.data); 
        });
    }, []);

    const addComment = () => {
        axios.post(`http://localhost:3001/comment`, 
            {text: newComment, PostId: id})
        .then((resp) => {
            console.log("Comment added!");
            const commentToAdd = {text: newComment};
            setComments([...comments, commentToAdd]);
            setNewComment("");
        });
    }

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
                <div className="addCommentContainer">
                    <input type="text" 
                        placeholder="Comment..." 
                        autoComplete="off" 
                        value={newComment}
                        onChange={(event) => setNewComment(event.target.value)}/>
                    <button onClick={addComment}>Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return <div className="comment">{comment.text}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Post
