import { useLocation} from "react-router-dom";

//Recibo state con los dos de la api, y uso la funcion useLocation para recuperarlos, imprimo.
 const WeatherInfo = props =>{
     const location = useLocation();
     const state= location.state;
     console.log(state)
     
     return(
        //Estructura principal 
        <div className="container">
        <div className="top">
          <div className="location">
            <p>{state.city}</p>
          </div>
          <div className="temp">
            <h1>{state.temperature}°F</h1>
          </div>
          <div className="description">
            <p>{state.description}</p>
          </div>
        </div>


          <div className="bottom">
            <div className="humidity">
              <p className='bold'>{state.humidity}%</p> 
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className='bold'>{state.wind_speed} MPH</p>
              <p>Wind Speed</p>
            </div>
          </div>
        
      </div>
     )
    
 }
 export default WeatherInfo;
