import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate();
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/post").then((resp) => {
            setListOfPosts(resp.data);
        });
    }, []);

    return (
        <div className="App">
            {listOfPosts.map((val, key) => {
                return (
                    <div key={key} className='post' onClick={() => navigate(`/post/${val.id}`)}>
                        <div className='title'>{val.title}</div>
                        <div className='body'>{val.text}</div>
                        <div className='footer'>{val.username}</div>
                    </div>
                )
            })}
        </div>
    );
}

export default Home