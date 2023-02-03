import { ADD_TO_BAG,REMOVE_FROM_BAG } from "../types/ActionTypes";

const initialState = {
    bagData : []
};


export default (state = initialState, action)=> {
    console.log('actions',action);
    switch(action.type){
        case ADD_TO_BAG:
            return {
                ...state,
                bagData : [...state.bagData,action.payload]
            }
        case REMOVE_FROM_BAG:
            return {
                ...state,
                bagData : state.bagData.filter((val)=> val.id != action.payload.id)
            }    
        default:
            return state;    
    }
}