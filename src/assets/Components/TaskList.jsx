export default function TaskList({ list }){
return(
    <div className=" h-86  mt-4 rounded-lg overflow-hidden  overflow-y-auto pl-4 pt-4 ">
       
       {list.map((li)=> (
        <div key = {li.id} className="bg-amber-800/20 w-173 h-15 rounded-lg mb-2 flex">
            <div className="bg-amber-400 flex">
               <input type = "radio"></input>
            </div>
           
           <div className="bg-blue-700 flex justify-center items-center"> 
            <div>
                <h1 className="text-white ">{li.taskname}</h1>
            </div>
           
           </div>
          
        </div>
       ))}
      
    </div>
)
}