import React, {Component} from 'react';
import Localizador from './localizador';
import DatosTiempo from './datosTiempo';
import serviceApi from '../../services/serviceApi';

const location="Valencia, es";

class LocalizadorTiempo extends Component
{

    constructor (...props){
        super(...props);
        this.state ={datos:{}}
    }

   async componentDidMount(){
        let data =  await serviceApi.getData();
        this.setState({datos:data});
    }

    render(){
        const {datos} = this.state;
        return(
            <div>
                <h2>Es el componente Localizador Tiempo</h2>
                <Localizador ciudad={location}/>
                <DatosTiempo datos= {datos} />
            </div>
        )
    }
}

export default LocalizadorTiempo;