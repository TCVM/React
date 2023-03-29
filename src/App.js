import sunsetBg from "./assets/sunset.jpg";
 import hotBg from "./assets/hot.jpg";
 import coldBg from "./assets/cold.jpg";
 import Home from "./components/Home"
 import Navbar from './components/Navbar';
 import WeatherInfo from './components/WeatherInfo';
 import { Route,Routes, Link } from 'react-router-dom';
 import { Component } from 'react';
 let aux=''
 class App extends Component{
   state={
     temperature:'',
     description:'',
     humidity:'',
     wind_speed:'',
     city:'',
     country:'',
     error:null
   }
   //Guardo valores Longitud y Latitud, los envio y espero respuesta, guardo la respuesta y la reenvio WeatherInfo.js a travez un "Link" de React Router
   getWeather =async e => {
     e.preventDefault();
     const { Longitud,Latitud }= e.target.elements;
     const LongitudValue= Longitud.value;
     const LatitudValue= Latitud.value;

     const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${LatitudValue}&lon=${LongitudValue}&appid=f5b1e324f59b80762cf9ecdf8a3c68b5&lang=es&units=metric`
     const response = await fetch(urlWeather);
     const data = await response.json();
     console.log(data);
     this.setState({
       temperature: data.main.temp,
       description: data.weather[0].description,
       humidity:data.main.humidity,
       wind_speed: data.wind.speed,
       city:data.name,
       country: data.sys.country,
       error:null
     })

    
     //cambio de fondos de pantalla segun el nivel de la temperatura
     if(this.state.temperature>30) aux=hotBg
     else 
        if(this.state.temperature<30 && this.state.temperature>10) aux=sunsetBg 
        else
            aux=coldBg

   }
  //Recibo dos valores(Longitud, Latitud) necesarios para ingresar en la api//
   render() {
     return (  
       <div className="app"  style={{ backgroundImage: `url(${aux})` }}> 
         <Navbar getWeather={this.getWeather}/>
         { <Link to="/WeatherInfo" state={this.state} className="BTLINK">BUSCAR</Link> }
         <div className="Container">
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/WeatherInfo' element={<WeatherInfo/>}/>
           </Routes>
         </div>
       </div>
     );
   }
 }

 export default App;
