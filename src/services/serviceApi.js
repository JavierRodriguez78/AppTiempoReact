const location = "Valencia, es"
const appID = "fa664417b1651ea73093ed81601bce69";
const api_weather = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appID}`;
class serviceApi {

    static async getData (){
        let result = await fetch(api_weather)
            .then(data=>data.json())
            .then(weather_data=>weather_data);

            console.log("Datos servicio ->"+ JSON.stringify(result));
        return result;
    }
}

export default serviceApi;