import React from "react";
import { useNavigate } from "react-router-dom";
const Mealitem = ({ val }) => {
    const navigate=useNavigate()
  console.log(val);
  return (
    <>
      { !val ? (
        <h1>not found</h1>
      ) :
      
        val.map((item)=>(
            (
                <div className="card" key={item.idMeal} onClick={()=>navigate(`/:${item.idMeal}`)}>
                <img src={item.strMealThumb} alt="img" className="foodimg" />
                <h1>{item.strMeal}</h1>
              </div>
              )
        ))
      }
    </>
  );
};

export default Mealitem;
