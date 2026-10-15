import { useState } from "react";
import TaskForm from "./assets/Components/TaskForm";
import Listcontext from "./assets/Components/TaskContext";
import EditTaskModal from "./assets/Components/EditTastModal";

function App() {
  const [list, taskList] = useState([
    { id: 1, taskname: "Coding", status: false },
    { id: 2, taskname: "Hehe", status: false },
    { id: 3, taskname: "mwapsi", status: false },
  ]);
  const [newId, setnewId] = useState(4);
  const [newlist, setnewList] = useState("");
  const [modal ,setModal] = useState(false)
  const [selectedList ,setSelectedList] = useState("");
  
  const ToggleFucntion = (id)=> { 
   taskList(list.map((li)=> li.id === id ?{...li , status : !li.status}: li )) 
  }


  const addnewList = () => {
    const newaddedlist = [
      {
        id: newId,
        taskname: newlist,
        status: false,
      },
    ];

    taskList([...list, ...newaddedlist]);
    setnewId(newId + 1);
  };

  const deleteList = (id) => {
    taskList(list.filter((li) => li.id !== id));
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_15%_0%,rgba(153,99,62,0.25),transparent_45%),radial-gradient(ellipse_at_90%_80%,rgba(111,65,38,0.22),transparent_45%),linear-gradient(135deg,#2D1B12_0%,#170E09_55%,#24160F_100%)] h-20 w-52 flex pl-40 pr-40 h-screen w-screen">
      <Listcontext.Provider
        value={{ list, taskList, newlist, setnewList, addnewList, deleteList,modal,setModal,setSelectedList,selectedList,ToggleFucntion}}
      >
        <TaskForm />
         <EditTaskModal/>
      </Listcontext.Provider>
     
    </div>
  );
}

export default App;
