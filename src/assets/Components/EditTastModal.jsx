export default function EditTaskModal(){
    return(
        <div className="fixed inset-0 flex justify-center items-center bg-black-300/20">
            <div className="bg-gradient-to-br from-[#764226] to-[#311f16] rounded-lg shadow-2xl w-130 h-45 p-8 flex ">
               <div className=" flex justify-center items-center ">
                <div className="">
                    <input
                    className="border-2 w-90"
                    type="text" />
                    <button
                    className="text-white bg-amber-700 w-20"
                    >Done</button>
                    </div>
                
               </div>
            </div>
            
        </div>
    )
}