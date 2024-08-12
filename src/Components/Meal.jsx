import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem'
import Recipefirstname from './Recipefirstname'

const Meal = () => {
    const [search,setsearch]=useState('')
    const [url,seturl]=useState('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    const [item,setitem]=useState('')

    useEffect(()=>{
        fetch(url)
        .then((val)=>(val.json()))
        .then((data)=>setitem(data.meals))
        
        
        
    },[url])
    const handlesearch=()=>{
        console.log(search)
         seturl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const handleletterchange=(alpha)=>{
        console.log(alpha)
        seturl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }
  return (
    <>
      <div className='main-container'>
        <div className='heading'>Seach Your Food Recipe </div>
        <h1 className='h1'>Eat well, live well</h1>
        <div className='search'>
            <input 
            placeholder='search'
            type='search'
            onChange={(e)=>setsearch(e.target.value)}
            onKeyPress={handlesearch}
            />
        </div>
        <br></br>
        <div className='card-container'>
            <Mealitem val={item}/>
        </div>
        <div className='alaphasquare'>
            <Recipefirstname handleletterchange={(alpha)=>handleletterchange(alpha)}/>
        </div>
      </div>
    </>
  )
}

export default Meal
