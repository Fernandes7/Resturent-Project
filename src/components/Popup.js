import React from 'react';
import "./Popup.css";
function Popup(props) {
    let dish=props.alldish.filter((item)=>{
        return item.strMeal===props.single
    }).map((selecteditem)=>{
        return(
            <div className='popcontent'>
                <img src={selecteditem.strMealThumb} alt="me"/>
                <h2>{selecteditem.strMeal}</h2>
                <div className='popbutton'>
                <button onClick={()=>props.addtocart(selecteditem.strMealThumb,selecteditem.strCategory)}>Order Now</button>
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