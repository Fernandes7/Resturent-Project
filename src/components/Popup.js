import React, { useContext } from 'react';
import "./Popup.css";
import { Dispatchcontext } from '../Context/Appprovider';
function Popup(props) {
    const dispatch=useContext(Dispatchcontext)
    let dish=props.alldish.filter((item)=>{
        return item.strMeal===props.single
    }).map((selecteditem)=>{
        return(
            <div className='popcontent'>
                <img src={selecteditem.strMealThumb} alt="me"/>
                <h2>{selecteditem.strMeal}</h2>
                <div className='popbutton'>
                <button onClick={()=>props.addtocart(selecteditem.strMealThumb,selecteditem.strCategory)}>Order Now</button>
                <button onClick={()=>dispatch({type:"addtocart",payload:{img:selecteditem.strMealThumb,item:selecteditem.strCategory}})}>Dispatch Now</button>
                <button onClick={props.closepopup}>Cancel</button>
                </div> 
            </div>
        )
    })
  return (
    <div>
        <div className='popupwrap'>
            <div className='popup'>
                {dish}
            </div>
        </div>
    </div>
  )
}

export default Popup