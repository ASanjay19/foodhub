import { ADD_FAVORITE, REMOVE_FAVORITE } from "../types/ActionTypes";

const initialState = {
    FavoriteData : []
};


export default (state = initialState, action)=> {
    console.log('actions',action);
    switch(action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                FavoriteData : [...state.FavoriteData,action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                FavoriteData : state.FavoriteData.filter((val)=> val.id != action.payload.id)
            }    
        default:
            return state;    
    }
}