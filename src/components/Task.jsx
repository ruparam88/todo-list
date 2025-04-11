import React,{useEffect, useState} from 'react'

const Task = () => {
  const [Task, setTask] = useState('')
  const [Tasks, setTasks] = useState([])

  function storeTask(event){
      setTask(event.target.value)
  }

  function handleAddTask(){
    const newTask = {
      task : Task,
      time : new Date().getTime()
    };
    setTasks(Tasks => [...Tasks,newTask])
    setTask('')
  }

  function handleRemoveTask(index){
    setTasks(Tasks=>Tasks.filter((_,i)=>i!==index))
  }
  return (
    <div>
        <input type="text" className='border w-[70vw] rounded text-[#000000] bg-[#dfd2d2] p-1 m-1.5' value={Task} placeholder='Enter your Task here' onChange={storeTask}/>

        <button className='border rounded text-[#ffffff] bg-[#cb3737] p-1 m-1.5' onClick={handleAddTask}>click me</button>
        <ul className=''>  
          {
            Tasks.map((objTask,index)=>
              <div className="flex w-full">
            <li className="border w-full rounded text-white bg-[#52b5e7] p-1 m-1.5 flex justify-between" key={index}>
              <div>{objTask.task} {new Date(objTask.time).toLocaleString()}</div>
              <button onClick={()=>handleRemoveTask(index)} className="bg-black  text-white rounded p-1 ml-2">delete</button>
            </li>
          </div>)

          }
        </ul>
    </div>
  )
}

export default Task
