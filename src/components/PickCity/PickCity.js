import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';
import { useState } from 'react';

const PickCity = ({action}) => {

  const [cityName, setCityName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    action (cityName);
    setCityName('');
  };

  return (
    <form className={styles.pickCityForm} onSubmit={handleSubmit}> 
      <label>
        <TextInput placeholder="Enter city name...." value={cityName} onChange={e => setCityName(e.target.value)} />
      </label>
      <Button>Search</Button>
    </form>
  );
};

export default PickCity;