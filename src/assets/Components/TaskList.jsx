export default function TaskList({ list }){
return(
    <div className=" h-86  mt-4 rounded-lg overflow-hidden  overflow-y-auto pl-4 pt-4 ">
       
       {list.map((li)=> (
        <div key = {li.id} className="bg-amber-800/20 w-173 h-15 rounded-lg mb-2">
            <input type = "radio"></input>
            <h1 className="text-white ">{li.taskname}</h1>
        </div>
       ))}
      
    </div>
)
}