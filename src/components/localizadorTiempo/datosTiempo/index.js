import React, {Component} from 'react';
import IconoTiempo from './iconoTiempo';
import DatosTemperatura from './datosTemperatura';
import Conversor from 'convert-units';

class DatosTiempo extends Component{

    constructor (props){
        super(props)
    }

    calcularTemperatura(temperatura){
        return Conversor(temperatura).from('K').to('C');
    }
    calcularViento (viento){
        return Conversor(viento).from('m/s').to('km/h');
    }


    render(){
        const {datos} = this.props;
        const TempBase = 24;
        return(
            <div id="datosTiempo">
                <h1>DATOS TIEMPO</h1>
                <IconoTiempo icono={datos}/>
                <DatosTemperatura temperatura = {datos.main ? this.calcularTemperatura(datos.main.temp): TempBase}
                viento = {datos.wind ? this.calcularViento(datos.wind.speed) : 5 }
                humedad={datos.main ? datos.main.humidity : 20} />
            </div>
        )
    }


}

export default DatosTiempo;