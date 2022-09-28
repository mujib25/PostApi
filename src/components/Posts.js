import {React, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

export default function Posts(props) {

const [postsRecord, setpostsRecord] = useState([])
    
    useEffect(() => {
    
        const postsData ={
            method:'GET',
            url:`https://jsonplaceholder.typicode.com/${props.category}`
        }

        axios.request(postsData).then(function(response){
            setpostsRecord(response.data);
            console.log(response.data);
        })
        .catch(function (error){
            console.log(error);
        })


        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
    }, [])
    

  return (
    <>

    <div className="record container my-5">
    <div className="row">
    {postsRecord?.map((post)=>{
        const {id, title,thumbnailUrl, body, name, email, username, address} = post;
          return (

            <div className="data my-2 col-md-6" key={id}>
            <div className="card text-center  h-100 position-relative">
                <div className="card-body h-100 pb-5">
                <h3>{title}</h3>
                <h3> {name}</h3>
                <h3>  {username}</h3>
                <p>{email}</p>
                <p>{body}</p>
                <img src={thumbnailUrl} alt="" />
                </div>
                <div className="card-footer position-absolute bottom-0 w-100">
                    <Link to="/" className='bg-dark text-white btn btn-sm mx-5'>Home</Link>
                    <Link to="/users" className='bg-dark text-white btn btn-sm'>User</Link>
                    <Link to="/comments" className='bg-dark text-white btn btn-sm mx-2'>Comments</Link>
                    <Link to="/photos" className='bg-dark text-white btn btn-sm'>Photos</Link>
                    <Link to="/albums" className='bg-dark text-white btn btn-sm mx-2'>Albums</Link>
                </div>
                </div>

               
            </div>
            );
        })}
    </div>
</div>
    </>
  )
}
