
// status
// loading - loading component 
// error - error component 
// ready - header component 
// active - quizmain,question,nextbutton
// finished - endquiz



import { useEffect, useReducer } from 'react'
import './App.css'
import Header from './components/Header'
import Loading from './components/Loading'
import Error from './components/Error'
import Question from './components/Question'
import QuizMain from './components/QuizMain'
import NextButton from './components/NextButton'


const initialState = {
  quizQuestion:[],
  status:"loading",
  index:0,
  answer:null,
  points:0
}

function reducer(state,action){
  switch(action.type){
    case'fetch_success':
    return {
      ...state,
      quizQuestion:action.payload,
      status:'ready'

    }
    case 'fetch_error':
      return{
        ...state,
        status:"error"
      }

    case 'start':
      return {
        ...state,
        status:"active"
      }
    case 'newAnswer':
      // accesing current questions 
      const question = state.quizQuestion.at(state.index)
      return{
        ...state,
        answer:action.payload,
        points: action.payload === question.correctAnswer?state.points+question.points:state.points
      } 

    case 'NextQuestion':
      return{
        ...state,
        index:state.index+1,
        answer: null
      }
    default:
      return state;
  }
}

function App() {
  const[state,dispatch] = useReducer(reducer,initialState)
  const{quizQuestion,status,index,answer,points} = state;
  console.log(points);
  console.log(answer);
  const numberOfQuestion = quizQuestion.length;
  const totalPoints = quizQuestion.reduce((prev,curr)=>prev+curr.points,0)
  console.log(totalPoints);

  useEffect(function(){
    fetch("http://localhost:8000/quizQuestion")
    .then((res)=>res.json())
    .then((data)=>{
      dispatch({type:'fetch_success',payload:data})
      console.log(data)
    }
  )
    .catch((err)=>dispatch({type:'fetch_error'}))

  },[])
 

  return (
  
      <>
      {status === "loading" && <Loading/>}
      {status === "error" && <Error/>}
      {status === "ready" && <Header numberOfQuestion = {numberOfQuestion}
      dispatch = {dispatch}
      />}
      {status === "active" &&
      <>

      <QuizMain numberOfQuestion={numberOfQuestion} index = {index} points = {points} totalPoints={totalPoints}/>
      <Question quizQuestion = {quizQuestion[index]} dispatch = {dispatch} answer = {answer}/>
      <NextButton dispatch = {dispatch} answer = {answer}/>
      
      </>
      }
      </>
  )
}

export default App
