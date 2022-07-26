import React,{createContext,useContext,useReducer} from 'react'


 const StateContext=createContext();

export const StateProvider=({inititalState,reducer,children})=>{
    return (
        <StateContext.Provider value={useReducer(reducer,inititalState)}>
            {children}
        </StateContext.Provider>
    )

}
export const useStateValue = () => useContext(StateContext);