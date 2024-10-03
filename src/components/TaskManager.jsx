import { useEffect, useReducer } from 'react';
import { initialState, reducer } from './state/State';
import { fetchTasks } from './state/StateManager';
import TaskColumn from './TaskColumn';

function TaskManager() {

   const [state, dispatch] = useReducer(reducer, initialState);

   useEffect(() => {
       fetchTasks(dispatch);
   }, []);

    return (
        <div className='task-manager'>
            <h1>Gestor de tareas</h1>
            {state.statusArray.map((status) => {
                return <TaskColumn key={status} status={status} tasks={state.tasks.filter(task => task.status === status)} />;
            })}
        </div>
    );
}

export default TaskManager;