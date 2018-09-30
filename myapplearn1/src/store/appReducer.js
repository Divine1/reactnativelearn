import * as actionTypes from './actions/types/actionTypes';


const initialState = {
    cities : ["delhi","chennai"]
}

const reducer = (state = initialState,action)=>{
    console.log("appReducer reducer")
    console.log("action ",action)
    console.log("state ",state)
    switch(action.type){
        case actionTypes.ADD_CITY:
            return {
                cities : state.cities.concat(action.payload.name)
            }
        case actionTypes.DELETE_CITY:
            
            return{
                cities : state.cities.filter((data,index)=> index != action.payload.id)
            }
        case actionTypes.VIEW_ALL_CITIES:
        break;
        default:
            return state;
    }
}

export default reducer;