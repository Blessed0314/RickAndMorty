import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {Route, Routes} from "react-router-dom";
import style from "./App.module.css";
import About from './components/About/About.jsx';
import Error from './components/Error/Error.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';


function App () {
  
// Hooks
  const [characters,setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    !access && navigate("/");
  },[access]);

// Credenciales temporales
const username = "christ.solitario@mail.com";
const password = "1password"

// Eventos

  const onSearch = (id) =>
  {
    const URL_API = "https://be-a-rym.up.railway.app/api";
    const KEY_API = "5c6d6737bae1.431a798bb8ab6ea058b3";

    if (characters.find((char) => char.id === id))
    {
      return alert("Personaje repetido");
    }

    fetch(`${URL_API}/character/${id}?key=${KEY_API}`)
    .then(response=>response.json())
    .then((data) => {
      if(data.name)
      {
        setCharacters((oldChars)=>[...oldChars,data]);
      }
      else alert("Algo salió mal");
    });
  };

  const onClose = (id) => 
  {
    setCharacters(characters.filter((char) => char.id !== id));
  };

const login = (userData) => {
  if(userData.username=== username && userData.password === password){
    setAccess(true);
    navigate("/home");
  }
  else alert("Credenciales incorrectas");
};

//Renderizado
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div className={style.nav}>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      </div>
      <div>
        <Routes>
          <Route path ="/" element = {<Form login={login}/>}/>
          <Route path='*' element={<Error/>} />
          <Route path ="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path ="/about" element = {<About/>}/>
          <Route path ="/favorites" element = {<Favorites/>}/>
          <Route path ="/detail/:detailId" element = {<Detail/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App
