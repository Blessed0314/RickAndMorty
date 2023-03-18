import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card({id,name,species,gender,image,onClose, addFavorite, removeFavorite,myFavorites,}) 
{
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      } else {
         setIsFav(true);
         addFavorite({id,name,species,gender,image,onClose,addFavorite,removeFavorite});
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
      addFavorite: (character)=>{dispatch(addFavorite(character));},
      removeFavorite: (id) => {dispatch(removeFavorite(id));}
   }
};

const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
