import TaskList from "./TaskList";
import { memo, useContext, useEffect, useState } from "react";
import Listcontext from "./TaskContext";

const Header = memo(function Header({ weather,loading}) {
  return (
    <div className="h-20 flex  justify-start">
      <div className=" w-60">
        <div>
          <h1 className="text-2xl font-bold text-[#F5E8DC]">Codesistent</h1>
        </div>
        <div>
          <p className="text-[#CBB39C]">Small Steps Big Progress</p>
        </div>
      </div>
      <div className=" h-20 w-150 flex justify-center items-center">
        <div className=" w-70 ">
          <h1 className="text-white font-bold text-lg">
            {loading ? "Getting Date and Time..." : weather}
          </h1>
        </div>
      </div>
    </div>
  );
});

function TodolistInput({ newlist, setnewList, addnewList }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!newlist.trim()) return;

    addnewList();
    setnewList("");
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-[#3B261A]/90 to-[#21140D]/90 w-full h-40 rounded-xl border border-[#CD9D74]/20 p-4"
    >
      <h1 className="text-[#F5E8DC] font-semibold">Todays Task List</h1>
      <p className="text-[#CBB39C]">Stay Consistent. Build the life you want</p>

      <div className="bg-gradient-to-r from-[#69432B]/50 to-[#382318]/60 h-14 rounded-lg flex items-center pl-4 border border-[#CD9D74]/20 shadow-inner">
        <div>
          <input
            value={newlist}
            onChange={(e) => setnewList(e.target.value)}
            className="w-150 h-9 bg-transparent text-[#F5E8DC] placeholder:text-[#B49A83] outline-none"
            type="text"
            placeholder="Add New Task"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-gradient-to-br from-[#D5A77F] to-[#A8754F] text-[#21140D] font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition h-14"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

function Todolistform() {
  const {
    list,
    newlist,
    setnewList,
    addnewList,
    deleteList,
    setModal,
    ToggleFucntion,
    totaldonetask
  } = useContext(Listcontext);

  const percentage = totaldonetask === 0 ? 0 : parseFloat(((totaldonetask / list.length)* 100.).toFixed(2));

  return (
    <div className="bg-gradient-to-br from-[#382318] to-[#1A100B] h-140 rounded-xl flex overflow-hidden border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.06),0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="bg-gradient-to-br from-[#302016]/90 to-[#21140D]/90 w-192 p-4 ">
        <TodolistInput
          newlist={newlist}
          setnewList={setnewList}
          addnewList={addnewList}
        />

        <TaskList
          list={list}
          deleteList={deleteList}
          setModal={setModal}
          ToggleFucntion={ToggleFucntion}
        />
      </div>

      <div className="bg-gradient-to-br from-[#291A11] to-[#1A100B] w-110 flex flex-col justify-around items-center">
        {/* Completed Tasks Card */}
        <div className="bg-gradient-to-br from-[#69432B]/60 to-[#302016]/80 h-50 w-90 rounded-xl border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.08)] p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#CBB39C] text-xs tracking-widest">
                YOUR PROGRESS
              </p>
              <h2 className="text-[#F5E8DC] text-lg font-bold mt-1">
                Completed Tasks
              </h2>
            </div>

            <div className="h-10 w-10 rounded-xl bg-[#A8754F]/20 flex items-center justify-center">
              <span className="text-[#D5A77F] text-xl">✓</span>
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between mb-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-[#F5E8DC]">{totaldonetask}</span>
                <span className="text-sm text-[#CBB39C]">/ {list.length} tasks</span>
              </div>
              <span className="text-lg font-bold text-[#D5A77F]">{percentage}</span>
            </div>

            <div className="h-2 w-full bg-[#21140D] rounded-full overflow-hidden">
              <div 
              style={{ width : `${percentage}%` }}
              className="h-full  bg-gradient-to-r from-[#A8754F] to-[#E2BC96] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Daily Productivity Card */}
        <div className="bg-gradient-to-br from-[#69432B]/60 to-[#302016]/80 h-70 w-90 rounded-xl border border-[#CD9D74]/20 shadow-[inset_0_1px_0_rgba(255,235,215,0.08)] p-5 flex flex-col">
          <p className="text-[#CBB39C] text-xs tracking-widest">KEEP GOING</p>

          <h2 className="text-[#F5E8DC] text-xl font-bold mt-1">
            Daily Productivity
          </h2>

          <p className="text-[#CBB39C] text-sm mt-1">
            Small steps lead to big progress.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[#A8754F]/20 flex items-center justify-center">
                <span className="text-[#D5A77F] text-lg">✓</span>
              </div>
              <div>
                <p className="text-[#F5E8DC] font-semibold text-sm">
                  {totaldonetask} Tasks Done
                </p>
                <p className="text-[#CBB39C] text-xs">Keep up the good work</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-[#A8754F]/20 flex items-center justify-center">
                <span className="text-[#D5A77F] text-lg">✦</span>
              </div>
              <div>
                <p className="text-[#F5E8DC] font-semibold text-sm">
                  Stay Consistent
                </p>
                <p className="text-[#CBB39C] text-xs">
                  Focus on one task at a time
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto rounded-lg bg-[#21140D]/60 border border-[#CD9D74]/10 p-3">
            <p className="text-[#D5A77F] text-sm font-semibold">
              Progress over perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TaskForm() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=14.5995&longitude=120.9842&current=temperature_2m,wind_speed_10m&timezone=Asia%2FManila",
        );
        const data = await response.json();

        setWeather(data.current.time);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="w-full h-full  p-6">
      <Header weather={weather} loading={loading} />
      <Todolistform />

      <div className="bg-gradient-to-r from-[#2D1B12]/80 to-[#170E09]/80 rounded-xl"></div>
    </div>
  );
}
