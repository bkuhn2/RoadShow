import React, { SyntheticEvent, useState } from 'react'
import './HomePage.css'

const HomePage = () => {

  const [destination, setDestination] = useState(''); // formatting? Error handling?
  const [startDate, setStartDate] = useState(''); //TBD data type: need to determine whether numbers or strings needed + how to format properly

  const handleDestinationInput = (event: any) => { //update 'any' type here, find proper type
    const formattedDestination:string = event.target.value.replace(/[\/\\#,%?!@$%^*()&<>^{}]/g, '');
    setDestination(formattedDestination)
  }

  const handleDateInput = (event: any) => {
    //preventative error handling for date: only in the future, only 4 digits
    //formatting: the input gives a single string of year-month-day - how format?
    setStartDate(event.target.value)
  }

  return (
    <main className='home-page'>
      <form className='home-form'>
        <div className='input-section'>
          <input 
            type='text'
            name='destination name'
            placeholder='Where do you want to go?'
            value={destination}
            onChange={event => handleDestinationInput(event)}
          />
          <input
            type='date'
            name='trip start date'
            value={startDate}
            onChange={event => handleDateInput(event)}
          />
        </div>
        <button
          type='button'
          className='home-page-generate-button'
        >
          get this show on the road
        </button>
      </form>
    </main>
  )
}

export default HomePage
