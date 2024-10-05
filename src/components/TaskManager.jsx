
import TaskColumn from './TaskColumn';
import Button from 'react-bootstrap/Button';

function TaskManager({ state, dispatch }) {

    return (
        <div className='task-manager'>
            <h1>Gestor de tareas</h1>
            <Button onClick={() => dispatch({ type: 'UPDATE_SHOW_TASK_MODAL', payload: true })}>
                Crear tarea
            </Button>
            {state.statusArray.map((status) => {
                return <TaskColumn 
                    key={status} 
                    status={status}
                    tasks={state.tasks.filter(task => task.status === status)} 
                    dispatch={dispatch}
                />;
            })}
        </div>
    );
}

export default TaskManager;