import { useState } from 'react'
import TaskForm from './assets/Components/TaskForm'
import Listcontext from './assets/Components/TaskContext'

function App() {

  const [list , taskList] = useState([
    {id : 1 ,taskname : "Coding", desciption : "new list hehe" , status : false},
    {id : 2 ,taskname : "Hehe", desciption : "new list hehe" , status : false},
    {id : 3 ,taskname : "mwapsi", desciption : "new list hehe" , status : false},
  
 
 

  ])

  return (
   <div className='bg-[radial-gradient(ellipse_at_15%_0%,rgba(153,99,62,0.25),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(111,65,38,0.22),transparent_45%),linear-gradient(135deg,#2D1B12_0%,#170E09_55%,#24160F_100%)] h-20 w-52 flex pl-40 pr-40 h-screen w-screen'>
   <Listcontext.Provider value = {{ list , taskList }}>
     <TaskForm/>
   </Listcontext.Provider>
   </div>
     
  )
}

export default App
