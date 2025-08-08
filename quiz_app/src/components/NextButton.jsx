import React from 'react'

function NextButton({dispatch,answer}) {
  if(answer === null) return null;

  return (
    <>
    <div>
        <button onClick={()=>dispatch({type:"NextQuestion"})}>Next</button>
        {/* <button>Finish</button> */}
    </div>
    </>
  )
}

export default NextButton