/* eslint-disable react/prop-types */
// import { useDrop } from "react-dnd";
// import Header from "./Header";
// import Task from "./Task";

// const ShowTaskItem = ({

//     status,
//     setTasks,
//     tasks,
//     todos,
//     ongoing,
//     completed
// }) => {


//     const [{ isOver }, drop] = useDrop(() => ({
//         accept:'task',
//         drop : (item)=> addItemInSection(item.id),
//         collect: (monitor) => ({
//             isOver: !!monitor.isOver()
//         })
//     }))

//     let text = 'todo'
//     let bg = 'bg-slate-500'
//     let taskToMap = todos

//     if(status === 'completed'){
//         text = 'Completed'
//         bg = 'bg-green-500'
//         taskToMap = completed
//     }

//     if(status === 'ongoing'){
//         text = 'On Going'
//         bg = 'bg-purple-500'
//         taskToMap = ongoing
//     }

// // const addItemInSection =(id)=>{
// //     setTasks(prev=>{
// //         const mTask= prev.map(t => {
// //             if(t.id === id){
// //                 return {...t, status:status }
// //             }
// //             return mTask
// //         })
// //         return mTask
// //     })
   
// // }

// const addItemInSection = (id) => {
//     setTasks(prev => {
//         const mTask = prev.map(t => {
//             if (t.id === id) {
//                 return { ...t, status: status };
//             }
//             return t;
//         });
//         return mTask;
//     })
// }

//     return (
//         <div>
//             <div ref={drop} className={` text-center`} /* className="border-2 border-yellow-200 h-[500px]" */>
//               {/* <h1 className=" bg-blue-700 text-2xl text-white p-2 text-center">{status}</h1>
//                */}

//                <Header text={text} bg={bg} count={taskToMap.length}></Header>

//                {
//                 taskToMap.length > 0 && taskToMap.map(task=> <Task key={task._id} task={task} tasks={tasks} setTasks={setTasks}></Task>)
//                }
//           </div>
//         </div>
//     );
// };

// export default ShowTaskItem;

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
                    return { ...t, status: status };
                }
                return t;
            });
            return updatedTasks;
        });
    }

    return (
        <div ref={drop} className={`text-center ${isOver ? 'bg-blue-200' : ''}`}>
            <Header text={text} bg={bg} count={taskToMap.length} />
            {taskToMap.length > 0 && taskToMap.map(task => (
                <Task key={task._id} task={task} tasks={tasks} setTasks={setTasks} />
            ))}
        </div>
    );
};

export default ShowTaskItem;
