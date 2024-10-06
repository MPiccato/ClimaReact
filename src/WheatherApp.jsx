import './styles/WheaterApp.css'

export const WheatherApp = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Hola mundo')
    }
    return (
        <div className='container'>
            <h1>Aplicación del Clima</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='Ingrese ciudad' />
                <button type='submit'>Buscar</button>
            </form>

        </div>
    )
}
