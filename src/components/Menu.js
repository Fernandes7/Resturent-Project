import React, { useContext, useEffect, useState } from 'react';
import Allcategory from './Allcategory';
import Hero from './Hero';
import Special from './Special';
import  Allmenu  from './AllmenuContex';
import { allmenucontext } from './AllmenuContex';
function Menu() {
  const [category,setCategory]=useState();
  const [singledish,setSingle]=useState([]);
  const meal=useContext(allmenucontext);
  async function getCategory()
  {
    const API="https://www.themealdb.com/api/json/v1/1/categories.php";
     const responce= await fetch(API);
     const data= await responce.json();
     setCategory(data);
  }
  async function singleCategory()
  {
    const API="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
     const responce= await fetch(API);
     const data= await responce.json();
     setSingle(data);
  }
    useEffect(()=>{
       getCategory();
       singleCategory();
    },[])
     
  return (
    <div>
     <Allmenu >
     <Hero />
     <Special/>
     <Allcategory cat={category} all={meal} single={singledish} setSingle={setSingle}/>
     </Allmenu>
    </div>
  )
}

export default Menu