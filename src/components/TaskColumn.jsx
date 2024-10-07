import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
function TaskColumn( { status, tasks, dispatch } ) {
    return (
        <div className='task-column'>
            <h1>{status}</h1>
            <Droppable droppableId={status} type="group">
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="droppable-container"
                    >
                        {provided.placeholder}
                        {tasks.length > 0 ? (
                            tasks.map((task, index) => { return <Task key={task.id} task={task} dispatch={dispatch} index={index} />; })
                        ) : (
                            null
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
}

export default TaskColumn;