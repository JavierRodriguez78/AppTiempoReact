import React , { Component } from 'react';
import WeatherIcons from 'react-weathericons';

const EstadoTiempo = estadoTiempo=>{
    switch(estadoTiempo){
        case "nublado":
        return "cloud";
        case "soleado":
        return "sun";
        case "lluvioso":
        return "rain"
        default:
        return "day-sunny"
    }
}



class IconoTiempo extends Component {
    constructor( props){
        super(props.icono);
       
    }

   

   
    render(){
       
        let {icono}  = this.props;
        let estado = "nublado";
        return(
            <div><h1>Icono</h1> 
             <WeatherIcons name ={EstadoTiempo(estado)} size="2x"></WeatherIcons>
             </div>
        )
    }
}

export default IconoTiempo;