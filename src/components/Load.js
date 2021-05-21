import React from "react";
import "./css/Load.css";
import {useHistory} from "react-router-dom";


export default function Load() {

  let history = useHistory();

  function handleClick(){
    history.push("/");
  }



  return (
    <div className="Loaded-Patches">
      <h2>LOAD PATCH</h2>
      <div className="List-Container">

      <ul className="Loaded-List">
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
        <Patch /> 
      </ul>
      </div>

        <button className="LoadButton" type="button" onClick={handleClick}>LOAD HERE</button>
    </div>
  );


}

function Patch(){
  return (
    <li className="Loaded-List-Item"> Eerie Pad</li>

  )
}