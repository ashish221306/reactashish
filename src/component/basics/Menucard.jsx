import React from 'react'

 const Menucard = ({modal}) => {
    return (
        <div>
            <h1>menu card</h1>
            <h2 onClick={()=>{modal('satish')}}>click to update</h2>
        </div>
    )
}
export default Menucard;

