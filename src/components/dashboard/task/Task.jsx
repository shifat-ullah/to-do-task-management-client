/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useDrag } from "react-dnd";

// const Task = ({ task, tasks, setTasks }) => {
//     const [{ isDragging }, drag] = useDrag(() => ({
//         type:'task',
//         item :{id : task._id},
//         collect: (monitor) => ({
//             isDragging: !!monitor.isDragging()
//         })
//     }))

    
//     return (
//         <div>
//             <div ref={drag} className={`card w-[300px] mb-4 mt-2 bg-base-100 shadow-xl  ${isDragging ? ' bg-teal-300' : ''}`}>
//                 <div className="card-body">
//                     <h2 className="card-title">{task.title}</h2>
//                     <p>{task.description}</p>
//                     <p>priority : {task.priority}</p>
//                     <p>{task.deadline}</p>
//                     <div className="card-actions justify-end">
//                         <button className="btn btn-primary">delete</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Task;

import { useDrag } from "react-dnd";

const Task = ({ task , handleDelete }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: task._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    
    return (
        <div
            ref={drag}
            className={`card w-[300px] mb-4 mt-2 bg-base-100 shadow-xl ${isDragging ? 'bg-teal-300' : ''}`}
        >
            <div className="card-body">
                <h2 className="card-title">{task.title}</h2>
                <p>{task.description}</p>
                <p>Priority: {task.priority}</p>
                <p>{task.deadline}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelete(task._id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;
