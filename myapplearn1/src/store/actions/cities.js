import * as actionTypes from './types/actionTypes';

export const addCity = (name)=>{
    return {
        type : actionTypes.ADD_CITY,
        payload : {name}
    }
}

export const deleteCity = (id)=>{
    return{
        type: actionTypes.DELETE_CITY,
        payload: {id}
    }
}

export const viewAllCities = (id)=>{
    return{
        type: actionTypes.VIEW_ALL_CITIES,
        payload: {id}
    }
}