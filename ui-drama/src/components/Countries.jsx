import React, { useState } from 'react'
import {useNavigate , useParams} from "react-router-dom"

const Countries = () => {
    const [ selectedOption, setSelectedOption ] = useState("");
    const navigator = useNavigate()
    function naviagteToDramas(){
        navigator("/dramas")
    }

  return (
    <div className="container bg-image">
      <div className="dropdown" style={{"paddingTop":"40px","textAlign":"center"}}>
        <button className="btn btn-secondary dropdown-toggle w-75" type="button" id="dropdownMenuButton"  aria-haspopup="true" data-bs-toggle="dropdown"  aria-expanded="false">
        {selectedOption ? selectedOption : 'Country'}
        </button>
        <div className="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" style={{"textAlign":"center"}} href="#" onClick={() => {setSelectedOption('China');naviagteToDramas()}}>China</a>
          <a className="dropdown-item" style={{"textAlign":"center"}} href="#" onClick={() => {setSelectedOption('Korea');naviagteToDramas()}}>Korea</a>
          <a className="dropdown-item" style={{"textAlign":"center"}} href="#" onClick={() => {setSelectedOption('India');naviagteToDramas()}}>India</a>
        </div>
      </div>
    </div>
 
  )
}

export default Countries