function Task( { task, dispatch } ) {
    const handleClick = () => {
        dispatch({ type: 'SET_TASK_TO_UPDATE', payload: task });
        dispatch({ type: 'UPDATE_SHOW_TASK_MODAL', payload: true });
    };

    return (
        <div className="task" onClick={() => handleClick()}>
            <p>{task.title}</p>
            <p>{task.description}</p>
        </div>
    );
}

export default Task;