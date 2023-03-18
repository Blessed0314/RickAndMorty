import { useSelector } from "react-redux";
import style from "./Favorites.module.css";
import Card from "../Card/Card";

const Favorites = () => {
    const favorites = useSelector(state=>state.myFavorites);

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