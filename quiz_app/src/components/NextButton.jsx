import React from 'react'

function NextButton({dispatch,answer,index,numberOfQuestion }) {
  if(answer === null) return null;
  if(index<numberOfQuestion-1)

  return (
    <>
    <div>
        <button onClick={()=>dispatch({type:"NextQuestion"})}>Next</button>
       
    </div>
    </>
  )
  if(index===numberOfQuestion-1)
    return(
  <div>
     <button onClick={()=>dispatch({type:"finish"})}>Finish</button>
  </div>
  
 
  )
}

export default NextButton