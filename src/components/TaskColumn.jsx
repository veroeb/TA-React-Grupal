import Task from './Task';
function TaskColumn( { status, tasks, dispatch } ) {
    return (
        <div className='task-column'>
            <h1>{status}</h1>
            {tasks.length > 0 ? (
                tasks.map((task) => { return <Task key={task.id} task={task} dispatch={dispatch} />; })
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default TaskColumn;