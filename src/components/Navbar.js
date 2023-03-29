 import{Link} from "react-router-dom"
 import React from "react";


 const Navbar=props=>(

     <nav className="nav">
         <Link to="/" className="bold site-title"><h1>Weather</h1></Link>
         <form onSubmit={props.getWeather} >              
             <input className="IT" name="Longitud" placeholder="Longitud" autoFocus/>
             <input className="IT" name="Latitud" placeholder="Latitud" autoFocus/>
             <button className="BT"type="submit" >INGRESAR VALORES</button>
         </form>
     </nav>
 )
 export default Navbar;