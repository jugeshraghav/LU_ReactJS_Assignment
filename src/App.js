import React from "react";
import Button from "./Button";
import "./style.css";

function App(){
    return(
        <div>
        
        <h1>Hey there!</h1>
      <p>Hope you are staying indoors and taking all the precautions.</p>
        <Button ButtonText="Apple"/>
        <Button ButtonText="Mango"/>
        <Button ButtonText="Orange"/>
      
        </div>
    )
}


export default App;