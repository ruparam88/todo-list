import React, { useState } from 'react';

const Task = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function storeTask(event) {
    setTask(event.target.value);
  }

  function handleAddTask() {
    if (task.trim() === '') return;
    
    const newTask = {
      task: task.trim(),
      time: new Date().getTime()
    };
    
    setTasks(prevTasks => [...prevTasks, newTask]);
    setTask('');
  }

  function handleDoneTask(index) {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  }

  // Handle Enter key press to add task
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl shadow-xl p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-6 text-center">My Todo List</h1>
        
        <div className="flex mb-6">
          <input 
            type="text" 
            className="flex-1 px-3 py-2 md:py-3 rounded-l-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 bg-white shadow-sm"
            value={task} 
            placeholder="Add a new task..." 
            onChange={storeTask}
            onKeyPress={handleKeyPress}
          />
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-r-lg transition duration-200 font-medium shadow-sm"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
        
        {tasks.length === 0 ? (
          <div className="text-center py-6 text-gray-500">
            No tasks yet. Add some tasks to get started!
          </div>
        ) : (
          <ul className="space-y-3 overflow-y-auto max-h-64 md:max-h-96">  
            {tasks.map((taskObj, index) => (
              <li 
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-indigo-100 hover:shadow-md transition duration-200"
              >
                <div className="flex items-center justify-between p-3 md:p-4">
                  <div className="flex-1 pr-2">
                    <p className="text-gray-800 font-medium text-sm md:text-base mb-1 break-words">{taskObj.task}</p>
                    <p className="text-gray-500 text-xs md:text-sm">{new Date(taskObj.time).toLocaleString()}</p>
                  </div>
                  <button 
                    onClick={() => handleDoneTask(index)} 
                    className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-1 md:px-4 md:py-2 ml-2 transition duration-200 font-medium shadow-sm text-sm whitespace-nowrap"
                  >
                    Complete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        {tasks.length > 0 && (
          <div className="mt-4 text-center text-gray-600 text-sm md:text-base">
            You have {tasks.length} task{tasks.length !== 1 ? 's' : ''} remaining
          </div>
        )}
      </div>
    </div>
  );
}

export default Task;
