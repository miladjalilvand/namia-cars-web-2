"use client"
import { createContext,useContext } from "react";

const BusinessContext = createContext();

export function BusinessProvider  ({children , value}){
 
    return <BusinessContext.Provider value={value} >
        {children}       
    </BusinessContext.Provider>
}

export function useBusiness(){
    return useContext(BusinessContext);
}