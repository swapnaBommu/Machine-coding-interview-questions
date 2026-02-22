//counter action constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'; 
export const RESET = 'RESET';


//action creators
export const increment = (count) => {
    return {
        type: INCREMENT,
        count
    }
}

export const decrement = (count) =>{
    return {
        type:DECREMENT,
        count
    }
}

export const reset = () =>{
    return { type:RESET}
}