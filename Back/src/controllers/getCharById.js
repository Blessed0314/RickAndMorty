
const axios = require("axios");
const {KEY_API, URL_API} = process.env;

const getCharByID = (req,res) => {
    const { id } = req.params;

    try {
          axios
            .get(`${URL_API}/character/${id}?key=${KEY_API}`)
            .then(response => {
              const {id,name,species,gender,image} = response.data;
              res.status(200).json({id,name,species,gender,image});
            });
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};

module.exports = getCharByID;
//const URL_API = "https://be-a-rym.up.railway.app/api";
//const KEY_API = "5c6d6737bae1.431a798bb8ab6ea058b3";