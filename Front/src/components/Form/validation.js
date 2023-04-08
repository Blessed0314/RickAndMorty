const validation = (userData,errors,setErrors) =>{
    //Validación del Username
    if(!userData.username) setErrors({...errors, username: "Por favor completa este campo"});
    else if (userData.username.length > 35) setErrors({...errors, username: "No se puede superar los 35 characteres"});
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) setErrors({...errors, username: "Email inválido"});
    else setErrors({...errors, username: ""});
    
    //Validacion de Password
    if(userData.password.length<6 || userData.pasword.lenght>10) setErrors({...errors, username: "Longitud de password inválida"});
    else if (!/\d/.test(userData.password)) setErrors({...errors, username: "Debe contener al menos un número"});
    else setErrors({...errors, username: ""});
    

};

export default validation;