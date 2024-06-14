import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://to-do-task-server-ochre.vercel.app/api/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const handleDelete = async (taskId) => {
    try {
      const response = await fetch(`https://to-do-task-server-ochre.vercel.app/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTasks(tasks.filter(task => task._id !== taskId));
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="border p-4 w-full">
      <TaskItem tasks={tasks} setTasks={setTasks} onDelete={handleDelete} />
    </div>
  );
};

export default TaskList;