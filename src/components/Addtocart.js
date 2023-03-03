import React from 'react'
import "./Addtocart.css"
function Addtocart({add}) {
    console.log(add)
    let items=add.map((item)=>{
    return(
      <div className="addtocart">
        <img src={item.img} alt="halt"></img>
        <h6>{item.name}</h6>
        </div>  
    )
    })
  return (
    <div className='wrap'>
       {items} 
    </div>
  )
}

export default Addtocart