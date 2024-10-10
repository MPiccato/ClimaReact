import { useState } from 'react'
import './styles/WheaterApp.css'

export const WheatherApp = () => {

    const urlBase = `https://api.openweathermap.org/data/2.5/weather?`
    const apiKey = '03a6c4949511ea2cd914f615bd8a1e4c'
    const diffKelvin = 273.15

    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);



    // Función que llama a la API
    const fetchWeatherData = async () => {

        try {
            const response = await fetch(`${urlBase}q=${city}&appid=${apiKey}&lang=es`)
            const data = await response.json()

            setWeatherData(data)
        } catch (error) {
            console.error(error)

        }


    }


    //    Toma el valor que tiene el input y se lo asigna a city
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }



    // Función del Formulario que ejecuta el llamado
    const handleSubmit = (e) => {
        e.preventDefault()

        fetchWeatherData()
    }

    return (
        <div className='container'>
            <h1>Aplicación del Clima</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder='Ingrese ciudad'
                    value={city}
                    onChange={handleCityChange} />
                <button type='submit'>Buscar</button>
            </form>

            {weatherData && (
                <div>
                    <h2>{weatherData.name}, {weatherData.sys.country}</h2>
                    <p>La temperatura actual es: {Math.floor(weatherData.main.temp - diffKelvin)} C </p>
                    <p>{weatherData.weather[0].description}</p>
                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt={weatherData.weather[0].description} />

                </div>
            )}

        </div>
    )
}
