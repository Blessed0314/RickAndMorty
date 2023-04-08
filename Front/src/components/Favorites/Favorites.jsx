import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
import Card from "../Card/Card";
import { useEffect } from "react";
import { getFavorites } from "../../redux/actions";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state=>state.myFavorites);
    
    useEffect(()=>{
      dispatch(getFavorites());
    },[]);

    return(
        <div className={style.container}>
           {
              favorites.map(({id, name, species, gender, image})=>{
                return (
                  <Card
                    key={id}
                    id = {id}
                    name = {name}
                    species = {species}
                    gender = {gender}
                    image = {image}
                  />);
            })}
        </div>
    )
};

export default Favorites;