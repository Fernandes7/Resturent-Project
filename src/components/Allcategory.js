import React, {  useContext, useState } from 'react';
import "./Allcategory.css";
import Paging from './Paging';
import { allmenucontext } from './AllmenuContex';
function Allcategory(props) {
    let catgory;
    let singledish;
    const allmenu=useContext(allmenucontext);
    console.log("all menu ",allmenu)
    const [special,setSpecial]=useState();
    const [activedish,setactive]=useState("Beef");
        props.single ? singledish=props.single.meals.map((items,key)=>{
        if(key>5 && key <14)
        {
        return(
        <div className='activedish'>
        <img src={items.strMealThumb} alt="hello"></img>
        <h3>{items.strMeal}</h3>
        </div>
        )
        }
    }): singledish="";
    const handle=(items)=>{
       props.setSingle();
       setactive(items);
       let a= allmenu.filter((item)=>{
            return item.strCategory===items;
       }).map((selecteditem)=>{
            return(
                <div className='activedish'>
                <img src={selecteditem.strMealThumb} alt="hello"></img>
                <h3>{selecteditem.strCategory}</h3>
                </div>
            )
        })
        setSpecial(a);
    }
    props.cat ? catgory=props.cat.categories.map((item,key)=>{
        return(
            <button className={item.strCategory===activedish ? "active":" "} onClick={()=>handle(item.strCategory)}>{item.strCategory}</button>
        )
    }): catgory=" ";
  return (
    <div className='body'>
        <h2>Select Your Categories</h2>
        <div className='button'>{catgory}</div>
        <div className='activedishwrap'>
        {singledish}
        {special ? special.length>0 ? special :<div className='noitem'><h3 className='center'>No Items</h3></div>:""}
        </div>
       {special ? <Paging special={special}/> :" "}
    </div>
  )
}

export default Allcategory