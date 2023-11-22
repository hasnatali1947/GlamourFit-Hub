"use client"

import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ({children}) => {
    const [coatData, setCoatData] = useState([]);
    const [vestcoatData, setvestcoatData] = useState([]);
    const [clothestData, setClothesData] = useState([]);
    
    useEffect(() => {
        const coatdata = JSON.parse(localStorage.getItem('setcoat'))
        if(coatdata){
            setCoatData(coatdata)
        }
    }, [])
    
        useEffect(() => {
            const vestcoatData = JSON.parse(localStorage.getItem('setvest'))
            if(vestcoatData) {
                setvestcoatData(vestcoatData)
            }
        },[])
    
        useEffect(() => {
            const clothesData = JSON.parse(localStorage.getItem('setClothes'))
            if(clothesData) {
                setClothesData(clothesData)
            }
        },[])

    return(
        <Context.Provider
        value={{
            coatData,
            setCoatData,
            vestcoatData,
            setvestcoatData,
            clothestData,
            setClothesData
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);