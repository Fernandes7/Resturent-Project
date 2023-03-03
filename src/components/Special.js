import React, { useContext, useEffect, useState } from 'react';
import Carddish from './Carddish';
import Popup from './Popup';
import "./Special.css";
import { allmenucontext } from "./AllmenuContex";
import Addtocart from './Addtocart';
function Special(props) {
    const menu=useContext(allmenucontext);
    let item;
    const [popup,setPopup]=useState(false);
    const [single,setSingle]=useState();
    const [addtoct,setAddtocart]=useState([])
    function popuphandle(popfood)
    {
      setSingle(popfood);
      setPopup(true);
    }
    function closepopup()
    {
      setPopup(false);
    }
    useEffect(()=>{    
    },[])
   menu ? item=menu.map((meal,key)=>{
      if(key<=11)
      {
        return (
            <Carddish meal={meal} showpopup={popuphandle} />
            )
      }
    }):  item="";
    const addtocart=(addtocartimg,addtocartname)=>{
      setAddtocart([
        ...addtoct,
        {
          img:addtocartimg,
          name:addtocartname
        }
      ])
    }
  return (
    <div className='body'>
     {console.log("hey",addtoct.img)} 
   {addtoct ? <Addtocart add={addtoct}/>: ""}
    {popup && <Popup closepopup={closepopup} single={single} alldish={menu} addtocart={addtocart}/>}
    <div className='heading center'>
     <h2>Our Special Dishes are</h2>
     <p className='headcontent'>This the Special dishes in our Rstaurent it is very prity and Tastly Everyone should must try this</p>
    </div>
    <ul className='specialdiv'>
        {item ? item :<h2>Loading.......</h2>}
    </ul>
    </div>
  )
}

export default Special