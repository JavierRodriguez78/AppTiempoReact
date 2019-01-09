import React, {Component} from "react";

class DatosTemperatura extends Component{

    constructor(...props){
        super(...props);
    }

    render(){
        const {temperatura} = this.props;
        console.log("Temperatura -> "+ JSON.stringify(temperatura));
        return (
            <div>
                <h1>Datos Temperatura</h1>
            </div>
        )
    }
}

export default DatosTemperatura;