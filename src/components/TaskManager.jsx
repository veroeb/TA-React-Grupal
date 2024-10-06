
import TaskColumn from './TaskColumn';
import Button from 'react-bootstrap/Button';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateTask } from './state/StateManager';
import ToggleThemeButton from './ToggleThemeButton';
function TaskManager({ state, dispatch }) {

    const handleShowTaskModal = () => {
        dispatch({ type: 'UPDATE_SHOW_TASK_MODAL', payload: true });
    };

    const handleOnDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        // Si el elemento fue movido a la misma columna, no hace nada
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        // Si el elemento fue movido a otra columna, actualiza el estado de la tarea
        const sourceTask = state.tasks.find(task => task.id === draggableId);
        sourceTask.status = destination.droppableId;
        updateTask(dispatch, sourceTask);
    };

    return (
        <div className={`task-manager ${state.theme}-theme`}>
            <h1>Gestor de tareas</h1>
            <Button onClick={handleShowTaskModal}>
                Crear tarea
            </Button>
            <ToggleThemeButton theme={state.theme} dispatch={dispatch} />
            <DragDropContext onDragEnd={handleOnDragEnd}>
                {state.statusArray.map((status) => {
                    return <TaskColumn 
                        key={status} 
                        status={status}
                        tasks={state.tasks.filter(task => task.status === status)} 
                        dispatch={dispatch}
                    />;
                })}
            </DragDropContext>
        </div>
    );
}

export default TaskManager;