import TaskList from "./TaskList";
import  {useContext, useEffect, useState} from "react"
import Listcontext from "./TaskContext";




   


function Header({weather,loading}) {
  
  return (
   
    <div className="h-20 flex  justify-start">
      <div className=" w-60">
        <div >
        <h1 className="text-2xl font-bold text-[#F5E8DC]">
          Codesistent
        </h1>
      </div>
      <div>
        <p className="text-[#CBB39C]">Small Steps Big Progress</p>
      </div>
      </div>
      <div className=" h-20 w-150 flex justify-center items-center">
        <div className=" w-70 ">
           <h1 className="text-white font-bold text-lg">{loading ? "Getting Date and Time..." : weather}</h1>
        </div>
       
      </div>
   
      
    </div>
  );
}

function TodolistInput({newlist,setnewList,addnewList}) {

  function handleSubmit(e){
    e.preventDefault();
        if (!newlist.trim()) return;

        addnewList();
        setnewList("")

  }
  return (
    <form  onSubmit={handleSubmit} className="bg-gradient-to-br from-[#3B261A]/90 to-[#21140D]/90 w-full h-40 rounded-xl border border-[#CD9D74]/20 p-4">
      <h1 className="text-[#F5E8DC] font-semibold">
        Todays Task List
      </h1>
      <p className="text-[#CBB39C]">
        Stay Consistent. Build the life you want
      </p>

      <div className="bg-gradient-to-r from-[#69432B]/50 to-[#382318]/60 h-14 rounded-lg flex items-center pl-4 border border-[#CD9D74]/20 shadow-inner">
        <div>
          <input
          value={newlist}
          onChange={(e)=> setnewList(e.target.value)}
            className="w-150 h-9 bg-transparent text-[#F5E8DC] placeholder:text-[#B49A83] outline-none"
            type="text"
            placeholder="Add New Task"
          />
        </div>

        <div>
          <button 
          type="submit"
          className="bg-gradient-to-br from-[#D5A77F] to-[#A8754F] text-[#21140D] font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition h-14">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

function Todolistform() {
      const {list,taskList,newlist,setnewList,addnewList,deleteList,setModal,ToggleFucntion} = useContext(Listcontext);

  return (
    <div className="bg-gradient-to-br from-[#382318] to-[#1A100B] h-140 rounded-xl flex overflow-hidden border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.06),0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="bg-gradient-to-br from-[#302016]/90 to-[#21140D]/90 w-192 p-4 ">
        <TodolistInput 
        newlist = {newlist}
        setnewList = {setnewList}
        addnewList = {addnewList}
        />
       
         <TaskList 
         list = {list}
         taskList = {taskList}
         deleteList= {deleteList}
         setModal = {setModal}
         ToggleFucntion={ToggleFucntion}
         

         />
      </div>

      <div className="bg-gradient-to-br from-[#291A11] to-[#1A100B] w-110 flex flex-col justify-around items-center ">
        <div className="bg-gradient-to-br from-[#69432B]/60 to-[#302016]/80 h-50 w-90 rounded-xl border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.08)]">
        </div>

        <div className="bg-gradient-to-br from-[#69432B]/60 to-[#302016]/80 h-70 w-90 rounded-xl border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.08)]"></div>
      </div>
    </div>
  );
}

export default function TaskForm() {
   const [weather , setWeather] = useState([])
     const [loading , setLoading] = useState(true)    
    useEffect(()=>{
      const fetchUser = async() => {
        try{
          const response = await fetch( "https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current=temperature_2m,wind_speed_10m&timezone=Asia%2FManila")
          const data = await response.json();
          
          setWeather(data.current.time)
          setLoading(false)
        }catch(error){
       
          setLoading(false)
        }
      }
          fetchUser()
    },[])

  
  return (
    <div className="w-full h-full  p-6">
      <Header 
      
      weather = {weather}
      loading={loading}
      />
      <Todolistform />


      <div className="bg-gradient-to-r from-[#2D1B12]/80 to-[#170E09]/80 rounded-xl"></div>
     
     
    </div>
  );
}
