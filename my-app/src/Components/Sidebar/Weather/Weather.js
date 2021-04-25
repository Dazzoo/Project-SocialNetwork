import React from 'react'

const Weather = (props) => {
    debugger
    return (
            <div>
                {props.weather.dataseries.map(w => <div> {/* ТУТ ДАННЫЕ О ПОГОДЕ */} </div>)}
            </div>
            )
}

export default Weather