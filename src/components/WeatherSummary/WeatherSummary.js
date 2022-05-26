import styles from './WeatherSummary.module.scss';

const WeatherSummary = (props, {action}) => {
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt={props.weather.description}
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${props.weather.icon}.png`} />
      <div className={styles.weatherInfo}>
        <h2>{props.weather.cityName}</h2>
        <p>Temperatura: <strong>{props.weather.temp}</strong></p>
        <p>Odczuwalna: <strong>{props.weather.feel}</strong></p>
      </div>
    </section>
  );
};

export default WeatherSummary;