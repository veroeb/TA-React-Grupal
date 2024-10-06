import { Draggable } from "react-beautiful-dnd";
function Task( { task, dispatch, index } ) {
    const handleClick = () => {
        dispatch({ type: 'SET_TASK_TO_UPDATE', payload: task });
        dispatch({ type: 'UPDATE_SHOW_TASK_MODAL', payload: true });
    };

    const displayPriorityIcon = () => {
        switch (task.priority) {
            case 'Low':
                return <span className="priority-icon low"></span>;
            case 'Medium':
                return <span className="priority-icon medium"></span>;
            case 'High':
                return <span className="priority-icon high"></span>;
            default:
                return <span className="priority-icon"></span>;
        }
    };
    
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="task"
                    onClick={() => handleClick()}
                >
                    <p>{task.title}</p>
                    <p>{task.description}</p>
                    <p>{displayPriorityIcon()}</p>
                </div>
            )}
        </Draggable>
    );
}

export default Task;