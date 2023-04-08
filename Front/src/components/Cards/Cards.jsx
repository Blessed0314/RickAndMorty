import Card from '../Card/Card.jsx';
import style from "./Cards.module.css";
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions.js';
import { useEffect } from 'react';

export default function Cards({characters, onClose}) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getFavorites());
  },[]);
   return(
     <div className={style.container}>
      {characters.map(({id, name, species, gender, image})=>{
         return(
         <Card 
           id = {id}
           name = {name}
           species = {species}
           gender = {gender}
           image = {image}
           onClose = {onClose}
         />
         );
     })}
     </div>
   );
 
}
