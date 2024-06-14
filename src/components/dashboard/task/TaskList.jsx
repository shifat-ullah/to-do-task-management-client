
// import { useEffect, useState } from 'react';
// import TaskItem from './TaskItem';

// const TaskList = () => {
//   // const [, ref] = useDrop({
//   //   accept: 'TASK',
//   //   drop: (item) => moveTask(item._id, status),
//   // });

// const [tasks, setTasks]=useState([]);
//   useEffect(() => {
//     fetch('http://localhost:5000/api/tasks')
//       .then(response => response.json())
//       .then(data => setTasks(data));
//   }, []);

//   console.log(tasks)

//   return (
//     <div className="border p-4 w-full">
      
//         <TaskItem setTasks={setTasks}  tasks={tasks} />
    
//     </div>
//   );
// };

// export default TaskList;


import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);

    return (
        <div className="border p-4 w-full">
            <TaskItem setTasks={setTasks} tasks={tasks} />
        </div>
    );
};

export default TaskList;

