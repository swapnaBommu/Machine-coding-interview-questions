import { act } from "react";
import { INCREMENT,DECREMENT,RESET } from "../actions/counterActions";

const initial_state = {count : 0};

export const counterReducer = (state = initial_state, action) =>{

    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                count:state.count + 1
            }
        case "DECREMENT":
            if(state.count <= 0){
                return;
            }
            return{
                ...state,
                count:state.count - 1
            };
            
        case "RESET":
            return{
                ...state,
                count:0
            }

        default:
            return state
    }
}

export default counterReducer;