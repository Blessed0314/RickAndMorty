const axios = require("axios");
const {KEY_API, URL_API} = process.env;

const getCharDetail = (req,res) => {
    const { id } = req.params;

    try {
          axios
            .get(`${URL_API}/character/${id}?key=${KEY_API}`)
            .then(response => {
              const {id,name,species,gender,origin,image} = response.data;
              res.status(200).json({id,name,species,gender,origin,image});
            });
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};
module.exports = getCharDetail;