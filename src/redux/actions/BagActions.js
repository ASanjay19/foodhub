import { ADD_TO_BAG, REMOVE_FROM_BAG } from "../types/ActionTypes"


export const addToBag = (item) => {
    return {
      type: ADD_TO_BAG,
      payload : item
    }
  }

 export  const removeFromBag =(item)=> {
    return {
        type: REMOVE_FROM_BAG,
        payload : item
    }
 } 