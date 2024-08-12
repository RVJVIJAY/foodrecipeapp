import React from 'react'

const Recipefirstname = ({handleletterchange}) => {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];
   
      let num=0;
  return (
    <>
      <div className="alphabet">
        { alphabet.map((item)=>(
            <div className='smallindexsquare' key={num++} onClick={()=>handleletterchange(item)} >{item}</div>
        ))}
      </div>
    </>
  )
}

export default Recipefirstname
