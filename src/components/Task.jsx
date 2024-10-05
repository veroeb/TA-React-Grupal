function Task( { task, dispatch } ) {
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
        <div className="task" onClick={() => handleClick()}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <p>{displayPriorityIcon()}</p>
        </div>
    );
}

export default Task;