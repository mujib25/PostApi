import React from 'react'

import dotLoading from '../icons/dotLoading.gif';


export default function Spinnner() {
  return (
    <>
        <div className="loader text-center" style={{height:'50px', margin:'2rem', position:'absolute', bottom:'50%', right:'50%', left:'0%',width:'100%'}}>
            <h3 className='text-center text-white'>We are trying for accessing the data please wait   <img style={{height:'20px'}} src={dotLoading} alt="" /></h3>
        </div>
    </>
  )
}
