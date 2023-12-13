import React, { useState } from 'react';

const TodoListProject = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='bg-slate-400 py-3'>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='p-2 border mr-2'
        />
        <button className='bg-black py-2 px-5 rounded text-white' onClick={addTask}>Add Task</button>
      </div>

      <h1 className='text-white text-xl'>Todo List Item</h1>
      <ul>
        {tasks.map((task, index) => (
          <li className='flex gap-2 py-1' key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
            <button className='bg-black rounded text-white px-2' onClick={() => toggleTask(index)}>Toggle</button>
            <button className='bg-black rounded text-red-500 px-2' onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );



  // const [tasks, setTasks] = useState([]);
  // const [newTask, setNewTask] = useState('');
  // const [editingIndex, setEditingIndex] = useState(null);
  // const [editedTask, setEditedTask] = useState('');

  // const addTask = () => {
  //   if (newTask.trim() !== '') {
  //     setTasks([...tasks, { text: newTask, completed: false }]);
  //     setNewTask('');
  //   }
  // };

  // const toggleTask = (index) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].completed = !updatedTasks[index].completed;
  //   setTasks(updatedTasks);
  // };

  // const deleteTask = (index) => {
  //   const updatedTasks = tasks.filter((_, i) => i !== index);
  //   setTasks(updatedTasks);
  // };

  // const startEditing = (index) => {
  //   setEditingIndex(index);
  //   setEditedTask(tasks[index].text);
  // };

  // const cancelEditing = () => {
  //   setEditingIndex(null);
  //   setEditedTask('');
  // };

  // const saveEditedTask = (index) => {
  //   const updatedTasks = [...tasks];
  //   updatedTasks[index].text = editedTask;
  //   setTasks(updatedTasks);
  //   setEditingIndex(null);
  //   setEditedTask('');
  // };

  // return (
  //   <div>
  //     <h1>Todo List</h1>
  //     <ul>
  //       {tasks.map((task, index) => (
  //         <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
  //           {editingIndex === index ? (
  //             <div>
  //               <input
  //                 type="text"
  //                 value={editedTask}
  //                 onChange={(e) => setEditedTask(e.target.value)}
  //               />
  //               <button onClick={() => saveEditedTask(index)}>Save</button>
  //               <button onClick={cancelEditing}>Cancel</button>
  //             </div>
  //           ) : (
  //             <div>
  //               {task.text}
  //               <button onClick={() => toggleTask(index)}>Toggle</button>
  //               <button onClick={() => deleteTask(index)}>Delete</button>
  //               <button onClick={() => startEditing(index)}>Edit</button>
  //             </div>
  //           )}
  //         </li>
  //       ))}
  //     </ul>
  //     <div>
  //       <input
  //         type="text"
  //         value={newTask}
  //         onChange={(e) => setNewTask(e.target.value)}
  //       />
  //       <button onClick={addTask}>Add Task</button>
  //     </div>
  //   </div>
  // );
};

export default TodoListProject;
