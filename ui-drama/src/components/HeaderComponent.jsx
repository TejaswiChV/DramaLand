import React from 'react'
import {useNavigate , NavLink} from "react-router-dom"


const HeaderComponent = () => {
  const navigator = useNavigate()
  return (
<>
<nav className="navbar navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/" style={{marginLeft:"30px"}}>DramaLand</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  
  </button>
</nav>
</>
  )
}

export default HeaderComponent