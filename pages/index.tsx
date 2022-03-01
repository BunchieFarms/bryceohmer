import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/header';
import Homebody from '../components/homebody/homebody';

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>bryce ohmer</title>
        <meta name="description" content="this is MY website, get your own!" />
      </Head>
      
      <Header></Header>
      <Homebody currentWeather={props.currentWeather} weatherForecast={props.weatherForecast}></Homebody>
    </div>
  )
}

// export default Home;

export async function getStaticProps() {
  const currentWeatherRes = await fetch('http://localhost:3001/api/currentWeather');
  const currentWeather = await currentWeatherRes.json();

  const weatherForecastRes = await fetch('http://localhost:3001/api/weatherForecast');
  const weatherForecast = await weatherForecastRes.json();

  return {
    props: {
      currentWeather,
      weatherForecast
    }
  }
}