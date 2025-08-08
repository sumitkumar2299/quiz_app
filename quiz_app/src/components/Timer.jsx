import React, { useEffect } from 'react'

function Timer({remainingTime,dispatch}) {
  const minutes = Math.floor(remainingTime/60);
  const seconds = Math.floor(remainingTime%60);
  useEffect(function(){
    const id = setInterval(() => {
      dispatch({type:'timer'})
    }, 1000);
    return () => clearInterval(id);

  },[dispatch])
  return (
    <>
    
    <span>Time: {minutes<10 && "0"}{minutes}:{seconds<10 && "0"}{seconds}</span>
    </>
  )
}

export default Timer