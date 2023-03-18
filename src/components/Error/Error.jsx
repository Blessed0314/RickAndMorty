import React from "react";
class Error extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
        <>
           <h1 style={{ color: "green", fontSize: 100, textAlign: "center" }}>404</h1>
           <h3 style={{textAlign: "center"}}>Page Not Found</h3>
        </>
    );
  }
}

export default Error;