// import TaskItem from "./task/TaskItem";
// import TaskList from "./task/TaskList";

// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'

// const TaskManagement = () => {
//     return (
//         <DndProvider backend={HTML5Backend}>
//             <TaskList></TaskList>
//             {/* <TaskItem></TaskItem> */}
//         </DndProvider>
//     );
// };

// export default TaskManagement;

import TaskList from "./task/TaskList";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const TaskManagement = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <TaskList />
        </DndProvider>
    );
};

export default TaskManagement;
