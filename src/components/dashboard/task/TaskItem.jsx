/* eslint-disable react/prop-types */

// import { useEffect, useState } from "react";
// import ShowTaskItem from "./ShowTaskItem";

// const TaskItem = ({ tasks, setTasks }) => {
//   // const [{ isDragging }, drag] = useDrag({
//   //   type: 'TASK',
//   //   item: { id: task._id },
//   //   collect: monitor => ({
//   //     isDragging: monitor.isDragging(),
//   //   }),
//   // });
//   console.log(tasks)
//   const [todos, setTodos] = useState([])
//   const [ongoing, setongoing] = useState([])
//   const [completed, setcompleted] = useState([])


//   useEffect(() => {
//     const fTodos = tasks.filter((task) => task.status === 'todo')
//     const fongoing = tasks.filter(task => task.status === 'ongoing')
//     const fcompleted = tasks.filter(task => task.status === 'completed')


//     setTodos(fTodos);
//     setongoing(fongoing)
//     setcompleted(fcompleted)
//   }, [tasks])


//   const statuses = ['todo', 'ongoing', 'completed']

//   return (
//     <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2">
//       {
//         statuses.map((status, index) => <ShowTaskItem key={index}
//           status={status}
//           setTasks={setTasks}
//           tasks={tasks}
//           todos={todos}
//           ongoing={ongoing}
//           completed={completed}
//         ></ShowTaskItem>)
//       }
//     </div>
//   );
// };

// export default TaskItem;

import { useEffect, useState } from "react";
import ShowTaskItem from "./ShowTaskItem";

const TaskItem = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const fTodos = tasks.filter((task) => task.status === 'todo');
        const fOngoing = tasks.filter(task => task.status === 'ongoing');
        const fCompleted = tasks.filter(task => task.status === 'completed');

        setTodos(fTodos);
        setOngoing(fOngoing);
        setCompleted(fCompleted);
    }, [tasks]);

    const statuses = ['todo', 'ongoing', 'completed'];

    return (
        <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1 md:grid-cols-2">
            {statuses.map((status, index) => (
                <ShowTaskItem
                    key={index}
                    status={status}
                    setTasks={setTasks}
                    tasks={tasks}
                    todos={todos}
                    ongoing={ongoing}
                    completed={completed}
                />
            ))}
        </div>
    );
};

export default TaskItem;



