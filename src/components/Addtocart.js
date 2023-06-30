import React, { useContext } from 'react'
import "./Addtocart.css"
import { Statecontext } from '../Context/Appprovider'
function Addtocart({add}) {
    const newcart=useContext(Statecontext)
    console.log(newcart)
    let items=add.map((item)=>{
    return(
      <div className="addtocart">
        <img src={item.img} alt="halt"></img>
        <h6>{item.name}</h6>
        </div>  
    )
    })
    let item=newcart.cartitems.map((item)=>{
      return(
        <div className="addtocart">
          <img src={item.img} alt="halt"></img>
          <h6>{item.title}</h6>
          </div>  
      )
      })
  return (
    <div className='wrap'>
       {items}
       {item}
    </div>
  )
}

export default Addtocart