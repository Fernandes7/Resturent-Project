import React from 'react'
import "./Paging.css"
function Paging(props) {
console.log(props.special.length);
let nooption=[];
for(let i=1;i<=props.special.length;i++)
{
 nooption.push(i);
};
let pages=nooption.map((item)=>{
    return(
        <div className='number'>{item}</div>
    )
})
console.log(nooption)
  return (
    <div className='numberwrap'>
    {pages}
    </div>
  )
}

export default Paging