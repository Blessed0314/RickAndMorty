import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"

const Detail = () => {
    const {detailId} = useParams();
    
    const [character,setCharacter] = useState({});

    useEffect(() => {
        const URL_BASE = "http://localhost:3001";
        axios(`${URL_BASE}/detail/${detailId}`).then(response => 
            setCharacter(response.data)
        );
    },[]);
    
    return (
        <div>
            {
              character.name?(
                <>
                  <h2>{character.name}</h2>
                  <p>Status: {character.status}</p>
                  <p>Specie: {character.species}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Origin: {character.origin?.name}</p>
                  <img src={character.image} alt="img"/>
                </>
              ):(
                  <div className={style.loaderSection} >
                  <span className={style.loader}></span>
                  </div>
              )
            }
            
        </div>
    );
};

export default Detail;