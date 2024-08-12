import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const RecipeDetail = () => {

    const {recipeid} = useParams();
    const id=recipeid.slice(1)
    // console.log(id)
    const [item,setitem]=useState('')
    const navigate=useNavigate()
    const youtubeid = () => {
        if (item && item.strYoutube) {
            const youtubeurl = item.strYoutube;
            const getonlyid = youtubeurl.split("=");
            return getonlyid[1];
        }
        return null; 
    };
    const yid=youtubeid();
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res)=>res.json())
        .then((data)=>setitem(data.meals[0]))
    },[])
  return (
    <div className='container-recipedetail'>
        <div className='head-deatail overlay'>
            <img className='img-detail' src={item.strMealThumb}></img>
            <h1>Category :{item.strCategory}</h1>
            <h3>{item.strMeal}</h3>
            <div className='btn' >
                <button onClick={()=>navigate('/')}>Back</button>
            </div>
        </div>   
        <div className="ingredient">
            <h1>Ingredient</h1>
            <div className='unique'>
                <h2>{item.strIngredient1}:{item.strMeasure1}</h2>
                <h2>{item.strIngredient2}:{item.strMeasure2}</h2>
                <h2>{item.strIngredient3}:{item.strMeasure3}</h2>
                <h2>{item.strIngredient5}:{item.strMeasure4}</h2>
                <h2>{item.strIngredient5}:{item.strMeasure5}</h2>
                <h2>{item.strIngredient6}:{item.strMeasure6}</h2>
                <h2>{item.strIngredient7}:{item.strMeasure7}</h2>
                <h2>{item.strIngredient8}:{item.strMeasure8}</h2>
            </div>
            </div>
            <div className='instruction'>
                <h1>Instructions</h1>
                <p>{item.strInstructions}</p>
            </div>
            <div className='Youtubevdo'>
                <iframe allow width='90%' height='400px' src={`https://www.youtube.com/embed/${yid}`}title="Description of the iframe content">
                </iframe>
            </div>
            
    </div>

  )
}

export default RecipeDetail
