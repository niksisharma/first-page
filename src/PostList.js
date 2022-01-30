import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PostList(props) {
    
    const [posts, setData] = useState([]);

    useEffect(() => {
        //Make the network call

        console.log("Rendering the component");
            // e.preventDefault();
            // alert("HI");
            
       
            axios({
                method:'get',
                url:process.env.React_App_serverurl+"posts", 
              headers: { 
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'*'
              }})
            .then((response) => {
                // console.log(response.data);
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])
    console.log(posts);
    return (
        <>
            <h3>Posts</h3>
            {posts.map(post => (
                <div className='card'>
                    <b>Author:</b> {post.author}<br />
                    <b> Title:</b> {post.title} <br />
                    <p> <b>Description:</b> {post.content} </p>
                </div>

            ))

            }

        </>
    )
}