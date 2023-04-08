import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";

export const getFavorites = () => {
    return async function (dispatch){
        const URL_BASE = "http://localhost:3001";
        const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
        dispatch({type:GET_FAVORITES, payload: response.data});
    }
};

export const removeFavorite = (id) =>{
    return {type: REMOVE_FAVORITE, payload: id};
};