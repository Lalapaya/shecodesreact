import React from 'react';
import axios from 'axios';
import { Audio } from 'react-loader-spinner';

export default function Weather(props) {
    let url = `https://api.shecodes.io/weather/v1/current?query=london&key=t663e08fb6a44fe2c0f4395oce03be20&units=metric`;

    axios.get(url).then(showWeather);

    function showWeather(response) {
        console.log(response.data);
    }

    return (
        <Audio
            height="80"
            width="80"
            color="orange"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
        />
    );
}
