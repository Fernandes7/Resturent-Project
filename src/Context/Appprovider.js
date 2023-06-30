import { createContext, useReducer } from "react";
const Dispatchcontext=createContext()
const Statecontext=createContext()
const Appprovider=(props)=>{
const initialState={
    cartitems:[{}]
}
const reducer=(state,action)=>{
    console.log("Action is....",action)
    console.log("State......",initialState)
    switch(action.type)
    {
        case "addtocart":return{
            cartitems:[...state.cartitems,{img:action.payload.img,title:action.payload.item}]}
        default:return{
         state
        }
    }
}
let [state, dispatch]=useReducer(reducer,initialState)
return(
    <Dispatchcontext.Provider value={dispatch}>
        <Statecontext.Provider value={state}>
         {props.children}
        </Statecontext.Provider>
    </Dispatchcontext.Provider>
)
}
export {Appprovider,Statecontext,Dispatchcontext}