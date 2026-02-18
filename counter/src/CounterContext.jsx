import { useState } from "react";
import { createContext,useContext } from "react";

const CounterContext = createContext();

export const CounterProvider = ({children}) => {
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev != 0 ? prev - 1 : 0);
    }
    const incrementBy = (val) => {
        console.log(val,'valllllllllllll')
        setCount(count + val);
    }
    const reset = () =>{
        setCount(0);
    }

    return ( <CounterContext.Provider value={{count,increment,incrementBy,decrement,reset}}>{children}</CounterContext.Provider>)
}

export const useCounter = () => useContext(CounterContext);

