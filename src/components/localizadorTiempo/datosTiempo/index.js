import React, {Component} from 'react';
import IconoTiempo from './iconoTiempo';
import DatosTemperatura from './datosTemperatura';

class DatosTiempo extends Component{

    constructor (...props){
        super(...props)
    }

    render(){
        const {datos} = this.props;
        return(
            <div id="datosTiempo">
                <h1>DATOS TIEMPO</h1>
                <IconoTiempo icono={datos}/>
                <DatosTiempo temperatura = {datos} />
            </div>
        )
    }


}

export default DatosTiempo;