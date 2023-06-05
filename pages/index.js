import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import getWeather from '../lib/getWeather';
import axios from 'axios';

const inter = Inter({ subsets: ['latin'] })

const getServerSideProps = (location) => {
  const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/current',
    params: {city: `${location}`},
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};
const data = axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
        const {data} = response;
        return data
    })
    .catch(function (error) {
        console.error(error);
    });
  return {
    props: {
      details: data
    }
  }
}

export default function Home(props) {
  
  const details = props.details
  const [ location, setLocation ] = useState('');

  return (
    <main className={`flex min-h-screen bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 justify-center pt-12 ${inter.className}`}>
      <div className='w-[80%]'>
        <h1 className='font-bold text-2xl mb-6'>Weather App</h1>
        <div className='w-full flex justify-between'>
          <div className='w-1/3 flex flex-col space-y-6'>
            <div className='flex items-center space-x-3'>
              <input className=' bg-inherit border rounded-full focus:outline-none p-4 w-full' placeholder='City...' onChange={(e) => setLocation(e.target.value)} />
              <button className='p-4 rounded-full bg-red-400' >Search</button>
            </div>
            <h2 className='text-7xl font-thin'>{details.temp}<span>0C</span> </h2>
            <p>DATE</p>
          </div>
        </div>
      </div>
    </main>
  )
}
