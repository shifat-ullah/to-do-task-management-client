/* eslint-disable react/prop-types */


import { useDrop } from "react-dnd";
import Header from "./Header";
import Task from "./Task";

const ShowTaskItem = ({ status, setTasks, tasks, todos, ongoing, completed }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemInSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    let text = 'To Do';
    let bg = 'bg-slate-500';
    let taskToMap = todos;

    if (status === 'completed') {
        text = 'Completed';
        bg = 'bg-green-500';
        taskToMap = completed;
    }

    if (status === 'ongoing') {
        text = 'On Going';
        bg = 'bg-purple-500';
        taskToMap = ongoing;
    }

    const addItemInSection = (id) => {
        setTasks(prev => {
            const updatedTasks = prev.map(t => {
                if (t._id === id) {
                    const updatedTask = { ...t, status: status };
                    
                    // Update the task status on the server
                    fetch(`https://to-do-task-server-ochre.vercel.app/api/tasks/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ status: status }),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Task status updated:', data);
                    })
                    .catch(error => {
                        console.error('Error updating task status:', error);
                    });
    
                    return updatedTask;
                }
                return t;
            });
            return updatedTasks;
        });
    }


    const handleDelete =id=>{
        fetch(`https://to-do-task-server-ochre.vercel.app/api/tasks/${id}`, {
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data=>{
            const remail = tasks.filter(data._id !== id);
            setTasks(remail)

            
            console.log(data)
        })
    }
    

    return (
        <div ref={drop} className={`text-center ${isOver ? 'bg-blue-200' : ''}`}>
            <Header text={text} bg={bg} count={taskToMap.length} />
            {taskToMap.length > 0 && taskToMap.map(task => (
                <Task  key={task._id} handleDelete={handleDelete} task={task} tasks={tasks} setTasks={setTasks} />
            ))}
        </div>
    );
};

export default ShowTaskItem;
