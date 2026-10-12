import TaskList from "./TaskList";
import  {useContext} from "react"
import Listcontext from "./TaskContext";



function Header() {
  
  return (
    <div className="h-25 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold text-[#F5E8DC]">
          Codesistent
        </h1>
      </div>
      <div>
        <p className="text-[#CBB39C]">Small Steps Big Progress</p>
      </div>
    </div>
  );
}

function TodolistInput() {
  return (
    <div className="bg-gradient-to-br from-[#3B261A]/90 to-[#21140D]/90 w-full h-40 rounded-xl border border-[#CD9D74]/20 p-4">
      <h1 className="text-[#F5E8DC] font-semibold">
        Todays Task List
      </h1>
      <p className="text-[#CBB39C]">
        Stay Consistent. Build the life you want
      </p>

      <div className="bg-gradient-to-r from-[#69432B]/50 to-[#382318]/60 h-14 rounded-lg flex items-center pl-4 border border-[#CD9D74]/20 shadow-inner">
        <div>
          <input
            className="w-150 h-9 bg-transparent text-[#F5E8DC] placeholder:text-[#B49A83] outline-none"
            type="text"
            placeholder="Add New Task"
          />
        </div>

        <div>
          <button className="bg-gradient-to-br from-[#D5A77F] to-[#A8754F] text-[#21140D] font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition h-14">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

function Todolistform() {
      const {list,taskList} = useContext(Listcontext);
  return (
    <div className="bg-gradient-to-br from-[#382318] to-[#1A100B] h-140 rounded-xl flex overflow-hidden border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.06),0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="bg-gradient-to-br from-[#302016]/90 to-[#21140D]/90 w-192 p-4 ">
        <TodolistInput />
         <TaskList 
         list = {list}
         taskList = {taskList}
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
  return (
    <div className="w-full h-full  p-6">
      <Header />
      <Todolistform />


      <div className="bg-gradient-to-r from-[#2D1B12]/80 to-[#170E09]/80 rounded-xl"></div>
    </div>
  );
}
