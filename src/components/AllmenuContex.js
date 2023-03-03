import { useEffect, useState,createContext } from "react";
export const allmenucontext=createContext();
 const Allmenu=(props)=>{
    const [meal,setMeal]=useState()
    const [loading,setLoading]=useState(true);
    async function getdata()
  {
    const API="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
     const responce= await fetch(API);
     const data= await responce.json();
     setMeal(data.meals);
     setLoading(false)
  }
  useEffect(()=>{
    getdata();
 },[])
 return(
 <allmenucontext.Provider value={meal}>
    {!loading ? props.children :<h1>loading</h1>}
 </allmenucontext.Provider>
 )
}
export default Allmenu;