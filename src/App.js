import React, { useState, useEffect } from 'react';
import { Head, Cards, Chart, CountryPicker } from './components';
import { fetchData} from './api/index';

import styles from './App.module.css';

const App = () => {

    const [data, setData] = useState({});
    const [country, setCountry] = useState("");

    useEffect(() => {
        const f = async () => {
            const fetchData = await fetchData();
            setData(fetchData)
        };
        f();
    }, []);

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        setCountry(country);
        setData(fetchedData);
    };

    return(
        <div className={styles.container}>
          <Head />
          <Cards data={data} />
          <CountryPicker handleCountryChange={handleCountryChange} />
          <Chart data={data} country={country} />
      </div>
    )
}

export default App;
