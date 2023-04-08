import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFavorites, removeFavorite } from "../../redux/actions";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Card({id,name,species,gender,image,onClose,myFavorites,}) 
{
   const [isFav, setIsFav] = useState(false);
   const dispatch= useDispatch();
   
   const addFavorite = async (character) => {
      await axios.post("http://localhost:3001/rickandmorty/fav", character);
        //.then((res)=>console.log("ok"));
        alert("Agregado con éxito");
   };

   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con éxito");
   }
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({id,name,species,gender,image});
      }
   };
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.container}>
         <div className = {style.containerButtons}>
         {isFav ? (<button onClick={handleFavorite} className ={style.favoriteButton}>😍</button>) 
         : (<button onClick={handleFavorite}className ={style.favoriteButton}>😒</button>)}
         <button onClick={() =>onClose(id)} className = {style.closeButton}>X</button>
         </div>
         <Link to= {`/detail/${id}`}><h2 className = {style.name}>name: {name}</h2></Link>
         <img  src={image} alt="" /> 
         <h2 className = {style.species}>species: {species}</h2>
         <h2 className = {style.gender}>gender: {gender}</h2>
         
      </div>
   );
}
const mapDispatchToProps = (dispatch)  => {
   return{
      
      removeFavorite: (id) => {dispatch(removeFavorite(id));}
   }
};

const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
