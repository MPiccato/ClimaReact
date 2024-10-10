import { useState } from 'react'
import './styles/WheaterApp.css'

export const WheatherApp = () => {

    const urlBase = `https://api.openweathermap.org/data/2.5/weather?`
    const apiKey = '03a6c4949511ea2cd914f615bd8a1e4c'

    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState(null);



    const fetchWeatherData = async () => {

        try {
            const response = await fetch(`${urlBase}q=${city}&appid=${apiKey}`)
            const data = await response.json()

            setWeatherData(data)
        } catch (error) {
            console.error(error)

        }


    }

    const handleCityChange = (e) => {
        setCity(e.target.value)
    }

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
                    <h2>{weatherData.name}</h2>
                </div>
            )}

        </div>
    )
}
