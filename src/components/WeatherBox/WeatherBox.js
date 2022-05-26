import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox'; 
import { useState } from 'react';
// import { useCallback } from 'react/cjs/react.production.min';

// klusz do API
const APIKey = '55a47f99349277580ba5540d8deea90b'

const prepareCityName = (cityName) => {
  if (cityName.toLowerCase().includes('voivodeship')) {
    return cityName
      .split(' ')
      .filter((name) => name.toLowerCase() !== 'voivodeship')
      .join(' ')
  }
  return cityName
}

const WeatherBox = props => {

  const [weather, setWeather] = useState('');
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false)

  const handleCityChange = cityName => {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&units=metric`;
    setPending(true)
    fetch(API)
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          setError(true)
        }
      })
      .then(data => {
        const weatherData = {
          cityName: prepareCityName(data.name),
          temp: data.main.temp,
          feel: data.main.feels_like,
          icon: data.weather[0].icon,
          description: data.weather[0].description,
          err: false
         };
         console.log(weatherData);
          setWeather(weatherData)
      })
      .finally(() => {
        setPending(false)
      });
  }
  
  return (
    <section>
      <PickCity action={handleCityChange} />
      {(weather && !error) && <WeatherSummary weather={weather} {...weather}/>}
      { pending && <Loader />}
      { error && <ErrorBox />}
    </section>
  )
};

export default WeatherBox;