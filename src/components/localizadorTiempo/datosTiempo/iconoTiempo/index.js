import React , { Component } from 'react';
import WeatherIcons from 'react-weathericons';

const EstadoTiempo = estadoTiempo=>{
     switch(estadoTiempo[0].main){
        case "Clouds":
        return "cloud";
        case "soleado":
        return "day-sunny";
        case "lluvioso":
        return "rain"
        default:
        return "day-sunny"
    }
}



class IconoTiempo extends Component {
    constructor( props){
        super(props);
       
    }

   

   
    render(){
       
        let {icono}  = this.props;
        let estado = "nublado";
        return(
            <div><h1>Icono</h1> 
             <WeatherIcons name ={icono.weather ? EstadoTiempo(icono.weather):estado } size="2x"></WeatherIcons>
             </div>
        )
    }
}

export default IconoTiempo;