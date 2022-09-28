import {React, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Posts = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const [postsRecord, setpostsRecord] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
    
        const postsData ={
            method:'GET',
            url:`https://jsonplaceholder.typicode.com/${props.category}`
        }
        
        axios.request(postsData).then(function(response){
            setLoading(true)
            setpostsRecord(response.data);
         
            console.log(response.data);
            setLoading(false)
        })    
        
        .catch(function (error){
            console.log(error);
        })


        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))

        
    }, [])
    
    //post per page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = postsRecord.slice(indexOfFirstPost, indexOfLastPost);
    //post per page end

    //pagination start
    const pageNumbers = [];

    for (let i=1; i<=Math.ceil(postsRecord.length / postsPerPage); i++){
        pageNumbers.push(i);
    }


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }
    //pagination end


  return (
    <>
 {loading && <Spinner />} 
    <div className="record container my-5">
    <div className="row">
   
    {currentPosts?.map((post)=>{
       
        const {id, title,thumbnailUrl, body, name, email, username} = post;
       
          return (

            <div className="data my-2 col-md-4" key={id}>
            <div className="card text-center  h-100 position-relative">
                <div className="card-body h-100 pb-5">
               
                <h3>{title}</h3>
                <h3>{name}</h3>
                <h3>{username}</h3>
                <p>{email}</p>
                <p>{body}</p>
                <img src={thumbnailUrl} alt="" />
                </div>
                <div className="card-footer  d-flex flex-wrap justify-content-between ">
                    <Link to="/" className='bg-dark text-white btn btn-sm '>Home</Link>
                    <Link to="/users" className='bg-dark text-white btn btn-sm'>User</Link>
                    <Link to="/comments" className='bg-dark text-white btn btn-sm '>Comments</Link>
                    <Link to="/photos" className='bg-dark text-white btn btn-sm'>Photos</Link>
                    <Link to="/albums" className='bg-dark text-white btn btn-sm '>Albums</Link>
                    <Link to="/todos" className='bg-dark text-white btn btn-sm '>ToDos</Link>
                </div>
                </div>
               
               
   
            </div>
            );
           
        })}

{/* pagination start */}
        <nav className='d-flex justify-content-center mt-4'>
      <ul className="pagination ">
        {pageNumbers.map(number =>{
            return(<li key={number} className="page-item">
                <a onClick={() => paginate(number)} href="!#" className='page-link'> 
                {number}
                </a>
            </li>)
        })}
      </ul>
    </nav>
{/* pagination end */}

    </div>
</div>
    </>
  )
}


export default Posts;