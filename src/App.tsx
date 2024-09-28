import { useState } from 'react'


import './App.css'
import Block from './components/Block'

function App() {
  const [state,setState] = useState(Array(9).fill(null))
  const [current,setCurrent] = useState("X")
  console.log(state)
  const checkNull = (state:any[])=>{
      for(let i:number=0;i<state.length;i++){
        if(state[i]==null)
          return false
      }
      return true
  }
  const checkWin = (state:any[])=>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [1,4,7],
      [0,3,6],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i:number=0;i<win.length;i++){
      const [a,b,c] = win[i]
      if( state[a] != null && state[a]==state[b] && state[a]==state[c])
        return true
      
    }
    return false
  }
  const blockClick =async (index:number)=>{
    const stateCopy =Array.from(state)
    stateCopy[index] = current
    await setState(stateCopy)
    const win  = checkWin(stateCopy)
    const nulls = checkNull(stateCopy)
    if(nulls)
      alert("Match null")
    if(win){
      alert(`${current} win the game`)
    }
   setCurrent(current=="X"?"O":"X")
   
}
  return (
    <>
      <div className='board'>
          <div className="row">
            <Block oneClick={()=>blockClick(0)} value={state[0]}/>
            <Block oneClick={()=>blockClick(1)} value={state[1]}/>
            <Block oneClick={()=>blockClick(2)} value={state[2]}/>
          </div>
          <div className="row">
            <Block oneClick={()=>blockClick(3)} value={state[3]}/>
            <Block oneClick={()=>blockClick(4)} value={state[4]}/>
            <Block oneClick={()=>blockClick(5)} value={state[5]}/>
          </div>
          <div className="row">
            <Block oneClick={()=>blockClick(6)} value={state[6]}/>
            <Block oneClick={()=>blockClick(7)} value={state[7]}/>
            <Block oneClick={()=>blockClick(8)} value={state[8]}/>
          </div>
      </div>
    </>
  )
}

export default App
