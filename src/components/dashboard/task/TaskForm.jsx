/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useForm } from 'react-hook-form';

const TaskForm = ({ addTask }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
   
    // addTask(data);
    // console.log(data)
    // reset();

    const taskInfo = {
      ...data,
      status: 'todo',
    };

    console.log(taskInfo)
    fetch('https://to-do-task-server-ochre.vercel.app/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskInfo),
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('title')} placeholder="Title" className="border p-2 w-full" required />
      <textarea {...register('description')} placeholder="Description" className="border p-2 w-full" />
      <input type="date" {...register('deadline')} className="border p-2 w-full" />
      <select {...register('priority')} className="border p-2 w-full">
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">Add Task</button>
    </form>
  );
};

export default TaskForm;
