
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
import Endquiz from './components/Endquiz'

const SEC_PER_QUESTION = 20


const initialState = {
  quizQuestion:[],
  status:"loading",
  index:0,
  answer:null,
  points:0,
  highScore:0,
  remainingTime:null,
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
        status:"active",
        remainingTime:state.quizQuestion.length*SEC_PER_QUESTION,
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

      case 'finish':
        return{
          ...state,
          status:'finished',
          highScore:state.points>state.highScore?state.points:state.highScore
        }

      case 'restart':
        return{
          ...initialState,
          quizQuestion:state.quizQuestion,
          status:'ready',
          highScore: state.highScore,
          
        }
      
      case 'timer':
        return{
          ...state,
          remainingTime:state.remainingTime-1,
          status:state.remainingTime ===0?'finished':state.status,
          
        }

    
    default:
      return state;
  }
}

function App() {
  const[state,dispatch] = useReducer(reducer,initialState)
  const{quizQuestion,status,index,answer,points,highScore,remainingTime} = state;
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

      <QuizMain numberOfQuestion={numberOfQuestion} index = {index} points = {points} totalPoints={totalPoints} answer = {answer}   remainingTime = {remainingTime} dispatch = {dispatch}/>
      <Question quizQuestion = {quizQuestion[index]} dispatch = {dispatch} answer = {answer}/>
      <NextButton dispatch = {dispatch} answer = {answer} index = {index} numberOfQuestion = {numberOfQuestion}/>
      
      </>
      }

      {status === 'finished' && <Endquiz points = {points} totalPoints ={totalPoints } highScore = {highScore} dispatch = {dispatch}/>}
      </>
  )
}

export default App
